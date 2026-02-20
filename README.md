# Cybertemple Observatory

A standalone, living web interface under `cybertemple/`:

- `cybertemple/index.html`
- `cybertemple/styles.css`
- `cybertemple/app.js`

## Features

- Multi-tab cybertemple window (Dashboard, Wonder Aisle, Matrix Rainfall, Ritual Log)
- Live telemetry and event stream
- Interactive "Wonder Aisle" with clickable anomalies and delight scoring
- Mini oracle terminal with reactive commands (`summon`, `pulse`, `glitch`, `bless`)
- Matrix animation and ambient visual effects

## Run locally

```bash
python -m http.server 8000 --bind 0.0.0.0
```

Open `http://127.0.0.1:8000/cybertemple/`.

## Workflow behavior

`003.yml` remains manual-only and packages this UI by copying `cybertemple/*` into `public/`.
