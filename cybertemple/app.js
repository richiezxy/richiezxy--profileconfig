const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');

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
const events = document.getElementById('events');
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
  if (events.children.length > 14) events.removeChild(events.lastChild);
}

const statuses = ['STABLE', 'ATTUNED', 'LUCID', 'HARMONIC'];
setInterval(() => {
  const sec = Math.floor((Date.now() - bootTime) / 1000);
  uptime.textContent = fmt(sec);
  throughput.textContent = `${(4.2 + Math.random() * 2.1).toFixed(2)} TU/s`;
  integrity.textContent = `${(98.4 + Math.random() * 1.5).toFixed(2)}%`;
  realm.textContent = statuses[Math.floor(Math.random() * statuses.length)];

  bars.forEach((b, i) => {
    const val = 55 + Math.random() * 45 - i * 3;
    b.style.width = `${Math.max(20, Math.min(100, val)).toFixed(1)}%`;
  });

  if (Math.random() > 0.55) {
    const messages = [
      'oracle cache cycled cleanly',
      'linter spirits approved latest rune set',
      'terminal atrium synchronized',
      'matrix veil density recalibrated',
      'commit echoes archived in crystal ledger'
    ];
    pushEvent(messages[Math.floor(Math.random() * messages.length)]);
  }
}, 1000);

pushEvent('cybertemple observatory initialized', 'boot');
pushEvent('ritual telemetry stream online', 'init');

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
const chars = '01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
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
