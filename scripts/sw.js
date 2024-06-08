self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("store")
      .then((cache) =>
        cache.addAll([
          "/roknshadeed/",
          "/roknshadeed/index.html",
          "/roknshadeed/scripts/index.js",
          "/roknshadeed/scripts/alpine.js",
          "/roknshadeed/styles/daisy.min.css",
          "/roknshadeed/styles/styles.min.css",
          "/roknshadeed/favicon.ico",
          "/roknshadeed/data.json",
          "/roknshadeed/fonts/29LT Kaff Black.ttf",
          "/roknshadeed/fonts/29LT Kaff Semibold.ttf",
          "/roknshadeed/fonts/29LT Kaff Ultralight.ttf",
          "/roknshadeed/fonts/29LT Kaff.ttf",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
