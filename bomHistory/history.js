let history1 = document.querySelector('.history1');
let history2 = document.querySelector('.history2');
let history3 = document.querySelector('.history3');
let history4 = document.querySelector('.history4');
let history5 = document.querySelector('.history5');
let history6 = document.querySelector('.history6');
let history7 = document.querySelector('.history7');
let history8 = document.querySelector('.history8');
let history9 = document.querySelector('.history9');
let history10 = document.querySelector('.history10');

function goback(){
    window.history.back();
}


history1.innerHTML = window.navigator.cookieEnabled;
history2.innerHTML = window.navigator.appCodeName;
history3.innerHTML = window.navigator.platform;
history4.innerHTML = window.navigator.appName;
history5.innerHTML = window.navigator.product;
history6.innerHTML = window.navigator.appVersion;
history7.innerHTML = window.navigator.userAgent;
history8.innerHTML = window.navigator.language;
history9.innerHTML = window.navigator.onLine;
history10.innerHTML = window.navigator.javaEnabled();