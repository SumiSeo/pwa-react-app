self = this;

const staticCacheName = "site-static";
const assets = ["/", "/index.html", "/app.js"];

self.addEventListener("install", (evt) => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", (evt) => {
  console.log("service worker has been activated");
});

self.addEventListener("fetch", (evt) => {
  console.log("fetch event", evt);
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
