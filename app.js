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

const confusableWords = [
  "adaptation",
  "addition",
  "administration",
  "admission",
  "advertising",
  "allocation",
  "alternative",
  "application",
  "appointment",
  "arrangement",
  "assignment",
  "association",
  "assumption",
  "attention",
  "authority",
  "availability",
  "capacity",
  "category",
  "certificate",
  "circumstance",
  "communication",
  "comparison",
  "competition",
  "concentration",
  "conference",
  "confidence",
  "conservation",
  "construction",
  "contribution",
  "convention",
  "cooperation",
  "corporation",
  "correction",
  "curriculum",
  "definition",
  "demonstration",
  "department",
  "departure",
  "destination",
  "development",
  "difference",
  "difficulty",
  "direction",
  "discussion",
  "distribution",
  "education",
  "efficiency",
  "electricity",
  "emergency",
  "employment",
  "equipment",
  "evaluation",
  "exhibition",
  "expedition",
  "explanation",
  "foundation",
  "government",
  "improvement",
  "independence",
  "information",
  "investigation",
  "management",
  "measurement",
  "membership",
  "opportunity",
  "organisation",
  "orientation",
  "permission",
  "presentation",
  "pronunciation",
  "publication",
  "recommendation",
  "recreation",
  "registration",
  "regulation",
  "relationship",
  "reservation",
  "responsibility",
  "selection",
  "subscription",
  "temperature",
  "transportation",
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
  "The lecturer mentioned {word} while explaining the plan for the new semester.",
  "In the recording, the speaker said that {word} was important for the whole project.",
  "The student used {word} when describing a problem with university services.",
  "During the interview, the expert connected {word} with education and work.",
  "The report described {word} as a key issue in modern society.",
  "A clear example of {word} appeared in the listening passage.",
  "The tutor asked the class to think carefully about {word} before the next seminar.",
  "Researchers found that {word} influenced the results of the recent study.",
];

const wordNotes = {
  accommodation: {
    en: "A place where someone lives or stays, especially temporarily.",
    zh: "住处；住宿；临时居所",
  },
  analysis: {
    en: "A careful study of something in order to understand its parts, causes, or effects.",
    zh: "分析；解析",
  },
  approach: {
    en: "A way of dealing with a problem, task, or situation.",
    zh: "方法；方式；处理途径",
  },
  assessment: {
    en: "A judgement or evaluation of someone or something.",
    zh: "评估；评价；考核",
  },
  available: {
    en: "Able to be used, obtained, or reached.",
    zh: "可获得的；可使用的；有空的",
  },
  community: {
    en: "A group of people who live in the same area or share something in common.",
    zh: "社区；群体；共同体",
  },
  consequence: {
    en: "A result or effect of an action or situation.",
    zh: "结果；后果；影响",
  },
  consistent: {
    en: "Not changing in behaviour, quality, or standard over time.",
    zh: "一致的；始终如一的；稳定的",
  },
  consumer: {
    en: "A person who buys or uses goods or services.",
    zh: "消费者；用户",
  },
  context: {
    en: "The situation or background that helps explain the meaning of something.",
    zh: "背景；语境；上下文",
  },
  efficient: {
    en: "Working well without wasting time, money, or energy.",
    zh: "高效的；效率高的",
  },
  environment: {
    en: "The natural world or the conditions in which people, animals, or plants live.",
    zh: "环境；自然环境；生活条件",
  },
  evidence: {
    en: "Facts, signs, or information that help prove whether something is true.",
    zh: "证据；根据",
  },
  factor: {
    en: "One of the things that influences a situation, result, or decision.",
    zh: "因素；要素",
  },
  finance: {
    en: "The management of money, especially by organisations or governments.",
    zh: "金融；资金；财务",
  },
  impact: {
    en: "A strong effect or influence on someone or something.",
    zh: "影响；冲击；作用",
  },
  individual: {
    en: "A single person, considered separately from a group.",
    zh: "个人；个体；单独的",
  },
  infrastructure: {
    en: "The basic systems and services that a city, country, or organisation needs.",
    zh: "基础设施",
  },
  interpretation: {
    en: "An explanation of the meaning of something.",
    zh: "解释；理解；诠释",
  },
  maintenance: {
    en: "The work needed to keep something in good condition.",
    zh: "维护；保养；维修",
  },
  method: {
    en: "A planned way of doing something.",
    zh: "方法；办法",
  },
  policy: {
    en: "A plan or set of rules used by an organisation or government.",
    zh: "政策；方针；原则",
  },
  priority: {
    en: "Something that is more important than other things and should be dealt with first.",
    zh: "优先事项；重点",
  },
  process: {
    en: "A series of actions or changes that happen to achieve a result.",
    zh: "过程；流程；步骤",
  },
  requirement: {
    en: "Something that is needed or officially demanded.",
    zh: "要求；必要条件",
  },
  research: {
    en: "Detailed study of a subject in order to discover new information.",
    zh: "研究；调查",
  },
  resource: {
    en: "Something such as money, materials, time, or people that can be used.",
    zh: "资源；资料；财力",
  },
  significant: {
    en: "Important or large enough to be noticed.",
    zh: "重要的；显著的；有意义的",
  },
  strategy: {
    en: "A plan designed to achieve a long-term aim.",
    zh: "策略；战略；规划",
  },
  sustainable: {
    en: "Able to continue over time without damaging the environment or using too many resources.",
    zh: "可持续的；不破坏环境的",
  },
};

