
let url = window.location.href
let swDirect = "/PWA_AMS_U1_P1/sw.js"
let rickFlag = false

if(navigator.serviceWorker){
    console.log("Muy bien");
    if(url.includes('localhost')){
        swDirect = "/sw.js"
    }
    navigator.serviceWorker.register(swDirect)
}else{
    console.log("Nada bien")
}