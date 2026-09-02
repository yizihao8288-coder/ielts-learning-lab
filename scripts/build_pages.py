#!/usr/bin/env python3
"""Assemble and verify the static GitHub Pages artifact."""

from __future__ import annotations

import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
import shutil


ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
DEMO_FILES = ("index.html", "app.js", "styles.css", "deployment-config.js")


class ReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for name, value in attrs:
            if name in ("src", "href") and value:
                self.references.append(value)


def verify_html(path: Path, root: Path, optional: set[str] | None = None) -> list[str]:
    parser = ReferenceParser()
    parser.feed(path.read_text(encoding="utf-8"))
    failures: list[str] = []
    for reference in parser.references:
        clean = reference.split("?", 1)[0].split("#", 1)[0]
        if not clean or re.match(r"^(?:https?:|mailto:|data:|#)", clean):
            continue
        if optional and clean in optional:
            continue
        target = (path.parent / clean).resolve()
        try:
            target.relative_to(root.resolve())
        except ValueError:
            failures.append(f"{path}: reference escapes site root: {reference}")
            continue
        if not target.exists():
            failures.append(f"{path}: missing reference: {reference}")
    return failures


def build(output: Path) -> None:
    if output.exists():
        shutil.rmtree(output)
    shutil.copytree(SITE, output)
    demo = output / "demo"
    demo.mkdir(parents=True)
    for name in DEMO_FILES:
        shutil.copy2(ROOT / name, demo / name)
    (demo / "file-recovery-state.js").write_text(
        "/* Empty in the public demo: private recovery snapshots are never deployed. */\n",
        encoding="utf-8",
    )
    (output / ".nojekyll").write_text("", encoding="utf-8")


def check(root: Path, source_mode: bool = False) -> None:
    failures: list[str] = []
    if source_mode:
        for required in (*DEMO_FILES, "run.py", "LICENSE", "CITATION.cff"):
            if not (ROOT / required).is_file():
                failures.append(f"missing repository file: {required}")
        failures.extend(verify_html(SITE / "index.html", SITE, {"./demo/"}))
        failures.extend(verify_html(SITE / "results" / "index.html", SITE, {"../demo/"}))
        failures.extend(verify_html(ROOT / "index.html", ROOT, {"file-recovery-state.js"}))
    else:
        for page in root.rglob("*.html"):
            failures.extend(verify_html(page, root))
    if failures:
        raise SystemExit("\n".join(failures))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    if args.output:
        output = args.output.resolve()
        build(output)
        check(output)
        print(f"Built {output}")
    elif args.check:
        check(SITE, source_mode=True)
        print("Static source references are valid.")
    else:
        parser.error("use --output PATH or --check")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
