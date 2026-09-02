"""Stream Microsoft Edge neural speech to stdout without writing audio to disk."""

from __future__ import annotations

import argparse
import asyncio
import sys

import edge_tts


async def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--voice", required=True)
    parser.add_argument("--rate", default="+0%")
    parser.add_argument("--pitch", default="+0Hz")
    args = parser.parse_args()
    text = sys.stdin.read().strip()
    if not text:
        raise SystemExit("No text supplied")

    speech = edge_tts.Communicate(
        text=text,
        voice=args.voice,
        rate=args.rate,
        pitch=args.pitch,
    )
    async for chunk in speech.stream():
        if chunk["type"] == "audio":
            sys.stdout.buffer.write(chunk["data"])
    sys.stdout.buffer.flush()


if __name__ == "__main__":
    asyncio.run(main())
