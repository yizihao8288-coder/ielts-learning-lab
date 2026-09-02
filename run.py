#!/usr/bin/env python3
"""Portable local server for IELTS Learning Lab.

Core practice, browser storage, browser speech and the bundled dictionary work
without an API key.  Server-side generation and neural speech are optional.
All mutable server files stay inside this repository.
"""

from __future__ import annotations

import argparse
import base64
import binascii
from datetime import datetime, timezone
import json
import mimetypes
import os
from pathlib import Path, PurePosixPath
import shutil
import subprocess
import sys
import tempfile
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any
from urllib.parse import parse_qs, unquote, urlsplit
import webbrowser

from research.pipeline import GenerationError, OpenAIResponsesClient, generate_item


ROOT = Path(__file__).resolve().parent
RUNTIME = ROOT / ".runtime"
TEMP_DIR = RUNTIME / "temp"
PYTHON_PACKAGES = RUNTIME / "python-packages"
STATE_FILE = ROOT / "trainer-state.json"
BACKUP_DIR = ROOT / "data-backups"
MAX_JSON_BODY = 8 * 1024
MAX_STATE_BODY = 12 * 1024 * 1024
MAX_TTS_TEXT = 4_000
BACKUP_LIMIT = 48
BACKUP_INTERVAL_SECONDS = 30 * 60
PRIVATE_STATIC_NAMES = {
    "trainer-state.json",
    "填空收藏本99词.csv",
    "file-recovery-state.js",
}
PRIVATE_STATIC_DIRECTORIES = {"data-backups", "recovery"}

EDGE_VOICES = (
    ("Edge:en-GB-SoniaNeural", "Sonia · IELTS British", "en-GB", "British"),
    ("Edge:en-GB-RyanNeural", "Ryan · IELTS British", "en-GB", "British"),
    ("Edge:en-AU-NatashaNeural", "Natasha · IELTS Australian", "en-AU", "Australian"),
    ("Edge:en-AU-WilliamMultilingualNeural", "William · IELTS Australian", "en-AU", "Australian"),
    ("Edge:en-NZ-MollyNeural", "Molly · IELTS New Zealand", "en-NZ", "New Zealand"),
    ("Edge:en-NZ-MitchellNeural", "Mitchell · IELTS New Zealand", "en-NZ", "New Zealand"),
)


def prepare_runtime() -> None:
    for path in (RUNTIME, TEMP_DIR, PYTHON_PACKAGES):
        path.mkdir(parents=True, exist_ok=True)
    os.environ["TEMP"] = str(TEMP_DIR)
    os.environ["TMP"] = str(TEMP_DIR)
    os.environ["PYTHONPYCACHEPREFIX"] = str(RUNTIME / "pycache")
    if PYTHON_PACKAGES.is_dir() and str(PYTHON_PACKAGES) not in sys.path:
        sys.path.insert(0, str(PYTHON_PACKAGES))


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


def deployment_config() -> bytes:
    enabled = bool(os.environ.get("OPENAI_API_KEY", "").strip())
    value = {
        "deployment": "local",
        "serverFeatures": True,
        "onlineGenerationAvailable": enabled,
        "privacy": "A target word is sent to OpenAI only after the user requests online generation.",
    }
    return ("window.IELTS_LAB_CONFIG = " + json.dumps(value, ensure_ascii=False) + ";\n").encode("utf-8")


def safe_static_path(raw_path: str) -> Path | None:
    decoded = unquote(raw_path).replace("\\", "/")
    pure = PurePosixPath(decoded.lstrip("/"))
    if any(part in ("", ".", "..") for part in pure.parts):
        return None
    relative = Path(*pure.parts) if pure.parts else Path("index.html")
    if decoded.endswith("/") and pure.parts:
        relative /= "index.html"
    candidate = (ROOT / relative).resolve()
    try:
        candidate.relative_to(ROOT)
    except ValueError:
        return None
    if any(part.startswith(".") for part in relative.parts):
        return None
    if relative.name in PRIVATE_STATIC_NAMES or (relative.parts and relative.parts[0] in PRIVATE_STATIC_DIRECTORIES):
        return None
    return candidate


