// Service Worker für bessere Performance
const CACHE_NAME = 'pregenero-v1'
const urlsToCache = [
  '/',
  '/services',
  '/portfolio',
  '/insights',
  '/contact',
  '/images/georgia-de-lotz-hdQGAz1pQ_M-unsplash.jpg'
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache)
      })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      }
    )
  )
})