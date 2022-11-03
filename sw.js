self.addEventListener('install',(event)=>{
    console.log('SW:Instalado');
    caches.open("cache-v1").then((cache) =>{
        cache.addAll([
            '/',
            './index.html',
            './js/app.js',
            'https://reqres.in/api/users?page=2',
            'https://reqres.in/api/users',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
           'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'
        ])
    });

    event.waitUntil(respCache);
});

//Only Cache
self.addEventListener('fetch',(event)=>{
   const respCache = caches.match(event.request);
   event.respondWith(respCache);

})