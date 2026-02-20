# Cybertemple Observatory

This repo now includes a standalone web interface under `cybertemple/` so you can work with a real UI (not only workflow YAML):

- `cybertemple/index.html`
- `cybertemple/styles.css`
- `cybertemple/app.js`

## Run locally

```bash
python -m http.server 8000 --bind 0.0.0.0
```

Open `http://127.0.0.1:8000/cybertemple/`.

## Workflow behavior

The `003.yml` workflow remains manual-only and now packages this UI by copying `cybertemple/*` into `public/`.
