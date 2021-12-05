//console.log('SW: Hola mundo');
self.addEventListener('install', (event) => {
    console.log("SW: instalado");
});

self.addEventListener('activate', (event) => {
    console.log("SW: activado y controlando la app");
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url);
    if (event.request.url.includes('.jpg')) {

        let newResp = fetch('/images/cheemsFail.jpg');
        console.log("Es una imagen");
        event.respondWith(newResp);
    }


    if (event.request.url.includes('pages.css')) {

        let newResponse = new Response(`
        body{
            background-color: blue !important;
            color:  white !important;
        }`,
            {
                headers: {
                    'Content-Type': 'text/css'
                }
            });
        event.respondWith(newResponse);
    }
    
});