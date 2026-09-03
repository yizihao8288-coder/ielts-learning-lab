"""Shared generation and validation pipeline.

The module deliberately uses only Python's standard library.  The local app and
the reproducibility scripts therefore exercise exactly the same validation and
repair logic without requiring an SDK installation.

Parsing, schema checks and learning-content checks remain separate on purpose:
a response can be valid JSON without being useful to a learner.
"""

from __future__ import annotations

from dataclasses import asdict, dataclass
import hashlib
import json
import os
import re
import time
from typing import Any, Callable, Mapping
from urllib import error, request


DEFAULT_MODEL = "gpt-5.6-luna"
DEFAULT_ENDPOINT = "https://api.openai.com/v1/responses"
REQUIRED_FIELDS = ("word", "meaning_zh", "meaning_en", "example")
ITEM_SCHEMA: dict[str, Any] = {
    "type": "object",
    "properties": {
        "word": {"type": "string"},
        "meaning_zh": {"type": "string"},
        "meaning_en": {"type": "string"},
        "example": {"type": "string"},
    },
    "required": list(REQUIRED_FIELDS),
    "additionalProperties": False,
}

PLACEHOLDER_PATTERNS = (
    r"\b(?:tbd|todo|placeholder|unknown|n/?a)\b",
    r"待补充|占位|未知",
    r"\bas an ai\b",
    r"\b(?:here is|here's) (?:the|your|a) (?:json|answer|response)\b",
    r"\btarget (?:word|phrase)\b",
    r"\bprovided (?:word|phrase)\b",
)


class GenerationError(RuntimeError):
    """A safe, user-facing generation failure without secrets or raw headers."""

    def __init__(self, code: str, message: str, *, retryable: bool = False, status: int = 502):
        super().__init__(message)
        self.code = code
        self.retryable = retryable
        self.status = status


@dataclass(frozen=True)
class ValidationReport:
    json_parse_ok: bool
    schema_ok: bool
    content_ok: bool
    usable: bool
    failures: tuple[str, ...]

    def to_dict(self) -> dict[str, Any]:
        data = asdict(self)
        data["failures"] = list(self.failures)
        return data


@dataclass(frozen=True)
class ModelResponse:
    response_id: str
    output_text: str
    model: str
    usage: dict[str, int]
    latency_ms: int


@dataclass(frozen=True)
class GenerationResult:
    condition: str
    word: str
    item: dict[str, str] | None
    first_item: dict[str, str] | None
    first_output: str
    final_output: str
    first_validation: ValidationReport
    final_validation: ValidationReport
    repair_count: int
    model: str
    response_ids: tuple[str, ...]
    latency_ms: int
    usage: dict[str, int]
    prompt_hash: str

    def to_record(self) -> dict[str, Any]:
        # Keep raw outputs beside derived metrics so results can be audited and
        # recalculated later without calling the model again.
        return {
            "condition": self.condition,
            "word": self.word,
            "item": self.item,
            "first_item": self.first_item,
            "raw": {"first": self.first_output, "final": self.final_output},
            "validation": {
                "first": self.first_validation.to_dict(),
                "final": self.final_validation.to_dict(),
            },
            "repair_count": self.repair_count,
            "model": self.model,
            "response_ids": list(self.response_ids),
            "latency_ms": self.latency_ms,
            "usage": self.usage,
            "prompt_hash": self.prompt_hash,
        }


def normalise_space(value: Any) -> str:
    return re.sub(r"\s+", " ", str(value or "")).strip()


def normalise_target(value: Any) -> str:
    return normalise_space(value).strip(".,!?;:").casefold()


def word_count(value: Any) -> int:
    return len(re.findall(r"[A-Za-z]+(?:['’-][A-Za-z]+)?|\d+(?:\.\d+)?", str(value or "")))


