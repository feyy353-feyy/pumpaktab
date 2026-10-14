const CACHE_NAME = 'madin-app-v1.0';

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            // Jika ada di cache, keluarkan. Jika tidak, ambil dari internet (fetch).
            return response || fetch(e.request);
        })
    );
});