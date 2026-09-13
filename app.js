// ================================================================
//  FRIDGIT — app.js (Pronunciation & Speech Synthesis Edition)
//  "എന്താടാ വീണ്ടും വന്നത്?" — The Fridge That Judges You
// ================================================================

// ── DATA WITH MALAYALAM & PHONETIC PRONUNCIATIONS ─────────────

const PERSONALITIES = [
  { 
    id:'disappointed', name:'DISAPPOINTED', face:'😒', color:'#8b5cf6',
    quote:'നിന്നിൽ നിന്ന് കൂടുതൽ പ്രതീക്ഷിച്ചിരുന്നു.',
    phonetic:'Ninnil ninnu kooduthal pratheekshichirunnu.',
    audio:'pers_disappointed'
  },
  { 
    id:'sarcastic', name:'SARCASTIC', face:'😂', color:'#00d4ff',
    quote:'Wow. Another fridge visit. Groundbreaking.',
    phonetic:'Wow. Another fridge visit. Groundbreaking.',
    audio:'pers_sarcastic'
  },
  { 
    id:'angry', name:'ANGRY', face:'😡', color:'#ff3366',
    quote:'DO NOT OPEN ME AGAIN.',
    phonetic:'Do not open me again!',
    audio:'pers_angry'
  },
  { 
    id:'emotional', name:'EMOTIONAL', face:'🥲', color:'#00d4ff',
    quote:'നീ ഭക്ഷണം എടുക്കാതെ പോകുമ്പോൾ എനിക്ക് വിഷമമാകുന്നു.',
    phonetic:'Nee bhakshanam edukkaathe pokumbol enikku vishamamaakunnu.',
    audio:'pers_emotional'
  },
  { 
    id:'strictmom', name:'STRICT MOM', face:'👩', color:'#ffd700',
    quote:'ആദ്യം കഴിച്ച പാത്രം കഴുകിയിട്ട് വാ.',
    phonetic:'Aadhyam kazhicha paathram kazhukiyittu vaa!',
    audio:'pers_strictmom'
  },
  { 
    id:'teacher', name:'TEACHER', face:'🧑‍🏫', color:'#00ff88',
    quote:'Why are you opening the fridge instead of studying?',
    phonetic:'Why are you opening the fridge instead of studying?',
    audio:'pers_teacher'
  },
];

const FOODS = [
  { 
    id:'pizza', emoji:'🍕', name:'Pizza', shelf:1,
    reaction:'ഇത് എത്ര ദിവസമായി ഇവിടെ? നിങ്ങൾ ഇപ്പോൾ roommates ആണോ?',
    phonetic:'Ithu ethra divasamaayi ivide? Ningal ippol roommates aano?',
    audio:'food_pizza'
  },
  { 
    id:'cake', emoji:'🍰', name:'Cake', shelf:1,
    reaction:'Healthy lifestyle തുടങ്ങിയത് എപ്പോഴായിരുന്നു?',
    phonetic:'Healthy lifestyle thudangiyathu eppozhaayirunnu?',
    audio:'food_cake'
  },
  { 
    id:'chocolate', emoji:'🍫', name:'Chocolate', shelf:1,
    reaction:'ഒന്ന് മാത്രം എടുക്കുമെന്നല്ലേ? കള്ളം പറയണ്ട.',
    phonetic:'Onnu maathram edukkumennalle? Kallam parayanda!',
    audio:'food_chocolate'
  },
  { 
    id:'milk', emoji:'🥛', name:'Milk', shelf:2,
    reaction:'ഇത് expire ആയോ? ഒരുക്ക് ഉണ്ടോ? Smell ചെയ്ത് നോക്ക്.',
    phonetic:'Ithu expire aayo? Smell cheythu nokku!',
    audio:'food_milk'
  },
  { 
    id:'apple', emoji:'🍎', name:'Apple', shelf:2,
    reaction:'An apple a day keeps the doctor away. പക്ഷേ നീ ഒരിക്കലും എടുക്കുന്നില്ല.',
    phonetic:'An apple a day keeps the doctor away. Pakshe nee orikkalum edukkunnilla!',
    audio:'food_apple'
  },
  { 
    id:'juice', emoji:'🧃', name:'Juice', shelf:2,
    reaction:'Sugar-free ആണോ? Real juice ആണോ? ഒന്നും matter ഇല്ല.',
    phonetic:'Sugar free aano? Real juice aano? Onnum matter illa!',
    audio:'food_juice'
  },
  { 
    id:'veggies', emoji:'🥦', name:'Vegetables', shelf:3,
    reaction:'WHO ARE YOU? നീ ആദ്യമായിട്ടാണ് ഇത് നോക്കുന്നത്.',
    phonetic:'Who are you? Nee aadhyamaayittaanu ithu nokkunnathu!',
    audio:'food_veggies'
  },
  { 
    id:'leftovers', emoji:'🍚', name:'Leftovers', shelf:3,
    reaction:'ഇത് leftover ആണോ, archaeological discovery ആണോ?',
    phonetic:'Ithu leftover aano, archaeological discovery aano?',
    audio:'food_leftovers'
  },
  { 
    id:'burger', emoji:'🍔', name:'Burger', shelf:3,
    reaction:'Gym membership ഉണ്ടോ? ഉണ്ടെങ്കിൽ waste ആണ്.',
    phonetic:'Gym membership undo? Undenkil waste aanu!',
    audio:'food_burger'
  },
];