def contains_target(example: str, target: str) -> bool:
    clean_example = normalise_space(example).casefold()
    clean_target = normalise_target(target)
    if not clean_target:
        return False
    pattern = rf"(?<![\w]){re.escape(clean_target)}(?![\w])"
    return re.search(pattern, clean_example, flags=re.UNICODE) is not None


def parse_item(raw: str | Mapping[str, Any] | None) -> tuple[dict[str, Any] | None, bool]:
    if isinstance(raw, Mapping):
        return dict(raw), True
    if not isinstance(raw, str) or not raw.strip():
        return None, False
    candidate = raw.strip()
    if candidate.startswith("```"):
        candidate = re.sub(r"^```(?:json)?\s*", "", candidate, flags=re.IGNORECASE)
        candidate = re.sub(r"\s*```$", "", candidate)
    try:
        parsed = json.loads(candidate)
    except (json.JSONDecodeError, TypeError):
        return None, False
    return (dict(parsed), True) if isinstance(parsed, Mapping) else (None, True)


def validate_item(raw: str | Mapping[str, Any] | None, target_word: str) -> ValidationReport:
    item, parsed = parse_item(raw)
    failures: list[str] = []
    if not parsed:
        return ValidationReport(False, False, False, False, ("json_parse",))
    if item is None:
        return ValidationReport(True, False, False, False, ("top_level_object",))

    # First ask whether every condition produced the same comparable data shape.
    missing = [field for field in REQUIRED_FIELDS if field not in item]
    extras = sorted(set(item) - set(REQUIRED_FIELDS))
    wrong_types = [field for field in REQUIRED_FIELDS if field in item and not isinstance(item[field], str)]
    empty = [field for field in REQUIRED_FIELDS if isinstance(item.get(field), str) and not item[field].strip()]
    if missing:
        failures.append("missing_fields:" + ",".join(missing))
    if extras:
        failures.append("extra_fields:" + ",".join(extras))
    if wrong_types:
        failures.append("wrong_types:" + ",".join(wrong_types))
    if empty:
        failures.append("empty_fields:" + ",".join(empty))
    schema_ok = not (missing or extras or wrong_types or empty)

    if not schema_ok:
        return ValidationReport(True, False, False, False, tuple(failures))

    # Only structurally comparable items reach the learning-content checks.
    word = normalise_space(item["word"])
    meaning_zh = normalise_space(item["meaning_zh"])
    meaning_en = normalise_space(item["meaning_en"])
    example = normalise_space(item["example"])

    if normalise_target(word) != normalise_target(target_word):
        failures.append("word_mismatch")
    if not re.search(r"[\u3400-\u9fff]", meaning_zh):
        failures.append("meaning_zh_no_chinese")
    definition_words = word_count(meaning_en)
    if definition_words < 5 or definition_words > 35:
        failures.append("meaning_en_length")
    if not contains_target(example, target_word):
        failures.append("example_missing_target")
    example_words = word_count(example)
    if example_words < 8 or example_words > 35:
        failures.append("example_length")

    all_text = "\n".join((word, meaning_zh, meaning_en, example))
    if any(re.search(pattern, all_text, re.IGNORECASE) for pattern in PLACEHOLDER_PATTERNS):
        failures.append("placeholder_or_meta")

    comparable = [normalise_target(meaning_zh), normalise_target(meaning_en), normalise_target(example)]
    if len(set(comparable)) != len(comparable):
        failures.append("duplicate_content")

    return ValidationReport(True, True, not failures, not failures, tuple(failures))


def _extract_output_text(payload: Mapping[str, Any]) -> str:
    direct = payload.get("output_text")
    if isinstance(direct, str):
        return direct
    pieces: list[str] = []
    for output in payload.get("output", []) if isinstance(payload.get("output"), list) else []:
        if not isinstance(output, Mapping):
            continue
        for content in output.get("content", []) if isinstance(output.get("content"), list) else []:
            if isinstance(content, Mapping) and content.get("type") == "output_text":
                text = content.get("text")
                if isinstance(text, str):
                    pieces.append(text)
    return "".join(pieces)


