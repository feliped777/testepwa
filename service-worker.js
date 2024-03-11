self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('calculadora-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/style.css',
        '/script.js',
        '/icon.png' // Adicione todos os arquivos que deseja serem armazenados em cache
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
