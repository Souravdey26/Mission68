/* Mission 68 service worker — offline-first app shell */
const CACHE = "mission68-v2";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  /* Google Fonts: cache at runtime so the app looks right offline too */
  if (url.hostname.includes("fonts.googleapis.com") || url.hostname.includes("fonts.gstatic.com")) {
    e.respondWith(
      caches.open("mission68-fonts").then((c) =>
        c.match(e.request).then((hit) =>
          hit ||
          fetch(e.request).then((res) => {
            c.put(e.request, res.clone());
            return res;
          }).catch(() => hit)
        )
      )
    );
    return;
  }

  /* App shell: cache-first, refresh in background */
  if (e.request.method === "GET" && url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then((hit) => {
        const fresh = fetch(e.request)
          .then((res) => {
            caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
            return res;
          })
          .catch(() => hit);
        return hit || fresh;
      })
    );
  }
});
