// Service worker mínimo: guarda la app para que funcione sin conexión.
// Si cambias index.html, sube el número de VERSION para que se actualice en los móviles.
const VERSION = 'senda-v1';
const ARCHIVOS = ['./', './index.html', './manifest.json', './icono-192.png', './icono-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Primero red; si no hay, lo guardado. Así la app abre siempre,
// incluso sin cobertura, que es cuando más falta hace.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        const copia = r.clone();
        caches.open(VERSION).then(c => c.put(e.request, copia));
        return r;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