const VISIT_MSGS = [
  { at:1,  msg:'Welcome.', face:'😐', phonetic:'Welcome.', audio:'visit_1' },
  { at:2,  msg:'വീണ്ടും? Okay then.', face:'🤨', phonetic:'Veendum? Okay then.', audio:'visit_2' },
  { at:3,  msg:'നീ വീണ്ടും? ഭക്ഷണം മാറിയിട്ടില്ല!', face:'😒', phonetic:'Nee veendum? Bhakshanam maariyittilla!', audio:'visit_3' },
  { at:5,  msg:'വിശപ്പാണോ, വെറുതെ നോക്കുന്നതാണോ?', face:'🙄', phonetic:'Vishappaano, veruthe nokkunnathaano?', audio:'visit_5' },
  { at:7,  msg:'ഇതൊരു museum അല്ല. Exhibition ഇല്ല ഇവിടെ.', face:'😤', phonetic:'Ithoru museum alla. Exhibition illa ivide.', audio:'visit_7' },
  { at:10, msg:'ഭക്ഷണം അല്ല, വിമർശനമാണ് ഇവിടെ ഫ്രീ!', face:'😡', phonetic:'Bhakshanam alla, vimarshanam aanu ivide free!', audio:'visit_10' },
  { at:15, msg:'നമുക്ക് serious ആയി സംസാരിക്കണം.', face:'😠', phonetic:'Namukku serious aayi samsaarikkannam.', audio:'visit_15' },
  { at:20, msg:'ഇത് ഫ്രിഡ്ജ് അല്ല. നിങ്ങളുടെ second home ആണ്.', face:'🤬', phonetic:'Ithu fridge alla. Ningalude second home aanu.', audio:'visit_20' },
];

const STARE_MSGS = [
  { sec:5,  msg:'എന്താ നോക്കുന്നത്?', face:'😐', phonetic:'Enthaa nokkunnathu?', audio:'stare_5' },
  { sec:10, msg:'ഞാനും അറിയില്ല ഇനി എന്ത് കാണിക്കണമെന്ന്.', face:'😑', phonetic:'Njaanum ariyilla ini enthu kaanikkannamenna.', audio:'stare_10' },
  { sec:15, msg:'DECIDE.', face:'😤', phonetic:'Decide!', audio:'stare_15' },
  { sec:20, msg:'തീരുമാനം എടുക്കെടാ!', face:'😡', phonetic:'Theeru maanam edukkedaa!', audio:'stare_20' },
  { sec:30, msg:'ഇത് supermarket അല്ല.', face:'🤬', phonetic:'Ithu supermarket alla!', audio:'stare_30' },
];

const AGE_STATUS = [
  { day:1, label:'🟢 Innocent',             color:'#00ff88', phonetic:'Innocent' },
  { day:2, label:'🟡 Suspicious',            color:'#ffd700', phonetic:'Suspicious' },
  { day:3, label:'🟠 Under Investigation',   color:'#ff8c00', phonetic:'Under Investigation' },
  { day:5, label:'🔴 WANTED',               color:'#ff3366', phonetic:'Wanted!' },
  { day:7, label:'☠️ CONTACT AUTHORITIES',  color:'#ff0000', phonetic:'Please contact the authorities!' },
];

const RANK_TIERS = [
  { min:0,  max:20,  name:'Beginner',          emoji:'🌱' },
  { min:21, max:40,  name:'Amateur',           emoji:'🐣' },
  { min:41, max:60,  name:'Professional',      emoji:'😎' },
  { min:61, max:80,  name:'Fridge Enthusiast', emoji:'🧊' },
  { min:81, max:95,  name:'Fridge Addict',     emoji:'🤤' },
  { min:96, max:100, name:'LEGEND',            emoji:'🏆' },
];

const IQ_QUIPS = [
  { text:'ഇത്ര IQ ഉണ്ടായിട്ടും നിങ്ങൾ 15 മിനിറ്റിൽ 8 പ്രാവശ്യം ഫ്രിഡ്ജ് തുറന്നു.', phonetic:'Ithra I Q undaayittum ningal 15 minutes-il 8 thavana fridge thurannu.' },
  { text:'High IQ. Low fridge decision-making. Interesting combination.', phonetic:'High I Q. Low fridge decision making. Interesting combination.' },
  { text:'ഈ IQ ഉപയോഗിച്ച് ഫ്രിഡ്ജ് തുറക്കുന്നതിനേക്കാൾ നല്ലത് ഭക്ഷണം ഉണ്ടാക്കൂ.', phonetic:'Ee I Q upayogichu fridge thurakkunnathinekkaal nallathu bhakshanam undaakkoo.' },
  { text:'IQ: impressive. Fridge habits: not so much.', phonetic:'I Q impressive. Fridge habits: not so much.' },
  { text:'നിങ്ങൾ IQ-ൽ ഒരു ഉദ്ദേശം ഉണ്ടാക്കൂ please.', phonetic:'Ningal I Q vil oru uddhesham undaakkoo please.' },
  { text:'ഈ IQ ഉണ്ടെങ്കിൽ ഒരു choice ഉണ്ടാക്കാൻ എന്ത് ചെയ്തു?', phonetic:'Ee I Q undenkil oru choice undaakkaan enthu cheythu?' },
];

const FREEZER_MSGS = [
  { text:'ഇവിടെ ഒന്നും ഇല്ല. ❄️ ഐസ് മാത്രം.', phonetic:'Ivide onnum illa. Ice maathram!' },
  { text:'Freezer is judging you too.', phonetic:'Freezer is judging you too.' },
  { text:'ഇത് freezer ആണ്. ഇവിടെ നിന്ന് brain cool ആക്കൂ.', phonetic:'Ithu freezer aanu. Ivide ninnu brain cool aakkoo.' },
  { text:'You found the secret zone. The reward: nothing.', phonetic:'You found the secret zone. The reward: nothing.' },
  { text:'🥶 Too cold. Like your food decision-making skills.', phonetic:'Too cold. Like your food decision making skills.' },
];

// ── STATE ─────────────────────────────────────────────────────

