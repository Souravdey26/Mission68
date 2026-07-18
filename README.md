# Mission 68 v3

Mission 68 v3 is an installable, offline-first Progressive Web App.

## Main changes

- Dynamic IndexedDB databases for foods, exercises, meal templates and workout templates.
- No diet item or exercise must be edited in source code.
- Daily logging for food, water, steps, workouts, notes and weight.
- Weight trend, rolling adherence and simple goal projection.
- Calendar and day archive.
- JSON backup/import and CSV export.
- Professional, minimal interface using system fonts and no external dependencies.
- Best-effort import of existing v2 weigh-ins from the `mission68-state` localStorage record.

## Deploy

Upload every file in this folder to the same GitHub Pages repository directory. Do not omit `db.js`, `app.js` or `styles.css`.

Because the service worker cache name changed, open the deployed app, close it completely, and open it again. Existing browser data is not deleted by the service-worker update.

## Install

Open the GitHub Pages URL in Chrome on Android, then use **Add to Home screen** or **Install app**.

## Backup

Use Settings > Export complete backup before replacing devices, clearing browser storage or performing major updates.
