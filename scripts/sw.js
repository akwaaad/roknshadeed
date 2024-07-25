self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("store")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/scripts/index.js",
          "/scripts/alpine.js",
          "/scripts/resize.min.js",
          "/scripts/fflate@0.8.2.js",
          "/styles/styles.min.css",
          "/favicon.ico",
          "/data.json",
          "/fonts/29LT Kaff Black.ttf",
          "/fonts/29LT Kaff Semibold.ttf",
          "/fonts/29LT Kaff Ultralight.ttf",
          "/fonts/29LT Kaff.ttf",
          "/fonts/OpenSans-CondensedBoldItalic.ttf",
          "/fonts/OpenSans-CondensedBold.ttf",
          "/fonts/OpenSans-CondensedExtraBoldItalic.ttf",
          "/fonts/OpenSans-CondensedExtraBold.ttf",
          "/fonts/OpenSans-CondensedItalic.ttf",
          "/fonts/OpenSans-CondensedLightItalic.ttf",
          "/fonts/OpenSans-CondensedLight.ttf",
          "/fonts/OpenSans-CondensedRegular.ttf",
          "/fonts/OpenSans-CondensedSemiBoldItalic.ttf",
          "/fonts/OpenSans-CondensedSemiBold.ttf",
          "/fonts/open-sans-latin-300-italic.ttf",
          "/fonts/open-sans-latin-300-normal.ttf",
          "/fonts/open-sans-latin-400-italic.ttf",
          "/fonts/open-sans-latin-400-normal.ttf",
          "/fonts/open-sans-latin-500-italic.ttf",
          "/fonts/open-sans-latin-500-normal.ttf",
          "/fonts/open-sans-latin-600-italic.ttf",
          "/fonts/open-sans-latin-600-normal.ttf",
          "/fonts/open-sans-latin-700-italic.ttf",
          "/fonts/open-sans-latin-700-normal.ttf",
          "/fonts/open-sans-latin-800-italic.ttf",
          "/fonts/open-sans-latin-800-normal.ttf",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
