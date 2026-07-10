# Ryme & Shehab — Marrakech · 30 May 2026

Our wedding invitation site: a single self-contained HTML page, kept as a keepsake now that the big day has passed.

**Live:** https://shehio.github.io/ryme-shehab-invite/

## Features

- Trilingual — English, Français, العربية (full RTL), switchable via the globe toggle or `?lang=en|fr|ar`
- Day / night theme with cross-fading hero photos, canvas stars and gold dust
- Countdown to the ceremony (shows a "happily married" line now that the date has passed)
- Schedule timeline, venue & attire cards, RSVP form (Formspree, with mailto fallback)
- No framework, no build step — everything lives in `index.html`

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

(Or just open `index.html` in a browser — a server is only needed for exact font/asset behaviour.)

## Editing

All copy, dates, links and the schedule live in the `CONFIG` object near the bottom of `index.html`; French and Arabic overrides live in `TRANSLATIONS` right below it.

## Deploy

Pushing to `main` deploys automatically to GitHub Pages via `.github/workflows/pages.yml`.