def _normalise_usage(value: Any) -> dict[str, int]:
    usage = value if isinstance(value, Mapping) else {}
    return {
        "input_tokens": int(usage.get("input_tokens") or 0),
        "output_tokens": int(usage.get("output_tokens") or 0),
        "total_tokens": int(usage.get("total_tokens") or 0),
    }


class OpenAIResponsesClient:
    """Small Responses API client with no SDK dependency."""

    def __init__(
        self,
        api_key: str | None = None,
        model: str | None = None,
        endpoint: str = DEFAULT_ENDPOINT,
        timeout: float = 60,
        transport: Callable[[dict[str, Any]], Mapping[str, Any]] | None = None,
    ) -> None:
        self.api_key = api_key if api_key is not None else os.environ.get("OPENAI_API_KEY", "")
        self.model = model or os.environ.get("OPENAI_MODEL", DEFAULT_MODEL)
        self.endpoint = endpoint
        self.timeout = timeout
        self.transport = transport

    def create(self, payload: dict[str, Any]) -> ModelResponse:
        if not self.api_key and self.transport is None:
            raise GenerationError("missing_api_key", "Online enhancement is disabled because OPENAI_API_KEY is not set.", status=503)
        started = time.perf_counter()
        if self.transport is not None:
            response_payload = self.transport(payload)
        else:
            body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
            api_request = request.Request(
                self.endpoint,
                data=body,
                method="POST",
                headers={
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json",
                    "User-Agent": "ielts-learning-lab/0.1.0",
                },
            )
            try:
                with request.urlopen(api_request, timeout=self.timeout) as response:
                    response_payload = json.loads(response.read().decode("utf-8"))
            except error.HTTPError as exc:
                status = int(exc.code)
                if status == 429:
                    raise GenerationError("rate_limited", "The generation service is rate limited. The local dictionary remains available.", retryable=True, status=503) from exc
                if status in (401, 403):
                    raise GenerationError("api_authentication", "The server API credential was rejected. The local dictionary remains available.", status=503) from exc
                raise GenerationError("upstream_http", f"The generation service returned HTTP {status}.", retryable=status >= 500, status=502) from exc
            except (error.URLError, TimeoutError) as exc:
                raise GenerationError("network_error", "The generation service is temporarily unreachable. The local dictionary remains available.", retryable=True, status=503) from exc
            except (UnicodeError, json.JSONDecodeError) as exc:
                raise GenerationError("invalid_upstream_response", "The generation service returned an unreadable response.", status=502) from exc
        latency_ms = round((time.perf_counter() - started) * 1000)
        if not isinstance(response_payload, Mapping):
            raise GenerationError("invalid_upstream_response", "The generation service returned an invalid response.", status=502)
        output_text = _extract_output_text(response_payload)
        if not output_text:
            raise GenerationError("empty_model_output", "The generation service returned no text.", status=502)
        return ModelResponse(
            response_id=str(response_payload.get("id") or ""),
            output_text=output_text,
            model=str(response_payload.get("model") or self.model),
            usage=_normalise_usage(response_payload.get("usage")),
            latency_ms=latency_ms,
        )


def _instructions() -> str:
    return (
        "You create concise IELTS vocabulary learning items for a Chinese learner. "
        "Return exactly these fields: word, meaning_zh, meaning_en, example. "
        "Keep the input spelling in word. meaning_zh must contain Chinese. "
        "meaning_en must be 5-35 English words. example must naturally contain the exact target word or phrase "
        "and contain 8-35 English words. Do not use placeholders or discuss the task."
    )


def _first_payload(word: str, condition: str, model: str) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "model": model,
        "instructions": _instructions(),
        "input": f"Create one learning item for this exact target: {word}",
        "reasoning": {"effort": "none"},
        "max_output_tokens": 350,
        "store": False,
    }
    # The prompt and fields stay fixed; only the response constraint changes.
    # This keeps the three experiment conditions meaningfully comparable.
    if condition in ("schema", "guarded"):
        payload["text"] = {
            "format": {
                "type": "json_schema",
                "name": "ielts_vocabulary_item",
                "strict": True,
                "schema": ITEM_SCHEMA,
            }
        }
    return payload


