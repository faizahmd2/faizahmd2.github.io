const cacheName = "v1";
const cacneAssets = ["index.html", "/css/style.css", "/js/main.js"];

// call Install event
self.addEventListener("install", (event) => {
//   console.log("Service Worker : Installed", event);

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        // console.log("Service worker caching files", cache);
        cache.addAll(cacneAssets);
      })
      .then(() => self.skipWaiting())
      .catch((e) => {
        // console.log("Error caching files", e);
      })
  );
});

//call activate event
self.addEventListener("activate", (event) => {
//   console.log("Service Worker : Activated", event);
  //Remove unwanted caches

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            // console.log("Deleteing unwanted cache named", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//call fetch event
self.addEventListener("fetch", (e) => {
//   console.log("Service Worker fetching", e);
  e.respondWith(fetch(e.request).catch(() => catches.match(e.request)));
});
