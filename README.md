# IELTS Learning Lab

> I built the IELTS vocabulary desk I kept wishing existed. Then one stubborn product problem turned into a research question.

[Try it in your browser](https://yizihao8288-coder.github.io/ielts-learning-lab/demo/) · [See the research status](https://yizihao8288-coder.github.io/ielts-learning-lab/results/) · [中文说明](README.zh-CN.md)

![Listening practice interface](site/assets/app-listening.png)

## This started with my own IELTS mistakes

While preparing for IELTS, I found plenty of word lists but no single place that matched the way I actually reviewed: listen to a word, type it, read it in context, save it, and come back to the mistakes later. I wanted those actions to belong to one learning loop instead of several disconnected tools, so I built one.

The app now has listening, dictation, reading and writing modes, plus favourites, mistake review, import/export, browser storage and speech. It works without an account or an API key.

Later I experimented with generated definitions and examples. That exposed a more interesting failure: a model can return flawless JSON and still produce a poor learning item. The word may change, the Chinese meaning may contain no Chinese, or the example may never use the phrase it is supposed to teach.

That is why this repository has two connected halves:

- a practice tool I can genuinely use;
- a small experiment about making generated vocabulary entries structurally valid **and** useful enough to review.

## Open it before reading more

The [public demo](https://yizihao8288-coder.github.io/ielts-learning-lab/demo/) runs entirely in the browser. Nothing needs to be installed, and the static version never calls a model or the Python server.

To run the local version on Windows, install Python 3.10 or newer and double-click `启动雅思训练器.bat`. On macOS or Linux:

```bash
python3 run.py
```

The app opens at `http://127.0.0.1:8765`. Core use has no third-party package dependency. Runtime files stay inside `.runtime/` or other ignored local files.

## The research question hiding inside the product

Can strict JSON Schema, semantic checks and one targeted repair make an IELTS vocabulary item more usable than simply asking a model to “return JSON”?

I compare three versions of the same request:

| Version | What the model receives | What happens afterwards |
|---|---|---|
| `baseline` | a plain request for JSON | validate the answer |
| `schema` | a strict JSON Schema | validate the answer |
| `guarded` | the same strict schema | validate, then repair once if a named rule fails |

The structural check asks whether all four string fields are present. The content check asks more human questions: Is this still the word I requested? Is the Chinese meaning actually Chinese? Does the 8–35 word example contain the complete target? Are there placeholders, meta-talk or duplicated fields?

### Where it stands today

The validator, local/API path and 12 automated tests are working. The planned 100-word comparison and blind rating have **not** been run, so I am not putting a model-quality claim or a decorative results chart here. The [results page](https://yizihao8288-coder.github.io/ielts-learning-lab/results/) says exactly what evidence exists, and the full design is recorded in the [research protocol](docs/research-protocol.md).

The evaluation design was informed by [Wang et al. (2023)](https://aclanthology.org/2023.nlp4dh-1.7/), [JSONSchemaBench](https://arxiv.org/abs/2501.10868), and the [Structured Output Benchmark](https://arxiv.org/abs/2604.25359).

## One product, two ways to run it

```text
Public demo                         Optional local enhancement
Browser UI                          run.py (Python standard library)
├─ practice modes                   ├─ local save/load
├─ local dictionary                 ├─ POST /api/v1/generate-item
├─ browser storage                  └─ guarded generation pipeline
└─ browser speech                       ├─ strict schema
                                         ├─ semantic validation
                                         └─ one repair maximum
```

The public demo stays deliberately simple. The local server adds saving and optional online generation, but failure never stops the training flow: missing credentials, network errors, rate limits or a failed repair all fall back to the local dictionary.

A word is sent to a model only after the user chooses the online-generation action. The API key is read from the server environment and is never embedded in the page, saved in a snapshot or written to experiment records.

## Poking the API

```http
POST /api/v1/generate-item
Content-Type: application/json

{"word":"research"}
```

A successful response contains the learning `item` and its `provenance`. The older `GET /define?word=...` route is still available so the original interface keeps working.

Optional configuration:

```text
OPENAI_API_KEY=...       # keep this on the server
OPENAI_MODEL=...         # defaults to gpt-5.6-luna
IELTS_PORT=8765
```

The online path uses the Responses API with `reasoning.effort=none`, `store=false`, and strict `json_schema` output for the schema and guarded versions. See the [model documentation](https://developers.openai.com/api/docs/models/gpt-5.6-luna) and [Responses API reference](https://developers.openai.com/api/reference/resources/responses/methods/create).

## Reproducing the work

Run the checks:

```bash
python -m unittest discover -s tests -v
python -m py_compile run.py research/pipeline.py
node --check app.js
```

Run a deliberately small API smoke experiment (3 words × 3 versions × 1 repeat):

```bash
python -m research.run_experiment
```

The full planned call is opt-in: `python -m research.run_experiment --limit 100 --repeats 3`. Frozen JSONL results can be recalculated with `python -m research.evaluate PATH_TO_JSONL`.

## Boundaries I care about

- Personal answer history, timings, keys, caches and browser state do not belong in the public repository.
- The original 99-word source is used without personal response fields; the old CSV remains local and untracked.
- Browser speech varies by browser, and OCR may download model data only when the user invokes it.
- Passing an automated check is not the same as having a correct definition or a natural example. Human review is still necessary.
- This is currently a working product and an unfinished experiment—not evidence of learning improvement or an expert-reviewed system.

## Citation and licence

Citation metadata is in [`CITATION.cff`](CITATION.cff). Released under the [MIT License](LICENSE).
