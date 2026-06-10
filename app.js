const fallbackWords = [
  "accommodation",
  "analysis",
  "approach",
  "assessment",
  "available",
  "community",
  "consequence",
  "consistent",
  "consumer",
  "context",
  "efficient",
  "environment",
  "evidence",
  "factor",
  "finance",
  "impact",
  "individual",
  "infrastructure",
  "interpretation",
  "maintenance",
  "method",
  "policy",
  "priority",
  "process",
  "requirement",
  "research",
  "resource",
  "significant",
  "strategy",
  "sustainable",
];

const sampleEntries = [
  "accommodation",
  "evidence",
  "significant",
  "maintenance",
  "sustainable",
  "infrastructure",
  "assessment",
  "priority",
];

const exampleTemplates = [
  "The lecturer used the term {word} while discussing study plans and daily life.",
  "The report mentioned {word} as an important part of the wider issue.",
  "During the interview, the speaker connected {word} with education and work.",
  "The tutor explained {word} in a lecture about modern society.",
  "Researchers described {word} as a key point in the recent study.",
  "The student heard {word} in a conversation about university services.",
  "The article uses {word} to describe a common problem in large cities.",
  "A clear example of {word} appeared in the listening passage.",
];

const wordInput = document.querySelector("#wordInput");
const optionCount = document.querySelector("#optionCount");
const rateControl = document.querySelector("#rateControl");
const voiceSelect = document.querySelector("#voiceSelect");
const strictMode = document.querySelector("#strictMode");
const startButton = document.querySelector("#startButton");
const sampleButton = document.querySelector("#sampleButton");
const scoreValue = document.querySelector("#scoreValue");
const progressBar = document.querySelector("#progressBar");
const listeningStage = document.querySelector("#listeningStage");
const roundState = document.querySelector("#roundState");
const choices = document.querySelector("#choices");
const listenButton = document.querySelector("#listenButton");
const nextButton = document.querySelector("#nextButton");
const reviewPanel = document.querySelector("#reviewPanel");
const voiceStatus = document.querySelector("#voiceStatus");
const quizTitle = document.querySelector("#quiz-title");

const state = {
  deck: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  heard: false,
  isSpeaking: false,
  speechRunId: 0,
  autoAdvanceTimer: null,
  results: [],
  voices: [],
  serverVoices: [],
  ttsMode: "browser",
  currentAudio: null,
};

function normaliseWord(value) {
  return value.trim().replace(/\s+/g, " ");
}

function normaliseKey(value) {
  return normaliseWord(value).toLocaleLowerCase("en-GB");
}

function parseEntries(rawText) {
  const rows = rawText
    .split(/\r?\n/)
    .flatMap((line) => (line.includes("|") ? [line] : line.split(/[，,；;]/)))
    .map((line) => line.trim())
    .filter(Boolean);

  const entries = [];
  const seen = new Set();

  rows.forEach((line, index) => {
    const parts = line.split("|");
    const word = normaliseWord(parts[0]);
    if (!word) return;

    const key = normaliseKey(word);
    if (seen.has(key)) return;
    seen.add(key);

    const customExample = parts.slice(1).join("|").trim();
    entries.push({
      word,
      example: customExample
        ? customExample.replaceAll("{word}", word)
        : buildExample(word, index),
    });
  });

  return entries;
}