const DEFAULT_STATE = {
  totalVisits: 0,
  foodTaken: 0,
  stareCount: 0,
  rapidReopens: 0,
  rejectedCount: 0,
  foodStats: {},
  leftoverAges: { pizza:1, cake:1, milk:1, apple:1, juice:1, veggies:1, leftovers:3, burger:1, chocolate:1 },
  lastCloseTime: null,
  angerOpens: [],
  fridgeIQ: 147,
  currentPersonality: 0,
  fridgeOpen: false,
  totalStareTime: 0,
  soundEnabled: true,
  voiceEnabled: true,
};

let S = { ...DEFAULT_STATE };
let lastSpokenText = '';
let lastSpokenPhonetic = '';
let lastFoodReactionText = '';
let lastFoodReactionPhonetic = '';

function loadState() {
  try {
    const raw = localStorage.getItem('fridgit-v2');
    if (raw) S = { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch(_) {}
}

function saveState() {
  try { localStorage.setItem('fridgit-v2', JSON.stringify(S)); } catch(_) {}
}

function resetStats() {
  if (!confirm('Reset all your beautifully useless statistics? 😢')) return;
  const sound = S.soundEnabled;
  const voice = S.voiceEnabled;
  S = { ...DEFAULT_STATE, soundEnabled: sound, voiceEnabled: voice };
  saveState();
  renderAll();
  toast('Statistics reset. Fresh start! (The problem still exists.)');
  speakText('Statistics reset. Fresh start! The problem still exists.', 'Statistics reset. Fresh start! The problem still exists.');
}

// ── HYBRID REAL-MALAYALAM AUDIO & SPEECH ENGINE ───────────────

let currentAudio = null;
const audioCache = new Map();
let voicesList = [];
let mlVoice = null;
let enInVoice = null;
let isAudioUnlocked = false;

function isMalayalam(str) {
  return /[\u0D00-\u0D7F]/.test(str);
}

function unlockAudio() {
  if (!isAudioUnlocked) {
    isAudioUnlocked = true;
    if (_actx && _actx.state === 'suspended') {
      try { _actx.resume(); } catch (_) {}
    }
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.resume(); } catch (_) {}
    }
  }
}
document.addEventListener('click', unlockAudio);
document.addEventListener('touchstart', unlockAudio);

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  voicesList = window.speechSynthesis.getVoices() || [];
  mlVoice = voicesList.find(v => v.lang.toLowerCase().startsWith('ml'));
  enInVoice = voicesList.find(v => v.lang.toLowerCase() === 'en-in' || v.name.toLowerCase().includes('india')) ||
              voicesList.find(v => v.lang.toLowerCase().startsWith('en-gb')) ||
              voicesList.find(v => v.lang.toLowerCase().startsWith('en'));
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

function setSpeakingUI(isSpeaking) {
  if (isSpeaking) {
    document.body.classList.add('speaking');
    const msgBox = document.getElementById('msg-box');
    if (msgBox) msgBox.classList.add('speaking');
  } else {
    document.body.classList.remove('speaking');
    const msgBox = document.getElementById('msg-box');
    if (msgBox) msgBox.classList.remove('speaking');
  }
}

let lastSpokenTrackId = null;
let lastFoodReactionTrackId = null;

function speakAudio(trackId, malayalamText, phoneticText) {
  if (!S.voiceEnabled) return;

  lastSpokenTrackId = trackId;
  lastSpokenText = malayalamText;
  lastSpokenPhonetic = phoneticText;

  // 1. Stop any ongoing playback
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (_) {}
    currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
    } catch (_) {}
  }

  // 2. Try playing local high-quality native audio file!
  if (trackId) {
    const localFile = `audio/${trackId}.mp3`;
    try {
      let audio = audioCache.get(localFile);
      if (!audio) {
        audio = new Audio(localFile);
        audioCache.set(localFile, audio);
      } else {
        audio.currentTime = 0;
      }

      currentAudio = audio;
      setSpeakingUI(true);

      audio.onended = () => {
        setSpeakingUI(false);
        currentAudio = null;
      };

      audio.onerror = (err) => {
        console.warn(`Local audio ${localFile} failed, falling back to TTS stream:`, err);
        speakText(malayalamText, phoneticText);
      };

      const p = audio.play();
      if (p !== undefined) {
        p.catch((err) => {
          console.warn(`Local audio play prevented, falling back:`, err);
          speakText(malayalamText, phoneticText);
        });
      }
      return;
    } catch (err) {
      console.warn('Local audio exception:', err);
    }
  }

  // 3. Fallback to stream/TTS
  speakText(malayalamText, phoneticText);
}

