console.log('this line is coming from service worker file')
console.log('this line is coming from service worker file')
console.log('I can now do stuff in the background - this happens in the back ground :)))')
console.log('I can now do stuff in the background - this happens in the back ground :)))')
console.log('I can now do stuff in the background - this happens in the back ground :)))')
console.log('this line is coming from service worker file')

fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });


// give your cache a name
const cacheName = 'my-cache';

// put the static assets and routes you want to cache here
const filesToCache = [
  '/',
  '/index.html',
  '/src/styles.css',
  '/src/definations.js',
  '/src/functions.js',
  '/src/index.js',
  '/src/localstorage.js',
  '404.html'
];

// the event handler for the activate event
self.addEventListener('activate', e => self.clients.claim());

// the event handler for the install event 
// typically used to cache assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});

// the fetch event handler, to intercept requests and serve all 
// static assets from the cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => response ? response : fetch(e.request))
  )
});