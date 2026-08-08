/* Standard — service worker
   Bump CACHE on every deploy. That is the only line you must change. */
const CACHE = 'standard-v1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .catch(() => null)
  );
  // Do NOT skipWaiting: never swap the app out from under a running instance.
  // The new version activates once every tab is closed.
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // App shell (navigations and index.html): network first, cache fallback.
  // Online you always get the current build; offline you get the last good one.
  const isShell = req.mode === 'navigate' || url.pathname.endsWith('/index.html');

  if (isShell) {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put('./index.html', copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match('./index.html').then(r => r || caches.match('./'))
        )
    );
    return;
  }

  // Everything else (icons, manifest): cache first.
  e.respondWith(
    caches.match(req).then(hit =>
      hit || fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      }).catch(() => hit)
    )
  );
});

// Allow the page to force an update when you deploy a new build.
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
