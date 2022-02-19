const cacheName = "v2";

// call Install event
self.addEventListener("install", (event) => {
//   console.log("Service Worker : Installed", event);
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
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        //make a copy/clone of server response
        let resClone = res.clone();
        //open cache
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
