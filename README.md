# Hiba & Jalal — Bouskoura · 15 August 2026

An elegant, video-led wedding invitation built as a single scrolling experience.

## Features

- Click-to-play full-screen video invitation cover
- Live countdown to 15 August 2026
- Full-screen itinerary video
- RSVP form connected to Formspree
- Responsive cream, ivory, sage and soft-gold design system
- No framework or build step

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

(A local server is recommended for consistent video and form behaviour.)

## Page sections

`index.html` contains the video cover, live countdown, itinerary video and RSVP form in one continuous scroll.

## Deploy

Pushing to `main` deploys automatically to GitHub Pages via `.github/workflows/pages.yml`.
