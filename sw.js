// Un Service Worker básico para cumplir con los requisitos de la PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Se deja vacío, pero es obligatorio que el evento 'fetch' exista 
  // para que Chrome lance la ventana de instalación.
});