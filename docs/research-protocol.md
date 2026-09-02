# Research protocol — pre-results version

## Research question

In IELTS vocabulary item generation, can strict JSON Schema and a semantic validation–repair step improve final usability over asking for JSON in a plain prompt?

## Conditions

All conditions use the same model, instructions and four fields (`word`, `meaning_zh`, `meaning_en`, `example`). The default model is `gpt-5.6-luna` with `reasoning.effort=none`; `OPENAI_MODEL` may override it.

1. **Baseline:** request JSON in natural-language instructions, without a response schema.
2. **Schema:** use strict JSON Schema.
3. **Guarded:** use strict JSON Schema, run semantic validation, then perform at most one schema-constrained repair that includes the failed rule names.

## Planned benchmark

Deduplicate the public 99-word list by case-folded, whitespace-normalised spelling. If fewer than 100 entries remain, append the first missing item in alphabetical order from the built-in application vocabulary. Preserve single words, phrases and proper nouns. Remove personal answers and timestamps.

Run 100 words × 3 conditions × 3 repeats, producing 900 first-pass outputs. Freeze one JSONL record per word/condition/repeat with model, condition, prompt hash, response ID, UTC time, latency, token usage, validation state, raw first/final text and repair count. Never store an API key.

## Automatic outcomes

- JSON parsing rate
- schema pass rate
- semantic-constraint pass rate
- first-pass usability
- guarded repair success
- final usability
- latency and token usage

Usability requires both structure and every semantic rule. Metrics must be recomputed from frozen JSONL rather than manually entered.

## Human review

After generation, sample 20 words with a fixed seed and show all three conditions under random anonymous labels. One author rates definition correctness, example naturalness and teaching usefulness from 1–5. Report this as a **single-author review**, not an expert study. Preserve the blinded mapping separately until ratings are complete.

## Analysis

Report paired per-word descriptions, word-level bootstrap confidence intervals and a failure taxonomy. Do not claim statistical significance or learning improvement from this small evaluation. Personal training history may be reported only as an anonymous `n=1` usage description; it does not establish causality.

## Current status (2026-09-02)

- Shared schema/semantic validator: implemented.
- Guarded one-repair limit: implemented and tested.
- Local/HTTP integration: implemented and tested.
- 900-output evaluation: not run.
- Human blind review: not run.
- Research claims: none yet.

This separation is intentional: a runnable method is evidence of engineering completion, not evidence that one generation condition is better.