function speakText(malayalamText, phoneticText, pitch = 1.0, rate = 0.95) {
  if (!S.voiceEnabled) return;

  lastSpokenText = malayalamText;
  lastSpokenPhonetic = phoneticText;

  // 1. Stop any currently playing speech/audio
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    } catch (_) {}
    currentAudio = null;
  }
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      window.speechSynthesis.resume();
    } catch (_) {}
  }

  // 2. Clean text for natural pronunciation
  const hasMalayalam = isMalayalam(malayalamText);
  const lang = hasMalayalam ? 'ml' : 'en';
  const rawText = hasMalayalam ? malayalamText : (phoneticText || malayalamText);
  const cleanText = rawText
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, '')
    .replace(/[—\-_*#`]/g, ' ')
    .trim();

  if (!cleanText) return;

  // 3. High-fidelity native Malayalam audio stream
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=tw-ob&q=${encodeURIComponent(cleanText)}`;

  try {
    let audio = audioCache.get(url);
    if (!audio) {
      audio = new Audio(url);
      audioCache.set(url, audio);
    } else {
      audio.currentTime = 0;
    }

    currentAudio = audio;
    setSpeakingUI(true);

    audio.onended = () => {
      setSpeakingUI(false);
      currentAudio = null;
    };

    audio.onerror = (err) => {
      console.warn('Audio stream error, switching to SpeechSynthesis fallback:', err);
      setSpeakingUI(false);
      fallbackWebSpeech(malayalamText, phoneticText, pitch, rate);
    };

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Audio autoplay blocked, falling back to Web Speech API:', err);
        fallbackWebSpeech(malayalamText, phoneticText, pitch, rate);
      });
    }
  } catch (err) {
    console.warn('Audio play exception, fallback to SpeechSynthesis:', err);
    fallbackWebSpeech(malayalamText, phoneticText, pitch, rate);
  }
}

function fallbackWebSpeech(malayalamText, phoneticText, pitch = 1.0, rate = 0.95) {
  if (!('speechSynthesis' in window)) {
    setSpeakingUI(false);
    return;
  }
  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();

    const toPronounce = (mlVoice && malayalamText) ? malayalamText : (phoneticText || malayalamText);
    const utter = new SpeechSynthesisUtterance(toPronounce);

    if (mlVoice && malayalamText) {
      utter.voice = mlVoice;
      utter.lang = 'ml-IN';
    } else if (enInVoice) {
      utter.voice = enInVoice;
      utter.lang = enInVoice.lang;
    } else {
      utter.lang = 'en-US';
    }

    utter.pitch = pitch;
    utter.rate = rate;
    utter.volume = 1.0;

    utter.onstart = () => setSpeakingUI(true);
    utter.onend = () => setSpeakingUI(false);
    utter.onerror = () => setSpeakingUI(false);

    window.speechSynthesis.speak(utter);
  } catch (err) {
    console.warn('Web Speech fallback error:', err);
    setSpeakingUI(false);
  }
}

function toggleVoice() {
  S.voiceEnabled = !S.voiceEnabled;
  saveState();
  const vBtn = document.getElementById('voice-btn');
  const fpVoice = document.getElementById('fp-voice');

  if (vBtn) {
    vBtn.textContent = S.voiceEnabled ? '🗣️' : '🤐';
    vBtn.style.borderColor = S.voiceEnabled ? 'var(--cyan)' : 'var(--text-dim)';
    vBtn.style.color = S.voiceEnabled ? 'var(--cyan)' : 'var(--text-dim)';
  }
  if (fpVoice) {
    fpVoice.textContent = S.voiceEnabled ? 'ACTIVE' : 'MUTED';
    fpVoice.style.color = S.voiceEnabled ? 'var(--green)' : 'var(--pink)';
  }

  if (S.voiceEnabled) {
    toast('Voice Pronunciation ENABLED 🗣️');
    speakText('Voice Pronunciation is now active!', 'Voice Pronunciation is now active!');
  } else {
    window.speechSynthesis.cancel();
    setSpeakingUI(false);
    toast('Voice Pronunciation MUTED 🤐');
  }
}

function repeatCurrentMsg() {
  if (lastSpokenTrackId) {
    speakAudio(lastSpokenTrackId, lastSpokenText, lastSpokenPhonetic);
  } else if (lastSpokenText || lastSpokenPhonetic) {
    speakAudio(null, lastSpokenText, lastSpokenPhonetic);
  } else {
    const cur = document.getElementById('msg-text')?.textContent || '';
    speakAudio('home_roast', cur, cur);
  }
}

function repeatFoodReaction() {
  if (lastFoodReactionTrackId) {
    speakAudio(lastFoodReactionTrackId, lastFoodReactionText, lastFoodReactionPhonetic);
  } else if (lastFoodReactionText || lastFoodReactionPhonetic) {
    speakAudio(null, lastFoodReactionText, lastFoodReactionPhonetic);
  }
}

function speakHomeTagline() {
  speakAudio(
    'home_roast',
    'എന്താടാ വീണ്ടും വന്നത്? ഭക്ഷണം അല്ല, വിമർശനമാണ് ഇവിടെ ഫ്രീ!',
    'Enthadaa veendum vannathu? Bhakshanam alla, vimarshanam aanu ivide free!'
  );
}

// ── AUDIO FX (Procedural Synthesis) ───────────────────────────

let _actx = null;
function actx() {
  if (!_actx) _actx = new (window.AudioContext || window.webkitAudioContext)();
  return _actx;
}

function playSound(type) {
  if (!S.soundEnabled) return;
  try {
    const ctx = actx();
    const t = ctx.currentTime;
    const osc = (freq, type2, start, dur) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = type2; o.frequency.value = freq;
      g.gain.setValueAtTime(0.18, t + start);
      g.gain.exponentialRampToValueAtTime(0.001, t + start + dur);
      o.start(t + start); o.stop(t + start + dur);
    };

    if (type === 'open') {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(180, t);
      o.frequency.exponentialRampToValueAtTime(70, t + 0.65);
      g.gain.setValueAtTime(0.13, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.8);
      o.start(t); o.stop(t + 0.8);
    } else if (type === 'close') {
      osc(100, 'sine', 0, 0.3);
    } else if (type === 'select') {
      [523, 659, 784].forEach((f, i) => osc(f, 'sine', i * 0.1, 0.2));
    } else if (type === 'warning') {
      [0, 0.22, 0.44].forEach(d => osc(880, 'square', d, 0.18));
    } else if (type === 'anger') {
      osc(55, 'sawtooth', 0, 1.5); osc(440, 'square', 0, 1.5);
    } else if (type === 'judge') {
      [392, 330, 262, 196].forEach((f, i) => osc(f, 'triangle', i * 0.15, 0.22));
    } else if (type === 'boss') {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(60, t);
      o.frequency.exponentialRampToValueAtTime(25, t + 1.2);
      g.gain.setValueAtTime(0.28, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 1.5);
      o.start(t); o.stop(t + 1.5);
    }
  } catch(_) {}
}

function toggleSound() {
  S.soundEnabled = !S.soundEnabled;
  saveState();
  document.getElementById('snd-btn').textContent = S.soundEnabled ? '🔊' : '🔇';
  if (S.soundEnabled) playSound('select');
}

// ── NAVIGATION ────────────────────────────────────────────────

function nav(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const pg = document.getElementById('page-' + pageId);
  if (pg) pg.classList.add('active');
  const nb = document.getElementById('nb-' + pageId);
  if (nb) nb.classList.add('active');
  if (pageId === 'stats') renderStatsPage();
  if (pageId === 'useless') renderUselessPage();
  if (pageId === 'personality') renderPersonalityPage();
  if (pageId === 'home') updateHomeUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── FRIDGE LOGIC ──────────────────────────────────────────────

let stareTimer = null;
let lockoutTimer = null;
let isLocked = false;
let stareSeconds = 0;
let currentFood = null;
let freezerClickCount = 0;

function toggleFridge() {
  if (isLocked) return;
  S.fridgeOpen ? closeFridge() : openFridge();
}

function openFridge() {
  const now = Date.now();

  // Rapid-reopen → Final Boss
  if (S.lastCloseTime && (now - S.lastCloseTime) < 5000 && S.totalVisits > 0) {
    S.rapidReopens++;
    saveState();
    if (!document.getElementById('boss-overlay').classList.contains('vis')) {
      showBoss();
      return;
    }
  }

  // Track anger opens (sliding 2-min window)
  S.angerOpens = (S.angerOpens || []).filter(ts => now - ts < 120000);
  S.angerOpens.push(now);

  S.totalVisits++;
  S.fridgeOpen = true;
  saveState();

  // Animate door
  document.getElementById('fridge-door').classList.add('open');
  const ctrl = document.getElementById('fridge-ctrl');
  ctrl.textContent = '🚪 CLOSE FRIDGE';
  ctrl.classList.add('open-st');

  playSound('open');

  // Visit message & PRONOUNCE IT!
  const vm = visitMsg(S.totalVisits);
  setMsg(vm.msg);
  setDoorFace(vm.face);
  speakAudio(vm.audio, vm.msg, vm.phonetic);

  // Milestone flash
  if ([1, 3, 5, 10, 15, 20].includes(S.totalVisits)) flashMilestone(S.totalVisits);

  startStare();
  updateFridgeBar();
  updateHomeUI();

  // Anger mode?
  if (S.angerOpens.length >= 5) {
    setTimeout(triggerAnger, 900);
  }
}

function closeFridge() {
  S.fridgeOpen = false;
  S.lastCloseTime = Date.now();
  saveState();

  document.getElementById('fridge-door').classList.remove('open');
  const ctrl = document.getElementById('fridge-ctrl');
  ctrl.textContent = '🧊 OPEN FRIDGE';
  ctrl.classList.remove('open-st');

  playSound('close');
  const closeMsg = 'ഫ്രിഡ്ജ് അടഞ്ഞു. ഇനി മറ്റൊരു കാരണം ഉണ്ടാക്കൂ.';
  const closePhonetic = 'Fridge adanju! Ini mattoru kaaranam undaakkoo.';
  setMsg(closeMsg);
  setDoorFace('😐');
  stopStare();
  speakAudio('door_close', closeMsg, closePhonetic);
}

function visitMsg(n) {
  const hits = VISIT_MSGS.filter(m => m.at <= n);
  return hits.length ? hits[hits.length - 1] : { msg:'Welcome.', face:'😐', phonetic:'Welcome.' };
}

function setMsg(text) {
  const el = document.getElementById('msg-text');
  if (!el) return;
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = 'fadeIn .4s ease';
  el.textContent = text;
}

function setDoorFace(f) { 
  const el = document.getElementById('door-face');
  if (el) el.textContent = f; 
}

function updateFridgeBar() {
  document.getElementById('fp-visits').textContent = S.totalVisits;
  document.getElementById('fp-taken').textContent  = S.foodTaken;
  document.getElementById('fp-stares').textContent = S.stareCount;
  document.getElementById('fp-mood').textContent   = PERSONALITIES[S.currentPersonality].face;
  const fpVoice = document.getElementById('fp-voice');
  if (fpVoice) {
    fpVoice.textContent = S.voiceEnabled ? 'ACTIVE' : 'MUTED';
    fpVoice.style.color = S.voiceEnabled ? 'var(--green)' : 'var(--pink)';
  }
}

// ── STARE TIMER WITH PRONUNCIATION ────────────────────────────

function startStare() {
  stareSeconds = 0;
  stopStare();
  const overlay = document.getElementById('stare-overlay');
  overlay.classList.remove('vis');

  stareTimer = setInterval(() => {
    if (!S.fridgeOpen) { stopStare(); return; }
    stareSeconds++;
    S.totalStareTime++;
    saveState();

    const chk = STARE_MSGS.find(s => s.sec === stareSeconds);
    if (chk) {
      overlay.classList.add('vis');
      document.getElementById('stare-num').textContent = stareSeconds;
      document.getElementById('stare-msg').textContent = chk.msg;
      document.getElementById('stare-face').textContent = chk.face;
      if (stareSeconds === 5) { S.stareCount++; saveState(); updateFridgeBar(); }
      playSound('warning');
      
      // PRONOUNCE the stare escalation!
      speakAudio(chk.audio, chk.msg, chk.phonetic);
    } else if (stareSeconds > 5) {
      document.getElementById('stare-num').textContent = stareSeconds;
    }
    if (stareSeconds === 30) playSound('anger');
  }, 1000);
}

function stopStare() {
  if (stareTimer) { clearInterval(stareTimer); stareTimer = null; }
  document.getElementById('stare-overlay').classList.remove('vis');
  stareSeconds = 0;
}

// ── FOOD ITEMS & PRONUNCIATION ────────────────────────────────

function renderFoods() {
  const grids = { 1:'fg1', 2:'fg2', 3:'fg3' };
  Object.values(grids).forEach(id => document.getElementById(id).innerHTML = '');

  FOODS.forEach(food => {
    const age = S.leftoverAges[food.id] || 1;
    const badge = ageBadge(food.id, age);

    const div = document.createElement('div');
    div.className = 'food-item';
    div.id = 'fi-' + food.id;
    div.onclick = () => clickFood(food);
    div.innerHTML = `
      ${badge ? `<div class="age-badge" style="background:${badge.color};color:#000" title="${badge.label}">${age}</div>` : ''}
      <div class="food-emoji">${food.emoji}</div>
      <div class="food-name">${food.name}</div>`;
    document.getElementById(grids[food.shelf]).appendChild(div);
  });
}

function ageBadge(id, age) {
  if (id !== 'pizza' && id !== 'leftovers') return null;
  return [...AGE_STATUS].reverse().find(b => age >= b.day) || AGE_STATUS[0];
}

function ageBadgeForAge(age) {
  return [...AGE_STATUS].reverse().find(b => age >= b.day) || AGE_STATUS[0];
}

function clickFood(food) {
  if (!S.fridgeOpen) {
    const msg = 'ഫ്രിഡ്ജ് ആദ്യം തുറക്കൂ! 🙄';
    const phon = 'Fridge aadyam thurakku!';
    setMsg(msg);
    playSound('warning');
    speakAudio('need_open', msg, phon);
    return;
  }
  currentFood = food;
  S.leftoverAges[food.id] = (S.leftoverAges[food.id] || 1) + 1;
  if (!S.foodStats[food.id]) S.foodStats[food.id] = { selected:0, taken:0, rejected:0 };
  S.foodStats[food.id].selected++;
  saveState();
  stopStare();

  let reaction = food.reaction;
  let reactionPhonetic = food.phonetic;

  if (food.id === 'pizza' || food.id === 'leftovers') {
    const age = S.leftoverAges[food.id];
    const b = ageBadgeForAge(age);
    reaction += `\n\nDay ${age} — ${b.label}`;
    reactionPhonetic += `. Day ${age}. Status: ${b.phonetic}`;
  }

  lastFoodReactionTrackId = food.audio;
  lastFoodReactionText = reaction;
  lastFoodReactionPhonetic = reactionPhonetic;

  document.getElementById('m-emoji').textContent    = food.emoji;
  document.getElementById('m-reaction').textContent = reaction;
  document.getElementById('m-question').style.display = 'block';
  document.getElementById('m-btns').style.display     = 'flex';
  document.getElementById('m-resp').style.display     = 'none';
  document.getElementById('m-close').style.display    = 'none';

  document.getElementById('food-modal').classList.add('vis');
  playSound('judge');

  // Pronounce the food roast out loud!
  speakAudio(food.audio, reaction, reactionPhonetic);
}

function decide(choice) {
  let resp = '';
  let respPhonetic = '';
  let trackId = '';

  if (choice === 'yes') {
    resp = '✅ Finally. ഒരു തീരുമാനം എടുത്തു. ആഘോഷം!';
    respPhonetic = 'Finally! Oru theeru maanam eduthu. Aaghosham!';
    trackId = 'decide_yes';
    S.foodTaken++;
    if (currentFood) S.foodStats[currentFood.id].taken++;
    playSound('select');
  } else if (choice === 'no') {
    resp = '❌ അപ്പോ പിന്നെ എന്തിനാ തുറന്നത്? Tourism ആണോ?';
    respPhonetic = 'Appo pinne enthinaa thurannathu? Tourism aano?';
    trackId = 'decide_no';
    S.rejectedCount++;
    if (currentFood) S.foodStats[currentFood.id].rejected++;
    playSound('warning');
  } else {
    resp = '🤔 ഇത്ര വലിയ തീരുമാനമാണോ? UN Summit ആണോ?';
    respPhonetic = 'Ithra valiya theeru maanamaano? U N Summit aano?';
    trackId = 'decide_think';
    playSound('warning');
  }
  saveState();
  updateFridgeBar();
  renderFoods();

  document.getElementById('m-resp').textContent = resp;
  document.getElementById('m-resp').style.display = 'block';
  document.getElementById('m-btns').style.display = 'none';
  document.getElementById('m-question').style.display = 'none';
  document.getElementById('m-close').style.display = 'inline-flex';

  // Pronounce the decision reaction!
  speakAudio(trackId, resp, respPhonetic);
}

function closeModal() {
  document.getElementById('food-modal').classList.remove('vis');
  currentFood = null;
}

// ── FREEZER EASTER EGG & PRONUNCIATION ────────────────────────

function freezerClick() {
  const item = FREEZER_MSGS[freezerClickCount % FREEZER_MSGS.length];
  setMsg(item.text);
  document.getElementById('fz-items').textContent =
    ['🍦 🧊 🥶','❄️ 🥶 ❄️','🏔️ 🧊 ❄️'][freezerClickCount % 3];
  const trk = 'freezer_' + ((freezerClickCount % 3) + 1);
  freezerClickCount++;
  playSound('select');
  speakAudio(trk, item.text, item.phonetic);
}

// ── ANGER MODE WITH PRONOUNCED ROAST ──────────────────────────

function triggerAnger() {
  const ov = document.getElementById('anger-overlay');
  document.getElementById('anger-line').textContent =
    `${S.angerOpens.length} പ്രാവശ്യം തുറന്നു.`;
  ov.classList.add('vis');
  document.body.classList.add('anger-mode');
  playSound('anger');

  // PRONOUNCE ANGER TIRADE!
  speakAudio('anger', 'ഭക്ഷണം അല്ല, വിമർശനമാണ് ഇവിടെ ഫ്രീ!', 'Bhakshanam alla! Vimarshanam aanu ivide free!');

  isLocked = true;
  const ctrl = document.getElementById('fridge-ctrl');
  ctrl.disabled = true;
  const lm = document.getElementById('lockout-msg');
  lm.style.display = 'block';

  let cd = 10;
  document.getElementById('anger-cd').textContent = cd;

  lockoutTimer = setInterval(() => {
    cd--;
    document.getElementById('anger-cd').textContent = cd;
    document.getElementById('lockout-cd').textContent = cd;
    if (cd <= 0) {
      clearInterval(lockoutTimer);
      ov.classList.remove('vis');
      document.body.classList.remove('anger-mode');
      isLocked = false;
      ctrl.disabled = false;
      lm.style.display = 'none';
      S.angerOpens = [];
      saveState();
      const calm = 'ഇനി ഒന്ന് ശ്രദ്ധിക്ക്. Please.';
      const calmPhon = 'Ini onnu shraddhikku. Please.';
      setMsg(calm);
      speakAudio('anger_calm', calm, calmPhon);
    }
  }, 1000);
}

// ── FINAL BOSS WITH PRONUNCIATION ─────────────────────────────

function showBoss() {
  const ov = document.getElementById('boss-overlay');
  document.getElementById('boss-opts').style.display = 'grid';
  document.getElementById('boss-ans').style.display  = 'none';
  ov.classList.add('vis');
  playSound('boss');
  if (S.fridgeOpen) closeFridge();

  // Pronounce Boss Question!
  speakAudio(
    'boss_q',
    'തുറന്നിട്ട് അടച്ചിട്ട് വീണ്ടും തുറന്നതിന്റെ കാരണം?',
    'Thurannittu adachittu veendum thurannathinte kaaranam?'
  );
}

function bossAnswer(btn) {
  document.getElementById('boss-opts').style.display = 'none';
  const ans = document.getElementById('boss-ans');
  ans.style.display = 'block';
  playSound('select');

  // Pronounce the legendary "Sheri." response!
  speakAudio('boss_sheri', 'ശരി.', 'Sheri.');

  // Do absolutely nothing after 3 seconds
  setTimeout(() => {
    document.getElementById('boss-overlay').classList.remove('vis');
    const resume = 'ശരി. ഇനി ഫ്രിഡ്ജ് ഉപയോഗിക്കൂ. Responsibly.';
    const resumePhon = 'Sheri. Ini fridge upayogikku. Responsibly.';
    setMsg(resume);
  }, 3000);
}

// ── MILESTONE FLASH ───────────────────────────────────────────

function flashMilestone(n) {
  const vm = visitMsg(n);
  const el = document.createElement('div');
  el.className = 'milestone-flash';
  el.innerHTML = `Visit #${n}<br><span style="font-size:.55em;font-family:var(--font-ml)">${vm.msg}</span>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

// ── STATS PAGE ────────────────────────────────────────────────

function calcUseless() {
  if (S.totalVisits === 0) return 0;
  const a = Math.min(40, S.totalVisits * 2);
  const b = Math.min(25, S.stareCount * 5);
  const c = Math.min(20, S.rapidReopens * 4);
  const d = Math.min(15, S.rejectedCount * 3);
  return Math.min(100, Math.round(a + b + c + d));
}

function renderStatsPage() {
  document.getElementById('ss-v').textContent   = S.totalVisits;
  document.getElementById('ss-t').textContent   = S.foodTaken;
  document.getElementById('ss-s').textContent   = S.stareCount;
  document.getElementById('ss-r').textContent   = S.rapidReopens;
  document.getElementById('ss-rej').textContent = S.rejectedCount;
  document.getElementById('ss-st').textContent  = S.totalStareTime + 's';

  const disapp = S.totalVisits > 0
    ? Math.min(100, Math.round(((S.totalVisits - S.foodTaken) / S.totalVisits) * 100)) : 0;
  const useless = calcUseless();
  const veggStats = S.foodStats['veggies'];
  const vegAvoid = S.totalVisits > 0
    ? Math.min(100, Math.round(((S.totalVisits - (veggStats?.taken || 0)) / S.totalVisits) * 100)) : 100;

  setProg('d', disapp);
  setProg('u', useless);
  setProg('vg', vegAvoid);

  // Food stats grid
  const grid = document.getElementById('food-stats-grid');
  grid.innerHTML = FOODS.map(f => {
    const st = S.foodStats[f.id] || { selected:0, taken:0, rejected:0 };
    return `<div class="fsi">
      <div class="fsi-em">${f.emoji}</div>
      <div class="fsi-nm">${f.name}</div>
      <div class="fsi-ct">${st.selected||0} clicks</div>
      <div style="font-size:.62rem;color:var(--green)">✅ ${st.taken||0}</div>
      <div style="font-size:.62rem;color:var(--pink)">❌ ${st.rejected||0}</div>
    </div>`;
  }).join('');

  // Best/worst
  let maxC = -1, minC = Infinity, mostV = '—', leastV = '—';
  FOODS.forEach(f => {
    const c = S.foodStats[f.id]?.selected || 0;
    if (c > maxC) { maxC = c; mostV = f.emoji + ' ' + f.name; }
    if (c < minC) { minC = c; leastV = f.emoji + ' ' + f.name; }
  });
  document.getElementById('bw-most').textContent  = maxC > 0 ? mostV : '—';
  document.getElementById('bw-least').textContent = leastV;
}

function setProg(id, val) {
  document.getElementById('pb-' + id).style.width = val + '%';
  document.getElementById('pv-' + id).textContent = val + '%';
}

// ── USELESS PAGE & PRONUNCIATION ──────────────────────────────

function renderUselessPage() {
  const score = calcUseless();
  document.getElementById('score-num').textContent = score;
  document.getElementById('score-ring').style.background =
    `conic-gradient(var(--cyan) ${score}%, rgba(255,255,255,.05) 0%)`;

  const tier = RANK_TIERS.find(t => score >= t.min && score <= t.max) || RANK_TIERS[0];
  document.getElementById('u-rank').textContent = tier.emoji + ' ' + tier.name;
  document.getElementById('u-emoji').textContent = tier.emoji;

  const congrats =
    score >= 96 ? '"You have achieved the impossible. Absolutely nothing."' :
    score >= 81 ? '"This fridge has become your second home."' :
    score >= 61 ? '"Impressive commitment to being useless."' :
    score >= 41 ? '"You are getting there. Keep wasting time."' :
                  '"Open the fridge more to improve your score."';
  document.getElementById('u-congrats').textContent = congrats;

  const tiers = document.getElementById('rank-tiers');
  tiers.innerHTML = RANK_TIERS.map(t => `
    <div class="rank-tier ${t.name === tier.name ? 'cur' : ''}">
      <div style="font-size:1.4rem">${t.emoji}</div>
      <div class="rt-range">${t.min}–${t.max}%</div>
      <div class="rt-name">${t.name}</div>
      ${t.name === tier.name ? '<div style="font-size:.6rem;color:var(--yellow);margin-top:3px">← YOU</div>' : ''}
    </div>`).join('');

  // Pronounce achievement summary!
  speakText(
    `Your uselessness score is ${score} percent. You are ranked: ${tier.name}. Congratulations, you have achieved absolutely nothing.`,
    `Your uselessness score is ${score} percent. You are ranked: ${tier.name}. Congratulations, you have achieved absolutely nothing.`
  );
}

// ── PERSONALITY PAGE & PRONUNCIATION ──────────────────────────

function renderPersonalityPage() {
  const p = PERSONALITIES[S.currentPersonality];
  document.getElementById('pers-face').textContent  = p.face;
  document.getElementById('pers-name').textContent  = p.name;
  document.getElementById('pers-quote').textContent = p.quote;

  document.getElementById('iq-num').textContent = S.fridgeIQ;
  const iqItem = IQ_QUIPS[S.totalVisits % IQ_QUIPS.length];
  document.getElementById('iq-exp').textContent = `"${iqItem.text}"`;

  const grid = document.getElementById('pers-grid');
  grid.innerHTML = PERSONALITIES.map((p2, i) => `
    <div class="pers-mini ${i === S.currentPersonality ? 'active' : ''}" onclick="setPersonality(${i})">
      <div style="font-size:1.9rem">${p2.face}</div>
      <div style="font-size:.72rem;font-weight:700;margin-top:5px;color:${i === S.currentPersonality ? 'var(--cyan)' : 'var(--text)'}">
        ${p2.name}
      </div>
    </div>`).join('');
}

function setPersonality(i) {
  S.currentPersonality = i;
  saveState();
  renderPersonalityPage();
  updateFridgeBar();
  const p = PERSONALITIES[i];
  toast('Personality: ' + p.name);
  // Pronounce personality quote!
  speakAudio(p.audio, p.quote, p.phonetic);
}

function nextPersonality() {
  setPersonality((S.currentPersonality + 1) % PERSONALITIES.length);
  playSound('select');
}

function randomIQ() {
  S.fridgeIQ = 100 + Math.floor(Math.random() * 80);
  saveState();
  const iqItem = IQ_QUIPS[Math.floor(Math.random() * IQ_QUIPS.length)];
  document.getElementById('iq-num').textContent = S.fridgeIQ;
  document.getElementById('iq-exp').textContent = `"${iqItem.text}"`;
  playSound('judge');
  // Pronounce IQ roast!
  speakText(iqItem.text, iqItem.phonetic);
}

// ── HOME UI ───────────────────────────────────────────────────

function updateHomeUI() {
  document.getElementById('home-visits').textContent = S.totalVisits;
}

// ── TOAST ─────────────────────────────────────────────────────

function toast(msg, type = '') {
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.textContent = msg;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(100%)';
    setTimeout(() => el.remove(), 320);
  }, 3200);
}