const BOOK_STORAGE_KEY = "ieltsTrainerFavoriteBookV1";
const bookModes = ["listening", "dictation", "reading"];
const modeRadios = [...document.querySelectorAll('input[name="quizMode"]')];
const wordInput = document.querySelector("#wordInput");
const optionCount = document.querySelector("#optionCount");
const rateControl = document.querySelector("#rateControl");
const voiceSelect = document.querySelector("#voiceSelect");
const autoSpeak = document.querySelector("#autoSpeak");
const startButton = document.querySelector("#startButton");
const sampleButton = document.querySelector("#sampleButton");
const scoreValue = document.querySelector("#scoreValue");
const progressBar = document.querySelector("#progressBar");
const listeningStage = document.querySelector("#listeningStage");
const roundState = document.querySelector("#roundState");
const blankSentence = document.querySelector("#blankSentence");
const choices = document.querySelector("#choices");
const answerForm = document.querySelector("#answerForm");
const answerInput = document.querySelector("#answerInput");
const checkButton = document.querySelector("#checkButton");
const listenButton = document.querySelector("#listenButton");
const nextButton = document.querySelector("#nextButton");
const reviewPanel = document.querySelector("#reviewPanel");
const voiceStatus = document.querySelector("#voiceStatus");
const quizTitle = document.querySelector("#quiz-title");
const bookTabs = [...document.querySelectorAll("[data-book-tab]")];
const bookCounts = [...document.querySelectorAll("[data-book-count]")];
const bookList = document.querySelector("#bookList");

const state = {
  mode: "listening",
  bookMode: "listening",
  favoriteBook: loadFavoriteBook(),
  deck: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  heard: false,
  isSpeaking: false,
  speechRunId: 0,
  results: [],
  voices: [],
  serverVoices: [],
  currentAudio: null,
};

function getSelectedMode() {
  return modeRadios.find((radio) => radio.checked)?.value || "listening";
}

function getModeLabel(mode = state.mode) {
  if (mode === "dictation") return "填空模式";
  if (mode === "reading") return "阅读模式";
  return "听力模式";
}

function createEmptyBook() {
  return {
    listening: {},
    dictation: {},
    reading: {},
  };
}

function loadFavoriteBook() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(BOOK_STORAGE_KEY) || "{}");
    return bookModes.reduce((book, mode) => {
      book[mode] = saved && typeof saved[mode] === "object" && saved[mode] ? saved[mode] : {};
      return book;
    }, createEmptyBook());
  } catch {
    return createEmptyBook();
  }
}

function saveFavoriteBook() {
  try {
    window.localStorage.setItem(BOOK_STORAGE_KEY, JSON.stringify(state.favoriteBook));
  } catch {
    return false;
  }
  return true;
}

function updateFavoriteBook(entry, mode, isCorrect, response) {
  if (!bookModes.includes(mode)) return;

  const key = normaliseKey(entry.word);
  if (!key) return;

  if (isCorrect) {
    if (state.favoriteBook[mode][key]) {
      delete state.favoriteBook[mode][key];
      saveFavoriteBook();
      renderFavoriteBook();
    }
    return;
  }

  const note = getWordNote(entry);
  state.favoriteBook[mode][key] = {
    word: entry.word,
    example: entry.example,
    meaningZh: note.zh,
    meaningEn: note.en,
    response,
    missedAt: Date.now(),
  };
  saveFavoriteBook();
  renderFavoriteBook();
}

function removeFavoriteBookItem(mode, key) {
  if (!bookModes.includes(mode) || !state.favoriteBook[mode]?.[key]) return;
  delete state.favoriteBook[mode][key];
  saveFavoriteBook();
  renderFavoriteBook();
}