def _repair_payload(word: str, raw: str, failures: tuple[str, ...], model: str) -> dict[str, Any]:
    failure_text = ", ".join(failures) or "unknown_validation_failure"
    return {
        "model": model,
        "instructions": _instructions(),
        "input": (
            f"Repair the item for the exact target {word!r}. Validation failures: {failure_text}.\n"
            f"Invalid output:\n{raw[:4000]}"
        ),
        "reasoning": {"effort": "none"},
        "max_output_tokens": 350,
        "store": False,
        "text": {
            "format": {
                "type": "json_schema",
                "name": "ielts_vocabulary_item_repair",
                "strict": True,
                "schema": ITEM_SCHEMA,
            }
        },
    }


def _add_usage(left: Mapping[str, int], right: Mapping[str, int]) -> dict[str, int]:
    return {key: int(left.get(key, 0)) + int(right.get(key, 0)) for key in ("input_tokens", "output_tokens", "total_tokens")}


def generate_item(word: str, condition: str = "guarded", client: OpenAIResponsesClient | None = None) -> GenerationResult:
    target = normalise_space(word)
    if not target or len(target) > 80 or re.search(r"[\x00-\x1f\x7f]", target):
        raise GenerationError("invalid_word", "word must contain 1-80 visible characters.", status=400)
    if condition not in ("baseline", "schema", "guarded"):
        raise GenerationError("invalid_condition", "condition must be baseline, schema, or guarded.", status=400)
    active_client = client or OpenAIResponsesClient()
    first_payload = _first_payload(target, condition, active_client.model)
    prompt_material = json.dumps(
        {"instructions": first_payload["instructions"], "input": first_payload["input"], "condition": condition},
        ensure_ascii=False,
        sort_keys=True,
    )
    # A hash identifies the exact prompt design without copying credentials or
    # unrelated environment details into the frozen experiment record.
    prompt_hash = hashlib.sha256(prompt_material.encode("utf-8")).hexdigest()
    first_response = active_client.create(first_payload)
    first_item, _ = parse_item(first_response.output_text)
    first_validation = validate_item(first_response.output_text, target)
    final_response = first_response
    final_item = first_item
    final_validation = first_validation
    repair_count = 0
    response_ids = [first_response.response_id]
    total_latency = first_response.latency_ms
    total_usage = dict(first_response.usage)

    # One repair tests whether targeted feedback helps while keeping cost and
    # latency bounded; repeated retries would turn this into a different system.
    if condition == "guarded" and not first_validation.usable:
        repair_count = 1
        repair_response = active_client.create(
            _repair_payload(target, first_response.output_text, first_validation.failures, active_client.model)
        )
        final_response = repair_response
        final_item, _ = parse_item(repair_response.output_text)
        final_validation = validate_item(repair_response.output_text, target)
        response_ids.append(repair_response.response_id)
        total_latency += repair_response.latency_ms
        total_usage = _add_usage(total_usage, repair_response.usage)

    clean_item = None
    if final_item is not None:
        clean_item = {field: normalise_space(final_item.get(field)) for field in REQUIRED_FIELDS}

    return GenerationResult(
        condition=condition,
        word=target,
        item=clean_item,
        first_item={field: normalise_space(first_item.get(field)) for field in REQUIRED_FIELDS} if first_item else None,
        first_output=first_response.output_text,
        final_output=final_response.output_text,
        first_validation=first_validation,
        final_validation=final_validation,
        repair_count=repair_count,
        model=final_response.model,
        response_ids=tuple(response_ids),
        latency_ms=total_latency,
        usage=total_usage,
        prompt_hash=prompt_hash,
    )
