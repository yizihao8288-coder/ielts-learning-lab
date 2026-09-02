from __future__ import annotations

import json
from pathlib import Path
import unittest

from research.pipeline import OpenAIResponsesClient, generate_item, validate_item
from research.run_experiment import benchmark_words


def response(text: str, identifier: str = "resp_test") -> dict:
    return {
        "id": identifier,
        "model": "gpt-5.6-luna",
        "output": [
            {
                "type": "message",
                "content": [{"type": "output_text", "text": text}],
            }
        ],
        "usage": {"input_tokens": 20, "output_tokens": 30, "total_tokens": 50},
    }


VALID_ITEM = {
    "word": "research",
    "meaning_zh": "研究；系统性调查",
    "meaning_en": "A careful investigation intended to establish facts or reach new conclusions.",
    "example": "The research provided useful evidence for improving public transport in the city.",
}


class ValidationTests(unittest.TestCase):
    def test_valid_item_passes_all_checks(self) -> None:
        report = validate_item(VALID_ITEM, "research")
        self.assertTrue(report.usable)
        self.assertEqual(report.failures, ())

    def test_json_and_schema_are_reported_separately(self) -> None:
        malformed = validate_item("not json", "research")
        missing = validate_item({"word": "research"}, "research")
        self.assertFalse(malformed.json_parse_ok)
        self.assertTrue(missing.json_parse_ok)
        self.assertFalse(missing.schema_ok)

    def test_semantic_rules_report_specific_failures(self) -> None:
        item = dict(VALID_ITEM)
        item.update(
            word="analysis",
            meaning_zh="Chinese definition",
            meaning_en="Too short",
            example="This is only a placeholder sentence without it.",
        )
        report = validate_item(item, "research")
        self.assertTrue(report.schema_ok)
        self.assertFalse(report.content_ok)
        self.assertIn("word_mismatch", report.failures)
        self.assertIn("meaning_zh_no_chinese", report.failures)
        self.assertIn("meaning_en_length", report.failures)
        self.assertIn("example_missing_target", report.failures)
        self.assertIn("placeholder_or_meta", report.failures)


class GenerationTests(unittest.TestCase):
    def test_guarded_repairs_at_most_once(self) -> None:
        calls: list[dict] = []

        def transport(payload: dict) -> dict:
            calls.append(payload)
            return response('{"word":"wrong"}', f"resp_{len(calls)}")

        result = generate_item("research", "guarded", OpenAIResponsesClient(transport=transport))
        self.assertEqual(len(calls), 2)
        self.assertEqual(result.repair_count, 1)
        self.assertFalse(result.final_validation.usable)

    def test_baseline_and_schema_use_distinct_response_constraints(self) -> None:
        payloads: list[dict] = []

        def transport(payload: dict) -> dict:
            payloads.append(payload)
            return response(json.dumps(VALID_ITEM, ensure_ascii=False))

        client = OpenAIResponsesClient(transport=transport)
        baseline = generate_item("research", "baseline", client)
        schema = generate_item("research", "schema", client)
        self.assertTrue(baseline.final_validation.usable)
        self.assertTrue(schema.final_validation.usable)
        self.assertNotIn("text", payloads[0])
        self.assertTrue(payloads[1]["text"]["format"]["strict"])

    def test_success_records_usage_and_prompt_hash(self) -> None:
        client = OpenAIResponsesClient(transport=lambda _: response(json.dumps(VALID_ITEM, ensure_ascii=False)))
        result = generate_item("research", "guarded", client)
        self.assertEqual(result.usage["total_tokens"], 50)
        self.assertEqual(len(result.prompt_hash), 64)
        self.assertEqual(result.repair_count, 0)

    def test_benchmark_selection_is_deterministic_and_has_100_unique_targets(self) -> None:
        source = Path(__file__).resolve().parents[1] / "填空收藏本99词.txt"
        first = benchmark_words(source)
        second = benchmark_words(source)
        self.assertEqual(first, second)
        self.assertEqual(len(first), 100)
        self.assertEqual(len({word.casefold() for word in first}), 100)
        self.assertEqual(first[-1], "adaptation")


if __name__ == "__main__":
    unittest.main()