function renderFavoriteBook() {
  bookTabs.forEach((button) => {
    const active = button.dataset.bookTab === state.bookMode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  bookCounts.forEach((badge) => {
    const mode = badge.dataset.bookCount;
    badge.textContent = String(Object.keys(state.favoriteBook[mode] || {}).length);
  });

  const entries = Object.values(state.favoriteBook[state.bookMode] || {}).sort(
    (a, b) => (b.missedAt || 0) - (a.missedAt || 0),
  );

  if (!entries.length) {
    bookList.innerHTML = `<p class="book-empty">${getModeLabel(state.bookMode)}暂无错词。</p>`;
    return;
  }

  bookList.innerHTML = entries
    .map(
      (item) => `
        <article class="book-item">
          <div class="book-item-top">
            <strong>${escapeHtml(item.word)}</strong>
            <div class="book-item-actions">
              <span>${formatBookDate(item.missedAt)}</span>
              <button type="button" data-remove-book="${escapeHtml(normaliseKey(item.word))}">移除</button>
            </div>
          </div>
          <p>上次答案：${escapeHtml(item.response || "未记录")}</p>
          <small>释义：${escapeHtml(item.meaningZh || "暂无释义")}</small>
          <small>${renderRevealedSentence(item.example || "", item.word)}</small>
        </article>
      `,
    )
    .join("");
}

function formatBookDate(value) {
  if (!value) return "最近错题";
  return new Date(value).toLocaleDateString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  });
}

function normaliseWord(value) {
  return value.trim().replace(/\s+/g, " ");
}