function buildExample(word, index) {
  const template = exampleTemplates[index % exampleTemplates.length];
  return template.replaceAll("{word}", word);
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildChoices(answer) {
  const count = Number(optionCount.value);
  const pool = [...state.deck.map((entry) => entry.word), ...fallbackWords];
  const used = new Set([normaliseKey(answer)]);
  const distractors = [];

  shuffle(pool).forEach((candidate) => {
    const word = normaliseWord(candidate);
    const key = normaliseKey(word);
    if (!word || used.has(key) || distractors.length >= count - 1) return;
    used.add(key);
    distractors.push(word);
  });

  return shuffle([answer, ...distractors]);
}

function preferredVoiceScore(voice) {
  const name = `${voice.name} ${voice.lang}`.toLocaleLowerCase("en-GB");
  let score = 0;
  if (voice.lang.toLocaleLowerCase("en-GB").startsWith("en-gb")) score += 100;
  if (name.includes("natural")) score += 12;
  if (name.includes("google uk")) score += 10;
  if (name.includes("microsoft")) score += 8;
  if (name.includes("sonia") || name.includes("ryan") || name.includes("libby")) score += 5;
  return score;
}

function isBritishVoice(voice) {
  return voice.lang.toLocaleLowerCase("en-GB").startsWith("en-gb");
}

async function loadVoices() {
  const serverLoaded = await loadServerVoices();
  if (serverLoaded) return;

  if (!("speechSynthesis" in window)) {
    voiceSelect.innerHTML = '<option value="">当前浏览器不支持朗读</option>';
    voiceStatus.textContent = "不支持朗读";
    voiceStatus.className = "voice-pill warn";
    return;
  }

  state.voices = window.speechSynthesis.getVoices();
  const britishVoices = state.voices
    .filter(isBritishVoice)
    .sort((a, b) => preferredVoiceScore(b) - preferredVoiceScore(a));

  voiceSelect.innerHTML = "";

  if (!britishVoices.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "未识别 English (United Kingdom)";
    voiceSelect.append(option);
    voiceStatus.textContent = "未识别英式语音";
    voiceStatus.title = "当前浏览器没有提供 en-GB 语音";
    voiceStatus.className = "voice-pill warn";
    return;
  }

  britishVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.append(option);
  });

  const selected = getSelectedVoice();
  updateVoiceStatus(selected);
}

async function loadServerVoices() {
  try {
    const response = await fetch("/voices", { cache: "no-store" });
    if (!response.ok) return false;

    const data = await response.json();
    state.serverVoices = Array.isArray(data.voices) ? data.voices : [];
    const britishVoices = state.serverVoices
      .filter(isBritishVoice)
      .sort((a, b) => preferredVoiceScore(b) - preferredVoiceScore(a));

    if (!britishVoices.length) return false;

    state.ttsMode = "server";
    voiceSelect.innerHTML = "";
    britishVoices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = `server:${voice.name}`;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.append(option);
    });

    updateVoiceStatus(getSelectedVoice());
    return true;
  } catch {
    return false;
  }
}

function getSelectedVoice() {
  if (state.ttsMode === "server") {
    const selectedName = voiceSelect.value.replace(/^server:/, "");
    return (
      state.serverVoices.find((voice) => voice.name === selectedName && isBritishVoice(voice)) ||
      state.serverVoices
        .filter(isBritishVoice)
        .sort((a, b) => preferredVoiceScore(b) - preferredVoiceScore(a))[0] ||
      null
    );
  }

  if (!state.voices.length) return null;
  return (
    state.voices.find((voice) => voice.name === voiceSelect.value && isBritishVoice(voice)) ||
    state.voices
      .filter(isBritishVoice)
      .sort((a, b) => preferredVoiceScore(b) - preferredVoiceScore(a))[0] ||
    null
  );
}

function updateVoiceStatus(voice) {
  if (!voice) {
    voiceStatus.textContent = "未识别英式语音";
    voiceStatus.title = "当前浏览器没有提供 en-GB 语音";
    voiceStatus.className = "voice-pill warn";
    return;
  }

  voiceStatus.textContent = "英式语音";
  voiceStatus.title = `${voice.name} (${voice.lang})`;
  voiceStatus.className = "voice-pill ready";
}

function speak(text) {
  if (state.ttsMode === "server") {
    return speakWithServerVoice(text);
  }

  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) {
      resolve(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getSelectedVoice();
    if (!voice) {
      resolve(false);
      return;
    }

    utterance.lang = "en-GB";
    utterance.rate = Number(rateControl.value);
    utterance.pitch = 1;
    utterance.voice = voice;
    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);
    window.speechSynthesis.speak(utterance);
  });
}