// ── PARTICLES ─────────────────────────────────────────────────

function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#00d4ff','#8b5cf6','#00ff88','#ffd700','#ff3366'];
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.setProperty('--dur', (5 + Math.random() * 9) + 's');
    p.style.setProperty('--del', (Math.random() * 12) + 's');
    p.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width = p.style.height = (Math.random() > 0.5 ? '2px' : '3px');
    container.appendChild(p);
  }
}

// ── FULL RENDER ───────────────────────────────────────────────

function renderAll() {
  updateHomeUI();
  updateFridgeBar();
  renderFoods();
  renderStatsPage();
  renderUselessPage();
  renderPersonalityPage();
  document.getElementById('snd-btn').textContent = S.soundEnabled ? '🔊' : '🔇';
  const vBtn = document.getElementById('voice-btn');
  if (vBtn) {
    vBtn.textContent = S.voiceEnabled ? '🗣️' : '🤐';
    vBtn.style.borderColor = S.voiceEnabled ? 'var(--cyan)' : 'var(--text-dim)';
    vBtn.style.color = S.voiceEnabled ? 'var(--cyan)' : 'var(--text-dim)';
  }
}

// ── INIT ──────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  createParticles();
  renderAll();
  nav('home');

  // Auto-rotate personality every 90s
  setInterval(() => {
    if (!S.fridgeOpen && Math.random() > 0.5) {
      S.currentPersonality = Math.floor(Math.random() * PERSONALITIES.length);
      saveState();
      updateFridgeBar();
    }
  }, 90000);
});
