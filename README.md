# Mission 68 — v3 (Tabular / Black & White)

## Updating from v2 (already installed)

1. In the `mission68` repo, replace **all six files** with the v3 versions:
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon-maskable.png`.
2. Commit. The service worker cache is bumped to `mission68-v3` — the installed
   app picks it up on its next open (open, close fully, open again).
3. **All existing data carries over untouched**: every logged day, weigh-in,
   load change and note. Same storage key, same exercise IDs.

## New in v3

- **Full redesign** — minimal black & white, tabular layout, hairline rules,
  tabular numerals. **Dark mode** toggle in the header (◐), remembered across
  opens; first run follows the phone's system setting.
- **Date navigation** — ‹ › arrows and a tap-to-open date picker in the header.
  Any past day opens fully **editable**: tick missed meals, fix water, log a
  forgotten weigh-in, edit the note. A banner shows when you're on a past day.
- **Insights tab** (replaces Tracker) —
  - Streaks & momentum: current streak, longest streak, complete days,
    workouts this week (a complete day = ≥80% of the checklist).
  - Weight chart with **7-day rolling average**, weekly trend rate, and a
    **projected date to reach 68 kg** from the last ~4 weeks of weigh-ins.
  - **Consistency heatmap** — last 13 weeks, GitHub-style, monochrome.
  - Weekly adherence bars (last 5 weeks).
  - Strength progression table — current load and total change per exercise;
    tap for the full date-stamped history.
- **Editable meals** — Diet tab: tap any meal to edit name/time/contents/kcal/
  protein, add or delete meals, or reset to the default plan. Default dinner
  updated to **2 small rotis + chicken 100g (≈440 kcal / 26.5 g P)**.
- **Editable workouts** — Exercise tab: tap any exercise to edit name,
  equipment, sets×reps and load (load edits keep the dated history), add or
  delete exercises in A or B, or reset to default.
- Everything from v2 kept: off-plan food log, water grid, rest timer,
  weigh-in reminder, daily note, extra-session override, form-video links,
  JSON export/import, adjustable targets.

## Fresh install

Deploy the six files to GitHub Pages, open the URL in Chrome on the phone,
menu → "Add to Home screen".