def read_state() -> dict[str, Any]:
    if not STATE_FILE.is_file():
        return {}
    try:
        value = json.loads(STATE_FILE.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError):
        return {}
    return value if isinstance(value, dict) else {}


def backup_state_if_due() -> None:
    if not STATE_FILE.is_file():
        return
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    backups = sorted(BACKUP_DIR.glob("trainer-state-auto-*.json"), key=lambda path: path.stat().st_mtime, reverse=True)
    if backups and time.time() - backups[0].stat().st_mtime < BACKUP_INTERVAL_SECONDS:
        return
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    shutil.copy2(STATE_FILE, BACKUP_DIR / f"trainer-state-auto-{stamp}.json")
    backups = sorted(BACKUP_DIR.glob("trainer-state-auto-*.json"), key=lambda path: path.stat().st_mtime, reverse=True)
    for old in backups[BACKUP_LIMIT:]:
        old.unlink(missing_ok=True)


def write_state_atomic(value: dict[str, Any]) -> None:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    backup_state_if_due()
    encoded = json.dumps(value, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    descriptor, temporary_name = tempfile.mkstemp(prefix="trainer-state-", suffix=".tmp", dir=RUNTIME)
    temporary = Path(temporary_name)
    try:
        with os.fdopen(descriptor, "wb") as stream:
            stream.write(encoded)
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(temporary, STATE_FILE)
    finally:
        temporary.unlink(missing_ok=True)


def edge_available() -> bool:
    return (PYTHON_PACKAGES / "edge_tts" / "__init__.py").is_file() and (ROOT / "edge_tts_speak.py").is_file()


def server_voices() -> list[dict[str, Any]]:
    if not edge_available():
        return []
    return [
        {
            "name": name,
            "displayName": display,
            "lang": lang,
            "accentLabel": accent,
            "source": "Edge Neural",
            "aiGenerated": True,
        }
        for name, display, lang, accent in EDGE_VOICES
    ]


def create_edge_audio(text: str, voice: str, rate: float, style: str, intonation: float) -> bytes:
    allowed = {entry[0] for entry in EDGE_VOICES}
    if voice not in allowed or not edge_available():
        raise GenerationError("voice_unavailable", "The requested server voice is unavailable.", status=404)
    neural_voice = voice.removeprefix("Edge:")
    rate_percent = max(-35, min(20, round((rate - 1) * 100)))
    if style == "clear":
        rate_percent = max(-35, rate_percent - 8)
    pitch_hz = 0 if style == "original" else (round(4 * intonation) if text.rstrip().endswith("?") else -1)
    process_env = os.environ.copy()
    process_env["PYTHONPATH"] = str(PYTHON_PACKAGES)
    completed = subprocess.run(
        [
            sys.executable,
            str(ROOT / "edge_tts_speak.py"),
            "--voice",
            neural_voice,
            f"--rate={rate_percent:+d}%",
            f"--pitch={pitch_hz:+d}Hz",
        ],
        input=text.encode("utf-8"),
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        timeout=45,
        check=False,
        env=process_env,
        cwd=ROOT,
    )
    if completed.returncode or not completed.stdout:
        raise GenerationError("speech_failed", "Online neural speech failed; use a browser voice instead.", retryable=True, status=503)
    return completed.stdout


class IELTSRequestHandler(BaseHTTPRequestHandler):
    server_version = "IELTSLearningLab/0.1"

    def log_message(self, format_string: str, *args: Any) -> None:
        # Query strings can contain target words, so only the path and status are logged.
        status = str(args[1]) if len(args) > 1 else "-"
        print(f"[{self.log_date_time_string()}] {self.address_string()} {self.command} {urlsplit(self.path).path} {status}")

    def _send_bytes(self, status: int, body: bytes, content_type: str, *, cache: str = "no-store") -> None:
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", cache)
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")
        self.send_header("Cross-Origin-Resource-Policy", "same-origin")
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def _send_json(self, status: int, value: Any) -> None:
        self._send_bytes(status, json.dumps(value, ensure_ascii=False, separators=(",", ":")).encode("utf-8"), "application/json; charset=utf-8")

    def _send_error(self, status: int, code: str, message: str, *, fallback: str | None = None) -> None:
        payload: dict[str, Any] = {"error": {"code": code, "message": message}}
        if fallback:
            payload["fallback"] = fallback
        self._send_json(status, payload)

    def _read_body(self, limit: int) -> bytes | None:
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self._send_error(400, "invalid_content_length", "Content-Length must be an integer.")
            return None
        if length < 0 or length > limit:
            self._send_error(413, "request_too_large", f"Request body must not exceed {limit} bytes.")
            return None
        return self.rfile.read(length)

    def _read_json(self) -> dict[str, Any] | None:
        if not self.headers.get("Content-Type", "").lower().startswith("application/json"):
            self._send_error(415, "unsupported_media_type", "Use Content-Type: application/json.")
            return None
        raw = self._read_body(MAX_JSON_BODY)
        if raw is None:
            return None
        try:
            value = json.loads(raw.decode("utf-8"))
        except (UnicodeError, json.JSONDecodeError):
            self._send_error(400, "invalid_json", "Request body must be valid UTF-8 JSON.")
            return None
        if not isinstance(value, dict):
            self._send_error(400, "invalid_json_object", "Request body must be a JSON object.")
            return None
        return value

    def do_HEAD(self) -> None:  # noqa: N802
        self.do_GET()

    def do_GET(self) -> None:  # noqa: N802
        parsed = urlsplit(self.path)
        path = parsed.path
        query = parse_qs(parsed.query, keep_blank_values=True)
        if path == "/health":
            self._send_json(200, {"status": "ok", "version": "0.1.0", "onlineGeneration": bool(os.environ.get("OPENAI_API_KEY", "").strip())})
            return
        if path == "/deployment-config.js":
            self._send_bytes(200, deployment_config(), "text/javascript; charset=utf-8")
            return
        if path == "/load-state":
            self._send_json(200, read_state())
            return
        if path == "/bootstrap-state.js":
            encoded = json.dumps(read_state(), ensure_ascii=False).replace("</", "<\\/")
            self._send_bytes(200, f"window.__IELTS_SERVER_SNAPSHOT__ = {encoded};\n".encode("utf-8"), "text/javascript; charset=utf-8")
            return
        if path == "/voices":
            self._send_json(200, {"voices": server_voices()})
            return
        if path in ("/define", "/mnemonic"):
            word = query.get("word", [""])[0]
            self._handle_generation(word, legacy=True)
            return
        if path == "/tts":
            self._handle_tts(query)
            return
        self._serve_static(path)

    def do_POST(self) -> None:  # noqa: N802
        path = urlsplit(self.path).path
        if path == "/save-state":
            raw = self._read_body(MAX_STATE_BODY)
            if raw is None:
                return
            try:
                decoded = base64.b64decode(raw, validate=True)
                value = json.loads(decoded.decode("utf-8"))
            except (binascii.Error, UnicodeError, json.JSONDecodeError):
                self._send_error(400, "invalid_state", "State must be base64-encoded UTF-8 JSON.")
                return
            if not isinstance(value, dict):
                self._send_error(400, "invalid_state", "State must decode to a JSON object.")
                return
            write_state_atomic(value)
            self._send_json(200, {"saved": True, "savedAt": utc_now()})
            return
        if path == "/api/v1/generate-item":
            value = self._read_json()
            if value is None:
                return
            if set(value) - {"word"}:
                self._send_error(400, "unexpected_fields", "Only the word field is accepted.")
                return
            self._handle_generation(value.get("word"), legacy=False)
            return
        self._send_error(404, "not_found", "Endpoint not found.")

    def _handle_generation(self, word: Any, *, legacy: bool) -> None:
        if not isinstance(word, str):
            self._send_error(400, "invalid_word", "word must be a string.", fallback="local_dictionary")
            return
        try:
            result = generate_item(word, condition="guarded", client=OpenAIResponsesClient())
        except GenerationError as exc:
            self._send_error(exc.status, exc.code, str(exc), fallback="local_dictionary")
            return
        if not result.final_validation.usable or result.item is None:
            self._send_error(422, "validation_failed", "Generated content failed validation after one repair.", fallback="local_dictionary")
            return
        provenance = {
            "source": "openai_responses_api",
            "model": result.model,
            "validated": True,
            "repaired": bool(result.repair_count),
            "promptHash": result.prompt_hash,
        }
        if legacy:
            self._send_json(200, {**result.item, "zh": result.item["meaning_zh"], "en": result.item["meaning_en"], "provenance": provenance})
        else:
            self._send_json(200, {"item": result.item, "provenance": provenance})

    def _handle_tts(self, query: dict[str, list[str]]) -> None:
        text = query.get("text", [""])[0].strip()
        voice = query.get("voice", [""])[0]
        style = query.get("style", ["ielts"])[0]
        try:
            rate = float(query.get("rate", ["0.95"])[0])
            intonation = float(query.get("intonation", ["0.75"])[0])
        except ValueError:
            self._send_error(400, "invalid_speech_settings", "rate and intonation must be numbers.")
            return
        if not text or len(text) > MAX_TTS_TEXT:
            self._send_error(400, "invalid_speech_text", f"text must contain 1-{MAX_TTS_TEXT} characters.")
            return
        if style not in ("ielts", "clear", "original"):
            style = "ielts"
        try:
            audio = create_edge_audio(text, voice, max(0.6, min(1.15, rate)), style, max(0.25, min(1.0, intonation)))
        except GenerationError as exc:
            self._send_error(exc.status, exc.code, str(exc), fallback="browser_speech")
            return
        self._send_bytes(200, audio, "audio/mpeg", cache="private, max-age=300")

    def _serve_static(self, request_path: str) -> None:
        target = safe_static_path(request_path)
        if target is None:
            self._send_error(403, "unsafe_path", "Requested path is not allowed.")
            return
        if target.is_dir():
            target = target / "index.html"
        if not target.is_file():
            self._send_error(404, "not_found", "File not found.")
            return
        try:
            body = target.read_bytes()
        except OSError:
            self._send_error(500, "read_failed", "File could not be read.")
            return
        content_type = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        if content_type.startswith("text/") or content_type in ("application/javascript", "application/json"):
            content_type += "; charset=utf-8"
        cache = "no-cache" if target.suffix.lower() in (".html", ".js", ".css") else "public, max-age=3600"
        self._send_bytes(200, body, content_type, cache=cache)


class LocalServer(ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run IELTS Learning Lab locally.")
    parser.add_argument("--host", default="127.0.0.1", help="Bind address (default: 127.0.0.1).")
    parser.add_argument("--port", type=int, default=int(os.environ.get("IELTS_PORT", "8765")))
    parser.add_argument("--no-browser", action="store_true", help="Do not open the browser automatically.")
    parser.add_argument("--check", action="store_true", help="Validate local paths and exit.")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    prepare_runtime()
    args = parse_args(argv)
    if args.host not in ("127.0.0.1", "localhost", "::1"):
        print("Refusing a non-loopback host. Use a reverse proxy with authentication for remote access.", file=sys.stderr)
        return 2
    if not 1 <= args.port <= 65535:
        print("Port must be between 1 and 65535.", file=sys.stderr)
        return 2
    required = (ROOT / "index.html", ROOT / "app.js", ROOT / "styles.css")
    missing = [path.name for path in required if not path.is_file()]
    if missing:
        print("Missing required files: " + ", ".join(missing), file=sys.stderr)
        return 2
    if args.check:
        print(json.dumps({"ok": True, "root": str(ROOT), "runtime": str(RUNTIME), "onlineGeneration": bool(os.environ.get("OPENAI_API_KEY", "").strip())}, ensure_ascii=False))
        return 0

    host = "127.0.0.1" if args.host == "localhost" else args.host
    server = LocalServer((host, args.port), IELTSRequestHandler)
    url = f"http://127.0.0.1:{args.port}/index.html"
    print(f"IELTS Learning Lab is running at {url}")
    print("Press Ctrl+C to stop. Core practice does not require an API key.")
    if not args.no_browser:
        threading.Timer(0.4, lambda: webbrowser.open(url)).start()
    try:
        server.serve_forever(poll_interval=0.25)
    except KeyboardInterrupt:
        print("\nStopping server.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
