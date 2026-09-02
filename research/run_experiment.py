"""Run a small, explicit generation experiment and freeze JSONL records.

The safe default is a three-word smoke run. The full planned design requires
an explicit ``--limit 100 --repeats 3`` and cannot be triggered by accident.
"""

from __future__ import annotations

import argparse
from datetime import datetime, timezone
import json
from pathlib import Path

from .pipeline import GenerationError, OpenAIResponsesClient, generate_item, normalise_target


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = ROOT / "填空收藏本99词.txt"
SUPPLEMENT = ("adaptation", "addition", "administration", "admission")


def benchmark_words(source: Path) -> list[str]:
    seen: set[str] = set()
    words: list[str] = []
    for line in source.read_text(encoding="utf-8").splitlines():
        word = line.split("|", 1)[0].strip()
        key = normalise_target(word)
        if word and key not in seen:
            seen.add(key)
            words.append(word)
    for word in sorted(SUPPLEMENT):
        key = normalise_target(word)
        if len(words) >= 100:
            break
        if key not in seen:
            seen.add(key)
            words.append(word)
    return words


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Freeze Responses API vocabulary-generation records.")
    parser.add_argument("--source", type=Path, default=DEFAULT_SOURCE)
    parser.add_argument("--limit", type=int, default=3, help="Words to run; explicitly use 100 for the full protocol.")
    parser.add_argument("--repeats", type=int, default=1, help="Repeats per condition; explicitly use 3 for the full protocol.")
    parser.add_argument("--condition", action="append", choices=("baseline", "schema", "guarded"))
    parser.add_argument("--output", type=Path)
    args = parser.parse_args(argv)
    if args.limit < 1 or args.limit > 100 or args.repeats < 1 or args.repeats > 3:
        parser.error("limit must be 1-100 and repeats must be 1-3")
    if not args.source.is_file():
        parser.error(f"source not found: {args.source}")

    conditions = args.condition or ["baseline", "schema", "guarded"]
    words = benchmark_words(args.source)[: args.limit]
    stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    output = args.output or ROOT / ".runtime" / "experiments" / f"generation-{stamp}.jsonl"
    output.parent.mkdir(parents=True, exist_ok=True)
    client = OpenAIResponsesClient()
    completed = 0

    with output.open("x", encoding="utf-8", newline="\n") as stream:
        for repeat in range(1, args.repeats + 1):
            for word in words:
                for condition in conditions:
                    base = {"runAt": datetime.now(timezone.utc).isoformat(), "repeat": repeat, "word": word, "condition": condition}
                    try:
                        record = {**base, **generate_item(word, condition, client).to_record()}
                    except GenerationError as exc:
                        record = {**base, "error": {"code": exc.code, "message": str(exc), "retryable": exc.retryable}}
                    stream.write(json.dumps(record, ensure_ascii=False, separators=(",", ":")) + "\n")
                    stream.flush()
                    completed += 1
                    print(f"[{completed}/{len(words) * len(conditions) * args.repeats}] {condition}: {word}")

    print(f"Frozen records: {output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
