# Mission 68 — v2 (Editorial Ledger)

## Updating from v1 (already installed)

1. In the `mission68` repo, replace **all six files** with the v2 versions:
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon-maskable.png`.
2. Commit. The service worker cache is already bumped to `mission68-v2` — the
   installed app picks up the new version on its next open (open, close fully, open again).
3. Your existing data carries over untouched: every day you've logged since day 1
   is already in the Archive, and your weigh-ins feed the new Tracker chart.

## New in v2

- **Tracker tab** — full weight chart with 5-kg milestone marks, last-7-days
  compliance strip, 7-day averages, strength log, day-by-day Archive.
- **Archive** — tap any past day for its complete page: meals, off-plan food,
  water, movement, weigh-in, note.
- **Editable loads** — tap any load on the Exercise page (or in the Strength log)
  to update it; every change is date-stamped for progression tracking.
- **Off the plan** — log any indulgence with its calories (and protein);
  it counts into the day's bars and the archive.
- **Backup** — Tracker → Data & settings → Export/Import JSON.
- **Daily note, rest timer (60/90 s), weigh-in reminder, watch-form links,
  adjustable targets**, and a full redesign.

## Fresh install

Same as v1: deploy the six files to GitHub Pages, open the URL in Chrome on
the phone, menu → "Add to Home screen".