function normaliseKey(value) {
  return normaliseWord(value)
    .replace(/[.,!?;:]+$/g, "")
    .replace(/[’`]/g, "'")
    .toLocaleLowerCase("en-GB");
}

function parseEntries(rawText) {
  const rows = rawText
    .split(/\r?\n/)
    .flatMap((line) => {
      const trimmed = line.trim();
      if (!trimmed) return [];
      if (trimmed.includes("|")) return [trimmed];
      return trimmed.split(/[,\uFF0C;\uFF1B]/);
    })
    .map((line) => line.trim())
    .filter(Boolean);

  const entries = [];
  const seen = new Set();

  rows.forEach((line, index) => {
    const parts = line.split("|");
    const word = normaliseWord(parts[0] || "");
    if (!word) return;

    const key = normaliseKey(word);
    if (seen.has(key)) return;
    seen.add(key);

    const customExample = normaliseWord(parts[1] || "");
    const meaningZh = normaliseWord(parts[2] || "");
    const meaningEn = normaliseWord(parts[3] || "");

    entries.push({
      word,
      example: customExample
        ? ensureExampleContainsWord(customExample.replaceAll("{word}", word), word, index)
        : buildExample(word, index),
      meaningZh,
      meaningEn,
    });
  });

  return entries;
}

function buildExample(word, index) {
  const template = exampleTemplates[index % exampleTemplates.length];
  return template.replaceAll("{word}", word);
}

function ensureExampleContainsWord(example, word, index) {
  const cleaned = normaliseWord(example);
  if (!cleaned) return buildExample(word, index);
  return containsTargetWord(cleaned, word) ? cleaned : buildExample(word, index);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function targetWordRegex(word, flags = "i") {
  const escaped = escapeRegExp(word).replace(/\s+/g, "\\s+");
  const prefix = /^[A-Za-z0-9]/.test(word) ? "\\b" : "";
  const suffix = /[A-Za-z0-9]$/.test(word) ? "\\b" : "";
  return new RegExp(`${prefix}${escaped}${suffix}`, flags);
}

function containsTargetWord(example, word) {
  return targetWordRegex(word).test(example);
}

function renderBlankSentence(example, word) {
  const regex = targetWordRegex(word);
  const match = regex.exec(example);
  const blank = `<span class="blank-slot" aria-label="missing word">${makeBlank(word)}</span>`;

  if (!match) return blank;

  return `${escapeHtml(example.slice(0, match.index))}${blank}${escapeHtml(
    example.slice(match.index + match[0].length),
  )}`;
}

function renderRevealedSentence(example, word) {
  const regex = targetWordRegex(word);
  const match = regex.exec(example);

  if (!match) return escapeHtml(example);

  return `${escapeHtml(example.slice(0, match.index))}<mark>${escapeHtml(
    match[0],
  )}</mark>${escapeHtml(example.slice(match.index + match[0].length))}`;
}

function makeBlank(word) {
  const length = Math.max(6, Math.min(16, normaliseWord(word).length + 2));
  return "_".repeat(length);
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
  const pool = [...state.deck.map((entry) => entry.word), ...fallbackWords, ...confusableWords];
  const used = new Set([normaliseKey(answer)]);
  const candidates = [];

  shuffle(pool).forEach((candidate) => {
    const word = normaliseWord(candidate);
    const key = normaliseKey(word);
    if (!word || used.has(key)) return;
    used.add(key);
    candidates.push(word);
  });

  const distractors = pickSimilarDistractors(answer, candidates, count - 1);
  return shuffle([answer, ...distractors]);
}

function buildMeaningChoices(entry) {
  const count = Number(optionCount.value);
  const correctMeaning = getWordNote(entry).zh;
  const used = new Set([normaliseKey(correctMeaning)]);
  const candidates = [];
  const noteEntries = [
    ...state.deck,
    ...Object.entries(wordNotes).map(([word, note]) => ({ word, meaningZh: note.zh, meaningEn: note.en })),
  ];

  noteEntries.forEach((item) => {
    const meaning = normaliseWord(getWordNote(item).zh || "");
    const key = normaliseKey(meaning);
    if (!meaning || used.has(key)) return;
    used.add(key);
    candidates.push(meaning);
  });

  return shuffle([correctMeaning, ...shuffle(candidates).slice(0, count - 1)]);
}

function pickSimilarDistractors(answer, candidates, needed) {
  const scored = candidates
    .map((word) => ({ word, score: choiceSimilarityScore(answer, word) }))
    .sort((a, b) => b.score - a.score);
  const closePoolSize = Math.max(needed * 4, 10);
  const closePool = scored.slice(0, closePoolSize).map((item) => item.word);
  const selected = shuffle(closePool).slice(0, needed);

  if (selected.length >= needed) return selected;

  scored.forEach((item) => {
    if (selected.length >= needed) return;
    if (!selected.some((word) => normaliseKey(word) === normaliseKey(item.word))) {
      selected.push(item.word);
    }
  });

  return selected;
}

function choiceSimilarityScore(answer, candidate) {
  const a = normaliseKey(answer).replace(/[^a-z]/g, "");
  const b = normaliseKey(candidate).replace(/[^a-z]/g, "");
  if (!a || !b) return 0;

  const maxLength = Math.max(a.length, b.length);
  const distanceScore = (1 - levenshteinDistance(a, b) / maxLength) * 44;
  const lengthScore = (1 - Math.min(Math.abs(a.length - b.length), maxLength) / maxLength) * 14;
  const prefixScore = (commonPrefixLength(a, b) / maxLength) * 16;
  const suffixScore = (commonSuffixLength(a, b) / maxLength) * 10;
  const vowelScore = patternSimilarity(vowelSignature(a), vowelSignature(b)) * 10;
  const consonantScore = patternSimilarity(consonantSkeleton(a), consonantSkeleton(b)) * 10;
  const firstLastScore = (a[0] === b[0] ? 5 : 0) + (a.at(-1) === b.at(-1) ? 3 : 0);
  const syllableScore = Math.max(0, 4 - Math.abs(roughSyllableCount(a) - roughSyllableCount(b)));

  return (
    distanceScore +
    lengthScore +
    prefixScore +
    suffixScore +
    vowelScore +
    consonantScore +
    firstLastScore +
    syllableScore
  );
}

function levenshteinDistance(a, b) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  const current = Array.from({ length: b.length + 1 }, () => 0);

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost);
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[b.length];
}

function commonPrefixLength(a, b) {
  let count = 0;
  while (count < a.length && count < b.length && a[count] === b[count]) count += 1;
  return count;
}

function commonSuffixLength(a, b) {
  let count = 0;
  while (count < a.length && count < b.length && a[a.length - count - 1] === b[b.length - count - 1]) {
    count += 1;
  }
  return count;
}

function vowelSignature(word) {
  return word.replace(/[^aeiouy]/g, "").replace(/([aeiouy])\1+/g, "$1");
}

function consonantSkeleton(word) {
  return word.replace(/[aeiouy]/g, "").replace(/(.)\1+/g, "$1");
}

function patternSimilarity(a, b) {
  if (!a || !b) return 0;
  return 1 - levenshteinDistance(a, b) / Math.max(a.length, b.length);
}

function roughSyllableCount(word) {
  return Math.max(1, (word.match(/[aeiouy]+/g) || []).length);
}

function getWordNote(entry) {
  const builtIn = wordNotes[normaliseKey(entry.word)];
  if (entry.meaningZh || entry.meaningEn) {
    return {
      en: entry.meaningEn || builtIn?.en || "Custom meaning supplied with this word.",
      zh: entry.meaningZh || builtIn?.zh || "已使用你输入的自定义释义",
      missing: false,
    };
  }

  return (
    builtIn || {
      en: "No built-in definition is available for this word yet.",
      zh: "暂无内置释义，可用 word|例句|中文释义 补充",
      missing: true,
    }
  );
}

function hasMeaning(entry) {
  const note = getWordNote(entry);
  return Boolean(note && !note.missing && normaliseWord(note.zh));
}

function preferredVoiceScore(voice) {
  const name = `${voice.name} ${voice.lang} ${voice.source || ""}`.toLocaleLowerCase("en-GB");
  let score = 0;
  if (voice.lang.toLocaleLowerCase("en-GB").startsWith("en-gb")) score += 100;
  if (name.includes("natural")) score += 42;
  if (name.includes("neural")) score += 34;
  if (name.includes("online")) score += 22;
  if (name.includes("google uk")) score += 18;
  if (name.includes("google")) score += 12;
  if (name.includes("microsoft")) score += 10;
  if (name.includes("browser")) score += 8;
  if (name.includes("sonia") || name.includes("ryan") || name.includes("libby")) score += 5;
  if (name.includes("hazel") || name.includes("zira")) score -= 6;
  return score;
}

function isBritishVoice(voice) {
  return voice.lang.toLocaleLowerCase("en-GB").startsWith("en-gb");
}

async function loadVoices() {
  state.voices = "speechSynthesis" in window ? window.speechSynthesis.getVoices() : [];
  await loadServerVoices();

  const browserVoices = state.voices.filter(isBritishVoice).map((voice) => ({
    name: voice.name,
    lang: voice.lang,
    source: "browser",
    nativeVoice: voice,
    value: `browser:${voice.name}`,
  }));
  const serverVoices = state.serverVoices.filter(isBritishVoice).map((voice) => ({
    ...voice,
    source: "server",
    value: `server:${voice.name}`,
  }));
  const britishVoices = [...browserVoices, ...serverVoices].sort(
    (a, b) => preferredVoiceScore(b) - preferredVoiceScore(a),
  );

  voiceSelect.innerHTML = "";

  if (!britishVoices.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "未识别 English (United Kingdom)";
    voiceSelect.append(option);
    voiceStatus.textContent = "未识别英式语音";
    voiceStatus.title = "当前浏览器或 Windows 没有提供 en-GB 语音";
    voiceStatus.className = "voice-pill warn";
    return;
  }

  britishVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.value;
    option.textContent = `${voice.name} (${voice.lang}, ${voiceSourceLabel(voice)})`;
    voiceSelect.append(option);
  });

  updateVoiceStatus(getSelectedVoice());
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

    return Boolean(britishVoices.length);
  } catch {
    return false;
  }
}

function getSelectedVoice() {
  if (!voiceSelect.value) return null;

  if (voiceSelect.value.startsWith("server:")) {
    const selectedName = voiceSelect.value.replace(/^server:/, "");
    const voice = state.serverVoices.find((item) => item.name === selectedName && isBritishVoice(item));
    return voice ? { ...voice, source: "server", value: voiceSelect.value } : null;
  }

  const selectedName = voiceSelect.value.replace(/^browser:/, "");
  const voice = state.voices.find((item) => item.name === selectedName && isBritishVoice(item));
  return voice
    ? {
        name: voice.name,
        lang: voice.lang,
        source: "browser",
        value: voiceSelect.value,
        nativeVoice: voice,
      }
    : null;
}

function voiceSourceLabel(voice) {
  return voice.source === "server" ? "Windows" : "浏览器";
}

function updateVoiceStatus(voice) {
  if (!voice) {
    voiceStatus.textContent = "未识别英式语音";
    voiceStatus.title = "当前浏览器没有提供 en-GB 语音";
    voiceStatus.className = "voice-pill warn";
    return;
  }

  const natural = /natural|neural|online|google/i.test(voice.name);
  voiceStatus.textContent = natural ? "自然英式语音" : "英式语音";
  voiceStatus.title = `${voice.name} (${voice.lang}, ${voiceSourceLabel(voice)})`;
  voiceStatus.className = "voice-pill ready";
}

function speak(text) {
  const voice = getSelectedVoice();
  if (!voice) return Promise.resolve(false);

  if (voice.source === "server") {
    return speakWithServerVoice(text, voice);
  }

  return speakWithBrowserVoice(text, voice);
}

function speakWithBrowserVoice(text, selectedVoice) {
  return new Promise((resolve) => {
    if (!("speechSynthesis" in window)) {
      resolve(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    utterance.rate = Number(rateControl.value);
    utterance.pitch = 0.98;
    utterance.volume = 1;
    utterance.voice = selectedVoice.nativeVoice;
    utterance.onend = () => resolve(true);
    utterance.onerror = () => resolve(false);
    window.speechSynthesis.speak(utterance);
  });
}

function speakWithServerVoice(text, selectedVoice) {
  return new Promise(async (resolve) => {
    if (!selectedVoice) {
      resolve(false);
      return;
    }

    stopCurrentAudio();

    try {
      const params = new URLSearchParams({
        text,
        voice: selectedVoice.name,
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

function stopRoundSpeech() {
  state.speechRunId += 1;
  state.isSpeaking = false;
  stopCurrentAudio();
  window.speechSynthesis?.cancel();
}

async function speakCurrentRound(forceReplay = false) {
  const current = state.deck[state.currentIndex];
  if (!current || state.isSpeaking) return;
  if (state.heard && !forceReplay) return;

  const runId = state.speechRunId + 1;
  state.speechRunId = runId;
  state.isSpeaking = true;
  state.heard = true;
  renderListeningState("正在朗读");
  listenButton.disabled = true;

  stopCurrentAudio();
  window.speechSynthesis?.cancel();

  const spoken = await speakRoundText(current, runId);
  if (state.speechRunId !== runId || state.answered) return;

  state.isSpeaking = false;
  renderListeningState(
    spoken
      ? state.mode === "dictation"
        ? "请写出空格中的单词"
        : state.mode === "reading"
          ? "请选择这个单词的释义"
          : "请选择你听到的单词"
      : "朗读失败，请检查语音设置",
  );
  updateActionButtons();
  if (state.mode === "dictation") answerInput.focus();
}

async function speakRoundText(current, runId) {
  if (state.mode === "reading") {
    return speak(current.word);
  }

  if (state.mode === "listening") {
    const wordSpoken = await speak(current.word);
    if (state.speechRunId !== runId || state.answered) return wordSpoken;
    await wait(420);
    if (state.speechRunId !== runId || state.answered) return wordSpoken;
    const exampleSpoken = await speak(current.example);
    return wordSpoken && exampleSpoken;
  }

  return speak(current.example);
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function startQuiz() {
  clearRound();
  await loadVoices();

  state.mode = getSelectedMode();

  if (!getSelectedVoice()) {
    quizTitle.textContent = "无法开始";
    roundState.textContent = "未检测到英式语音";
    blankSentence.textContent = "";
    choices.hidden = true;
    choices.innerHTML = "";
    answerForm.hidden = true;
    reviewPanel.innerHTML =
      "<strong>当前浏览器没有识别到 en-GB 英式语音。</strong> 请在 Windows 的“语音”设置里安装 English (United Kingdom) 的 Text-to-speech 语音，然后重启浏览器。";
    setAnswerDisabled(true);
    listenButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  const entries = parseEntries(wordInput.value);

  if (!entries.length) {
    quizTitle.textContent = "还没有单词";
    roundState.textContent = "请先输入单词";
    blankSentence.textContent = "";
    choices.hidden = true;
    choices.innerHTML = "";
    answerForm.hidden = true;
    reviewPanel.textContent = "";
    setAnswerDisabled(true);
    listenButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  const missingMeaning = state.mode === "reading" ? entries.find((entry) => !hasMeaning(entry)) : null;
  if (missingMeaning) {
    quizTitle.textContent = "缺少释义";
    roundState.textContent = "阅读模式需要中文释义";
    blankSentence.textContent = "";
    choices.hidden = true;
    choices.innerHTML = "";
    answerForm.hidden = true;
    reviewPanel.innerHTML = `<strong>${escapeHtml(
      missingMeaning.word,
    )}</strong> 暂时没有内置释义。请用 <code>word|example|中文释义</code> 的格式补充后再开始阅读模式。`;
    setAnswerDisabled(true);
    listenButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  state.deck = shuffle(entries);
  state.currentIndex = 0;
  state.score = 0;
  state.results = [];
  scoreValue.textContent = "0";
  renderRound();
  if (autoSpeak.checked) {
    speakCurrentRound(true);
  } else {
    renderListeningState("点击朗读开始本题");
  }
}

function clearRound() {
  stopRoundSpeech();
}

function renderRound() {
  const current = state.deck[state.currentIndex];
  state.answered = false;
  state.heard = false;

  quizTitle.textContent = `${getModeLabel()} 第 ${state.currentIndex + 1} / ${state.deck.length} 题`;
  roundState.textContent = "准备朗读";
  reviewPanel.textContent = "";
  nextButton.disabled = true;
  nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">→</span>下一题';

  renderModeSurface(current);
  updateProgress();
  updateActionButtons();
}

function renderModeSurface(current) {
  if (state.mode === "dictation") {
    choices.hidden = true;
    choices.innerHTML = "";
    answerForm.hidden = false;
    blankSentence.innerHTML = renderBlankSentence(current.example, current.word);
    answerInput.value = "";
    answerInput.classList.remove("correct", "incorrect");
    setAnswerDisabled(false);
    window.setTimeout(() => answerInput.focus(), 0);
    return;
  }

  answerForm.hidden = true;
  setAnswerDisabled(true);
  choices.hidden = false;
  if (state.mode === "reading") {
    blankSentence.innerHTML = renderRevealedSentence(current.example, current.word);
    renderMeaningChoices(current);
    return;
  }

  blankSentence.textContent = "听完后选择你听到的单词";
  renderWordChoices(current.word);
}

function renderWordChoices(answer) {
  choices.innerHTML = "";
  buildChoices(answer).forEach((word, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.disabled = false;
    button.dataset.word = word;
    button.textContent = `${index + 1}. ${word}`;
    button.addEventListener("click", () => selectWordChoice(word));
    choices.append(button);
  });
}

function renderMeaningChoices(current) {
  choices.innerHTML = "";
  const correctMeaning = getWordNote(current).zh;
  buildMeaningChoices(current).forEach((meaning, index) => {
    const button = document.createElement("button");
    button.className = "choice-button meaning-choice";
    button.type = "button";
    button.disabled = false;
    button.dataset.meaning = meaning;
    button.textContent = `${index + 1}. ${meaning}`;
    button.addEventListener("click", () => selectMeaningChoice(meaning, correctMeaning));
    choices.append(button);
  });
}

function renderListeningState(message) {
  roundState.textContent = message;
  listeningStage.classList.toggle("playing", state.isSpeaking);
}

function setAnswerDisabled(disabled) {
  answerInput.disabled = disabled;
  checkButton.disabled = disabled || !normaliseWord(answerInput.value);
}

function updateActionButtons() {
  const hasCurrent = Boolean(state.deck[state.currentIndex]);
  const hasAnswer = Boolean(normaliseWord(answerInput.value));
  listenButton.disabled = !hasCurrent || state.isSpeaking || state.answered;
  checkButton.disabled =
    state.mode !== "dictation" || !hasCurrent || state.isSpeaking || state.answered || !hasAnswer;
  nextButton.disabled = !state.answered;
}

function selectWordChoice(selectedWord) {
  if (state.answered || state.mode !== "listening") return;

  const current = state.deck[state.currentIndex];
  const isCorrect = normaliseKey(selectedWord) === normaliseKey(current.word);
  completeAnswer({
    current,
    isCorrect,
    response: selectedWord,
    mode: "listening",
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
}

function selectMeaningChoice(selectedMeaning, correctMeaning) {
  if (state.answered || state.mode !== "reading") return;

  const current = state.deck[state.currentIndex];
  const isCorrect = normaliseKey(selectedMeaning) === normaliseKey(correctMeaning);
  completeAnswer({
    current,
    isCorrect,
    response: selectedMeaning,
    mode: "reading",
  });

  [...choices.querySelectorAll("button")].forEach((button) => {
    const buttonMeaning = button.dataset.meaning;
    button.disabled = true;
    if (normaliseKey(buttonMeaning) === normaliseKey(correctMeaning)) {
      button.classList.add("correct");
    } else if (normaliseKey(buttonMeaning) === normaliseKey(selectedMeaning)) {
      button.classList.add("incorrect");
    }
  });
}

function checkAnswer() {
  if (state.answered || state.mode !== "dictation") return;

  const current = state.deck[state.currentIndex];
  const typedAnswer = normaliseWord(answerInput.value);
  if (!current || !typedAnswer) {
    answerInput.focus();
    return;
  }

  const isCorrect = normaliseKey(typedAnswer) === normaliseKey(current.word);
  completeAnswer({
    current,
    isCorrect,
    response: typedAnswer,
    mode: "dictation",
  });

  blankSentence.innerHTML = renderRevealedSentence(current.example, current.word);
  answerInput.classList.add(isCorrect ? "correct" : "incorrect");
  setAnswerDisabled(true);
}

function completeAnswer({ current, isCorrect, response, mode }) {
  state.answered = true;
  stopRoundSpeech();
  renderListeningState(isCorrect ? "正确" : "答案已显示");

  if (isCorrect) {
    state.score += 1;
    scoreValue.textContent = String(state.score);
  }

  state.results.push({
    word: current.word,
    example: current.example,
    response,
    correct: isCorrect,
    mode,
  });

  updateFavoriteBook(current, mode, isCorrect, response);
  renderAnswerReview(current, response, isCorrect, mode);
  updateProgress();
  updateActionButtons();

  const isLastRound = state.currentIndex === state.deck.length - 1;
  if (isLastRound) {
    nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">✓</span>完成';
  }
}

function renderAnswerReview(current, response, isCorrect, mode) {
  const note = getWordNote(current);
  const responseText =
    mode === "dictation"
      ? `你填写的是 ${escapeHtml(response)}。`
      : mode === "reading"
        ? isCorrect
          ? "你选中了正确释义。"
          : `你选择了 ${escapeHtml(response)}，正确释义是 ${escapeHtml(note.zh)}。`
      : isCorrect
        ? "你选中了正确答案。"
        : `你选择了 ${escapeHtml(response)}，正确答案是 ${escapeHtml(current.word)}。`;
  const missingText = note.missing
    ? '<p class="review-warning">这个词暂时没有内置释义。需要准确释义时，可以按 word|例句|中文释义 的格式输入。</p>'
    : "";

  reviewPanel.innerHTML = `
    <article class="word-review ${isCorrect ? "is-correct" : "is-wrong"}">
      <div class="review-header">
        <span class="review-status">${isCorrect ? "正确" : "答错了"}</span>
        <strong>${escapeHtml(current.word)}</strong>
      </div>
      <p class="review-selected">${responseText}</p>
      <dl class="definition-list">
        <div>
          <dt>中文释义</dt>
          <dd>${escapeHtml(note.zh)}</dd>
        </div>
        <div>
          <dt>English definition</dt>
          <dd>${escapeHtml(note.en)}</dd>
        </div>
        <div>
          <dt>Example sentence</dt>
          <dd>${renderRevealedSentence(current.example, current.word)}</dd>
        </div>
      </dl>
      ${missingText}
    </article>
  `;
}

function nextRound() {
  if (!state.answered) return;

  if (state.currentIndex >= state.deck.length - 1) {
    finishQuiz();
    return;
  }

  state.currentIndex += 1;
  renderRound();
  if (autoSpeak.checked) {
    speakCurrentRound(true);
  } else {
    renderListeningState("点击朗读开始本题");
  }
}

function finishQuiz() {
  stopRoundSpeech();
  const total = state.deck.length;
  const missed = state.results.filter((result) => !result.correct);

  quizTitle.textContent = `${getModeLabel()}完成`;
  roundState.textContent = `${state.score} / ${total}`;
  blankSentence.textContent = "本轮练习已完成";
  choices.hidden = true;
  choices.innerHTML = "";
  answerForm.hidden = true;
  progressBar.style.width = "100%";
  setAnswerDisabled(true);
  listenButton.disabled = true;
  nextButton.disabled = true;
  nextButton.innerHTML = '<span class="button-icon" aria-hidden="true">→</span>下一题';

  if (!missed.length) {
    reviewPanel.innerHTML = "<strong>全部正确。</strong>";
    return;
  }

  const missedList = missed
    .map(
      (item) =>
        `<li><strong>${escapeHtml(item.word)}</strong><span>你的答案：${escapeHtml(
          item.response,
        )}</span><small>${renderRevealedSentence(item.example, item.word)}</small></li>`,
    )
    .join("");

  reviewPanel.innerHTML = `<strong>需要复习：</strong><ul class="missed-list">${missedList}</ul>`;
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

function updateSetupControls() {
  optionCount.disabled = getSelectedMode() === "dictation";
}

modeRadios.forEach((radio) => {
  radio.addEventListener("change", updateSetupControls);
});
bookTabs.forEach((button) => {
  button.addEventListener("click", () => {
    state.bookMode = button.dataset.bookTab;
    renderFavoriteBook();
  });
});
bookList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-book]");
  if (!button) return;
  removeFavoriteBookItem(state.bookMode, button.dataset.removeBook);
});
voiceSelect.addEventListener("change", () => updateVoiceStatus(getSelectedVoice()));
startButton.addEventListener("click", startQuiz);
sampleButton.addEventListener("click", loadSampleWords);
listenButton.addEventListener("click", () => speakCurrentRound(true));
nextButton.addEventListener("click", nextRound);
autoSpeak.addEventListener("change", updateActionButtons);
answerInput.addEventListener("input", updateActionButtons);
answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkAnswer();
});

document.addEventListener("keydown", (event) => {
  if ((state.mode === "listening" || state.mode === "reading") && /^[1-9]$/.test(event.key)) {
    const button = choices.querySelectorAll("button")[Number(event.key) - 1];
    if (button && !button.disabled) button.click();
  }

  if (event.key === "Enter" && state.answered && !nextButton.disabled) {
    event.preventDefault();
    nextButton.click();
  }
});

loadVoices();
updateSetupControls();
renderFavoriteBook();
if ("speechSynthesis" in window) {
  if (typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  } else {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}
