# Mission 68 — install as an app

One-time setup (~5 minutes), then it lives on your phone like any app.

## Deploy on GitHub Pages (free)

1. Go to github.com → New repository → name it `mission68` → Public → Create.
2. Click "uploading an existing file" and upload ALL files from this folder:
   `index.html`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `icon-maskable.png`.
   Commit.
3. Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.
4. Wait ~1 minute. Your app is live at:
   `https://<your-username>.github.io/mission68/`

## Install on your phone

1. Open that URL in **Chrome** on your phone.
2. Chrome menu (⋮) → **"Add to Home screen"** → **Install**.
3. A "Mission 68" icon appears. It opens full-screen, no browser bar, and works offline after the first load.

## Notes

- Your data (ticks, streaks, weigh-ins) is stored on the phone itself, per-app.
  It survives phone restarts. It does NOT sync between devices.
- Day 1 = the first day you open the installed app. Install it on your real start day,
  or clear the app's site data in Chrome before starting for real.
- To update the app later: replace `index.html` in the repo and bump the
  cache name in `sw.js` (e.g. `mission68-v2`). The app refreshes on next open.
