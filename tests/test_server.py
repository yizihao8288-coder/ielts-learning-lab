from __future__ import annotations

import http.client
import json
import os
import threading
import unittest
from urllib import error, request

import run


class ServerTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.previous_key = os.environ.pop("OPENAI_API_KEY", None)
        cls.server = run.LocalServer(("127.0.0.1", 0), run.IELTSRequestHandler)
        cls.port = cls.server.server_address[1]
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()

    @classmethod
    def tearDownClass(cls) -> None:
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join(timeout=3)
        if cls.previous_key is not None:
            os.environ["OPENAI_API_KEY"] = cls.previous_key

    def url(self, path: str) -> str:
        return f"http://127.0.0.1:{self.port}{path}"

    def post_json(self, path: str, value: object) -> tuple[int, dict]:
        body = json.dumps(value).encode("utf-8")
        api_request = request.Request(
            self.url(path),
            data=body,
            method="POST",
            headers={"Content-Type": "application/json"},
        )
        try:
            with request.urlopen(api_request, timeout=3) as response:
                return response.status, json.load(response)
        except error.HTTPError as exc:
            return exc.code, json.load(exc)

    def test_health_and_static_page(self) -> None:
        with request.urlopen(self.url("/health"), timeout=3) as response:
            health = json.load(response)
        with request.urlopen(self.url("/index.html"), timeout=3) as response:
            page = response.read()
        self.assertEqual(health["status"], "ok")
        self.assertIn(b"IELTS", page)

    def test_missing_key_has_explicit_local_fallback(self) -> None:
        status, value = self.post_json("/api/v1/generate-item", {"word": "research"})
        self.assertEqual(status, 503)
        self.assertEqual(value["error"]["code"], "missing_api_key")
        self.assertEqual(value["fallback"], "local_dictionary")

    def test_api_rejects_invalid_input_and_extra_fields(self) -> None:
        status, value = self.post_json("/api/v1/generate-item", {"word": 42})
        self.assertEqual(status, 400)
        self.assertEqual(value["error"]["code"], "invalid_word")
        status, value = self.post_json("/api/v1/generate-item", {"word": "research", "key": "secret"})
        self.assertEqual(status, 400)
        self.assertEqual(value["error"]["code"], "unexpected_fields")

    def test_request_size_limit(self) -> None:
        connection = http.client.HTTPConnection("127.0.0.1", self.port, timeout=3)
        connection.request(
            "POST",
            "/api/v1/generate-item",
            body=b"",
            headers={"Content-Type": "application/json", "Content-Length": str(run.MAX_JSON_BODY + 1)},
        )
        response = connection.getresponse()
        value = json.loads(response.read())
        connection.close()
        self.assertEqual(response.status, 413)
        self.assertEqual(value["error"]["code"], "request_too_large")

    def test_path_traversal_and_private_files_are_blocked(self) -> None:
        self.assertIsNone(run.safe_static_path("/../trainer-state.json"))
        self.assertIsNone(run.safe_static_path("/.git/config"))
        self.assertIsNone(run.safe_static_path("/trainer-state.json"))
        self.assertIsNone(run.safe_static_path("/填空收藏本99词.csv"))
        self.assertIsNone(run.safe_static_path("/data-backups/trainer-state-auto-test.json"))


if __name__ == "__main__":
    unittest.main()
