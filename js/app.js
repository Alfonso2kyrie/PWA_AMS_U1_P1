console.log('hola desde el js');
if(navigator.serviceWorker){
    console.log('prosige');
    navigator.serviceWorker.register('/sw.js')
}else{
    console.log('utiliza otro navegador');
}