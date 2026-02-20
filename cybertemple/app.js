const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');
const windowEl = document.querySelector('.window');
const moodEl = document.getElementById('temple-mood');

tabs.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabs.forEach((b) => b.classList.remove('active'));
    panels.forEach((p) => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

const ritual = [
  '[boot] Attuning isolated ritual sandbox...',
  '[check] No foreign realm write-targets detected. ✅',
  '[summon] 🌿 Whispering to the Cosmic Forces',
  '[time]   🔮 Synchronizing celestial clock with local timeline',
  '[scan]   🍃 Reading kernel wind-song and host runes',
  '[carve]  ᛉ ᛃ ᚨ ᚠ ᛟ sealing successful pathways ᛟ ᚠ ᚨ ᛃ ᛉ',
  '[forge]  Constructing fictional full-stack grove: editor, terminal, CI altar',
  '[spawn]  Opening portal window into their developer dimension',
  '[watch]  Ritual loop active; the environment sustains itself',
  '[done]   <the circle is complete, and still running>'
];

const ritualPanel = document.getElementById('ritual-panel');
ritual.forEach((entry) => {
  const p = document.createElement('p');
  p.className = 'line';
  p.innerHTML = entry
    .replace(/\[(.*?)\]/g, '<span class="tag">[$1]</span>')
    .replace('✅', '<span class="ok">✅</span>')
    .replace(/ᛉ ᛃ ᚨ ᚠ ᛟ.*?ᛟ ᚠ ᚨ ᛃ ᛉ/, '<span class="sigil">$&</span>');
  ritualPanel.appendChild(p);
});

const bootTime = Date.now();
const uptime = document.getElementById('uptime');
const throughput = document.getElementById('throughput');
const integrity = document.getElementById('integrity');
const realm = document.getElementById('realm');
const chaosLevel = document.getElementById('chaos-level');
const events = document.getElementById('events');
const terminalLog = document.getElementById('terminal-log');
const oracleInput = document.getElementById('oracle-input');
const bars = ['bar1', 'bar2', 'bar3', 'bar4'].map((id) => document.getElementById(id));

document.getElementById('host').textContent = `platform: ${navigator.platform || 'unknown'} | language: ${navigator.language || 'unknown'}`;
document.getElementById('ua').textContent = `agent: ${(navigator.userAgent || 'unknown').slice(0, 88)}...`;

function fmt(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, '0');
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function pushEvent(msg, tag = 'pulse') {
  const row = document.createElement('div');
  row.className = 'event';
  const t = new Date().toLocaleTimeString();
  row.innerHTML = `<span class="tag">[${tag}]</span> ${t} — ${msg}`;
  events.prepend(row);
  if (events.children.length > 18) events.removeChild(events.lastChild);
}

function pushTerminal(msg) {
  const row = document.createElement('div');
  row.className = 'event';
  row.textContent = msg;
  terminalLog.prepend(row);
  if (terminalLog.children.length > 12) terminalLog.removeChild(terminalLog.lastChild);
}

function glitch() {
  windowEl.classList.add('glitch');
  setTimeout(() => windowEl.classList.remove('glitch'), 280);
}

oracleInput.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const cmd = e.target.value.trim().toLowerCase();
  e.target.value = '';
  if (!cmd) return;

  if (cmd === 'summon') {
    pushTerminal('☄️ Summon accepted: additional wisps added to event stream.');
    pushEvent('summoned an auxiliary spirit process', 'summon');
  } else if (cmd === 'pulse') {
    pushTerminal('💓 Pulse command executed.');
    pushEvent('manual pulse propagated through subsystems', 'pulse');
  } else if (cmd === 'glitch') {
    pushTerminal('🌀 Glitch initiated. Hold onto reality.');
    pushEvent('visual phase distortion observed', 'glitch');
    glitch();
  } else if (cmd === 'bless') {
    pushTerminal('✨ Blessing accepted. Integrity fortified.');
    pushEvent('temple blessing increased coherence', 'bless');
  } else {
    pushTerminal(`Unknown incantation: ${cmd}`);
  }
});

