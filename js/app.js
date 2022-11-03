
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js');
}




// if(window.caches){
//     console.log("Soporte Cache");
//     caches.open("cache1");
//     caches.open("cache2");
//     caches.open("cache3");
//     caches.open("cache4");


//     caches.keys().then((keys)=>{
//         console.log(keys);
//     });
//     caches.has("cache2").then((resp)=>{
//         console.log('has', resp);
//     });
//     caches.delete("cache4");

//     caches.open("cache1").then((cache)=>{
//         //cache.add('/index.html');
//         //cache.add('/css/style.cs');
//         cache.addAll(
//             [
//                 '/index.html',
//                 "/css/style.cs",
//                 "/images/img.jpg"
//             ]
//             ).then(()=>{
//                 caches.delete("/css/style.cs");
//             });

//             cache.match('index.html').then((resp)=>{
//                 resp.text().then((text)=>{
//                     console.log(text);
//             })
//         });
//     });
// }