function speakWithServerVoice(text) {
  return new Promise(async (resolve) => {
    const voice = getSelectedVoice();
    if (!voice) {
      resolve(false);
      return;
    }

    stopCurrentAudio();

    try {
      const params = new URLSearchParams({
        text,
        voice: voice.name,
        rate: rateControl.value,
        cache: String(Date.now()),
      });
      const response = await fetch(`/tts?${params.toString()}`);
      if (!response.ok) {
        resolve(false);
        return;
      }

      const audioUrl = URL.createObjectURL(await response.blob());
      const audio = new Audio(audioUrl);
      state.currentAudio = audio;

      audio.onended = () => {
        if (state.currentAudio === audio) state.currentAudio = null;
        URL.revokeObjectURL(audioUrl);
        resolve(true);
      };
      audio.onerror = () => {
        if (state.currentAudio === audio) state.currentAudio = null;
        URL.revokeObjectURL(audioUrl);
        resolve(false);
      };

      await audio.play();
    } catch {
      resolve(false);
    }
  });
}

function stopCurrentAudio() {
  if (!state.currentAudio) return;
  state.currentAudio.pause();
  state.currentAudio.src = "";
  state.currentAudio = null;
}

async function speakCurrentRound(forceReplay = false) {
  const current = state.deck[state.currentIndex];
  if (!current || state.isSpeaking) return;
  if (strictMode.checked && state.heard && !forceReplay) return;

  const runId = state.speechRunId + 1;
  state.speechRunId = runId;
  state.isSpeaking = true;
  state.heard = true;
  renderListeningState("正在朗读");
  setChoiceDisabled(false);
  listenButton.disabled = true;

  window.speechSynthesis?.cancel();
  await speak(current.word);
  if (state.speechRunId !== runId || state.answered) return;
  await wait(450);
  if (state.speechRunId !== runId || state.answered) return;
  await speak(current.example);
  if (state.speechRunId !== runId || state.answered) return;

  state.isSpeaking = false;
  renderListeningState("请选择你听到的单词");
  setChoiceDisabled(false);
  updateActionButtons();
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function startQuiz() {
  clearAutoAdvance();
  stopCurrentAudio();
  window.speechSynthesis?.cancel();
  await loadVoices();

  if (!getSelectedVoice()) {
    quizTitle.textContent = "无法开始";
    roundState.textContent = "未检测到英式语音";
    reviewPanel.innerHTML =
      "<strong>当前浏览器没有识别到 en-GB 英式语音。</strong> 我已禁止使用美式语音回退。请在 Windows 的“语音”设置里安装 English (United Kingdom) 的 Text-to-speech 语音，然后重启浏览器。";
    choices.innerHTML = "";
    listenButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  const entries = parseEntries(wordInput.value);

  if (!entries.length) {
    quizTitle.textContent = "还没有单词";
    roundState.textContent = "请先输入单词";
    reviewPanel.textContent = "";
    return;
  }

  state.deck = shuffle(entries);
  state.currentIndex = 0;
  state.score = 0;
  state.results = [];
  scoreValue.textContent = "0";
  renderRound();
  speakCurrentRound(true);
}

function renderRound() {
  clearAutoAdvance();
  const current = state.deck[state.currentIndex];
  state.answered = false;
  state.heard = false;

  quizTitle.textContent = `第 ${state.currentIndex + 1} / ${state.deck.length} 题`;
  roundState.textContent = "准备朗读";
  reviewPanel.textContent = "";
  nextButton.disabled = true;
  nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">→</span>下一题';

  choices.innerHTML = "";
  buildChoices(current.word).forEach((word, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.disabled = false;
    button.dataset.word = word;
    button.textContent = `${index + 1}. ${word}`;
    button.addEventListener("click", () => selectChoice(word));
    choices.append(button);
  });

  updateProgress();
  updateActionButtons();
}

function renderListeningState(message) {
  roundState.textContent = message;
  listeningStage.classList.toggle("playing", state.isSpeaking);
}

function setChoiceDisabled(disabled) {
  [...choices.querySelectorAll("button")].forEach((button) => {
    button.disabled = disabled || state.answered;
  });
}

function updateActionButtons() {
  const hasCurrent = Boolean(state.deck[state.currentIndex]);
  listenButton.disabled =
    !hasCurrent || state.isSpeaking || state.answered || (strictMode.checked && state.heard);
  nextButton.disabled = !state.answered;
}

function selectChoice(selectedWord) {
  if (state.answered) return;

  const current = state.deck[state.currentIndex];
  const isCorrect = normaliseKey(selectedWord) === normaliseKey(current.word);
  state.answered = true;
  state.speechRunId += 1;
  stopCurrentAudio();
  window.speechSynthesis?.cancel();
  state.isSpeaking = false;
  renderListeningState(isCorrect ? "正确，进入下一题" : "请选择下一步");

  if (isCorrect) {
    state.score += 1;
    scoreValue.textContent = String(state.score);
  }

  state.results.push({
    word: current.word,
    example: current.example,
    selected: selectedWord,
    correct: isCorrect,
  });

  [...choices.querySelectorAll("button")].forEach((button) => {
    const buttonWord = button.dataset.word;
    button.disabled = true;
    if (normaliseKey(buttonWord) === normaliseKey(current.word)) {
      button.classList.add("correct");
    } else if (normaliseKey(buttonWord) === normaliseKey(selectedWord)) {
      button.classList.add("incorrect");
    }
  });

  reviewPanel.innerHTML = isCorrect
    ? `<strong>正确。</strong> 例句：${escapeHtml(current.example)}`
    : `<strong>答案：${escapeHtml(current.word)}</strong> 你选择了 ${escapeHtml(
        selectedWord,
      )}。例句：${escapeHtml(current.example)}`;

  updateProgress();
  updateActionButtons();

  const isLastRound = state.currentIndex === state.deck.length - 1;
  if (isLastRound) {
    nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">✓</span>完成';
  }

  if (isCorrect) {
    scheduleAutoAdvance();
  }
}

function nextRound() {
  clearAutoAdvance();
  if (!state.answered) return;

  if (state.currentIndex >= state.deck.length - 1) {
    finishQuiz();
    return;
  }

  state.currentIndex += 1;
  renderRound();
  speakCurrentRound(true);
}

function scheduleAutoAdvance() {
  clearAutoAdvance();
  state.autoAdvanceTimer = window.setTimeout(() => {
    state.autoAdvanceTimer = null;
    nextRound();
  }, 300);
}

function clearAutoAdvance() {
  if (!state.autoAdvanceTimer) return;
  window.clearTimeout(state.autoAdvanceTimer);
  state.autoAdvanceTimer = null;
}

function finishQuiz() {
  window.speechSynthesis?.cancel();
  const total = state.deck.length;
  const missed = state.results.filter((result) => !result.correct);

  quizTitle.textContent = "训练完成";
  roundState.textContent = `${state.score} / ${total}`;
  choices.innerHTML = "";
  progressBar.style.width = "100%";
  listenButton.disabled = true;
  nextButton.disabled = true;
  nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">→</span>下一题';

  if (!missed.length) {
    reviewPanel.innerHTML = "<strong>全部正确。</strong>";
    return;
  }

  const missedList = missed
    .slice(0, 8)
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.word)}</strong>：${escapeHtml(item.example)}</li>`,
    )
    .join("");

  reviewPanel.innerHTML = `<strong>需要复习：</strong><ul>${missedList}</ul>`;
}

function updateProgress() {
  const total = state.deck.length || 1;
  const completed = state.currentIndex + (state.answered ? 1 : 0);
  progressBar.style.width = `${Math.min(100, (completed / total) * 100)}%`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function loadSampleWords() {
  wordInput.value = sampleEntries.join("\n");
  startQuiz();
}

voiceSelect.addEventListener("change", () => updateVoiceStatus(getSelectedVoice()));
startButton.addEventListener("click", startQuiz);
sampleButton.addEventListener("click", loadSampleWords);
listenButton.addEventListener("click", () => speakCurrentRound());
nextButton.addEventListener("click", nextRound);
strictMode.addEventListener("change", updateActionButtons);

document.addEventListener("keydown", (event) => {
  if (/^[1-9]$/.test(event.key)) {
    const button = choices.querySelectorAll("button")[Number(event.key) - 1];
    if (button && !button.disabled) button.click();
  }

  if (event.key === "Enter" && state.answered && !nextButton.disabled) {
    nextButton.click();
  }
});

loadVoices();
if ("speechSynthesis" in window) {
  if (typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  } else {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}