const statuses = ['STABLE', 'ATTUNED', 'LUCID', 'HARMONIC', 'OVERJOYED'];
const moods = ['Mood: EUPHORIC', 'Mood: TRANSCENDENT', 'Mood: PLAYFUL', 'Mood: COSMIC'];
setInterval(() => {
  const sec = Math.floor((Date.now() - bootTime) / 1000);
  uptime.textContent = fmt(sec);
  throughput.textContent = `${(4.2 + Math.random() * 4.9).toFixed(2)} TU/s`;
  integrity.textContent = `${(97.8 + Math.random() * 2.2).toFixed(2)}%`;
  realm.textContent = statuses[Math.floor(Math.random() * statuses.length)];
  moodEl.textContent = moods[Math.floor(Math.random() * moods.length)];

  const chaos = (Math.random() * 100).toFixed(1);
  chaosLevel.textContent = `Chaos index: ${chaos}%`;

  bars.forEach((b, i) => {
    const val = 40 + Math.random() * 60 - i * 2;
    b.style.width = `${Math.max(12, Math.min(100, val)).toFixed(1)}%`;
  });

  if (Math.random() > 0.45) {
    const messages = [
      'oracle cache cycled cleanly',
      'linter spirits approved latest rune set',
      'terminal atrium synchronized',
      'matrix veil density recalibrated',
      'commit echoes archived in crystal ledger',
      'delight market restocked with paradox snacks',
      'non-euclidean aisle expanded by 2.3m'
    ];
    pushEvent(messages[Math.floor(Math.random() * messages.length)]);
  }
}, 1000);

pushEvent('cybertemple observatory initialized', 'boot');
pushEvent('ritual telemetry stream online', 'init');
pushTerminal('oracle ready. commands: summon, pulse, glitch, bless');

const products = [
  { name: 'Infinity Soda', effect: 'Fizziness exceeded Euclidean constraints.' },
  { name: 'Self-Folding Hoodie', effect: 'Garment folded itself into a Klein bottle.' },
  { name: 'Recursive Cereal', effect: 'Each bite contains a smaller breakfast aisle.' },
  { name: 'Quantum Tape', effect: 'Adheres to timelines, not surfaces.' },
  { name: 'Pixel Mango', effect: 'Resolution improved to 8K flavor.' },
  { name: 'Causality Gum', effect: 'Chewed before being unwrapped.' },
  { name: 'Singularity Soup', effect: 'Spoon crossed event horizon safely.' },
  { name: 'Phantom Keyboard', effect: 'Typed three commits from the future.' }
];

const productGrid = document.getElementById('product-grid');
const delightScore = document.getElementById('delight-score');
const anomalyCount = document.getElementById('anomaly-count');
const anomalyBanner = document.getElementById('anomaly-banner');
const randomizerBtn = document.getElementById('ritual-randomizer');
let score = 0;
let anomalies = 0;

products.forEach((item) => {
  const el = document.createElement('article');
  el.className = 'product';
  el.innerHTML = `<div class="pname">${item.name}</div><div class="sub">${item.effect}</div>`;
  el.addEventListener('click', () => {
    score += Math.floor(8 + Math.random() * 30);
    anomalies += 1;
    delightScore.textContent = String(score);
    anomalyCount.textContent = String(anomalies);
    anomalyBanner.textContent = `${item.name}: ${item.effect}`;
    pushEvent(`wonder aisle anomaly: ${item.name}`, 'market');
    if (Math.random() > 0.7) glitch();
  });
  productGrid.appendChild(el);
});

randomizerBtn.addEventListener('click', () => {
  const random = products[Math.floor(Math.random() * products.length)];
  anomalyBanner.textContent = `Random Phenomenon → ${random.effect}`;
  pushEvent(`random phenomenon invoked: ${random.name}`, 'chaos');
  score += 13;
  anomalies += 1;
  delightScore.textContent = String(score);
  anomalyCount.textContent = String(anomalies);
  glitch();
});

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
const chars = '01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*?';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);
  columns = Math.floor(canvas.width / fontSize);
  drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
}

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#46ff9a';
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(char, x, y);
    if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
setInterval(drawMatrix, 50);
