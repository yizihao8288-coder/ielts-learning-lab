"""Recompute compact descriptive metrics from frozen experiment JSONL."""

from __future__ import annotations

import argparse
from collections import defaultdict
import json
from pathlib import Path
from statistics import mean


def rate(values: list[bool]) -> float | None:
    return round(sum(values) / len(values), 4) if values else None


def evaluate(path: Path) -> dict:
    groups: dict[str, list[dict]] = defaultdict(list)
    for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        try:
            record = json.loads(line)
        except json.JSONDecodeError as exc:
            raise ValueError(f"invalid JSON on line {number}") from exc
        groups[str(record.get("condition") or "unknown")].append(record)

    metrics: dict[str, dict] = {}
    for condition, records in sorted(groups.items()):
        completed = [record for record in records if "error" not in record and "validation" in record]
        first = [record["validation"]["first"] for record in completed]
        final = [record["validation"]["final"] for record in completed]
        latencies = [int(record.get("latency_ms") or 0) for record in completed]
        tokens = [int(record.get("usage", {}).get("total_tokens") or 0) for record in completed]
        repairs = [record for record in completed if int(record.get("repair_count") or 0) > 0]
        metrics[condition] = {
            "attempted": len(records),
            "completed": len(completed),
            "jsonParseRate": rate([bool(item.get("json_parse_ok")) for item in first]),
            "schemaPassRate": rate([bool(item.get("schema_ok")) for item in first]),
            "firstUsabilityRate": rate([bool(item.get("usable")) for item in first]),
            "finalUsabilityRate": rate([bool(item.get("usable")) for item in final]),
            "repairAttempted": len(repairs),
            "repairSuccessRate": rate([bool(record["validation"]["final"].get("usable")) for record in repairs]),
            "meanLatencyMs": round(mean(latencies), 1) if latencies else None,
            "meanTotalTokens": round(mean(tokens), 1) if tokens else None,
        }
    return {"source": str(path), "conditions": metrics}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("jsonl", type=Path)
    args = parser.parse_args()
    if not args.jsonl.is_file():
        parser.error(f"file not found: {args.jsonl}")
    print(json.dumps(evaluate(args.jsonl), ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
