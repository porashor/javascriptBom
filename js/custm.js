let width = document.querySelector('.width');
let height = document.querySelector('.height');
let  mywindow = window.open('https://www.google.com/');


function openFunction(){
    width.innerHTML = 'window width is : ' + window.innerWidth;
    height.innerHTML = 'window height is : ' + window.innerHeight;
}
function closeFunction(){
    width.innerHTML = '';
    height.innerHTML = '';
}


function open1(){
    mywindow = window.open('https://www.google.com/');
}
function close1(){
    mywindow.close();
}

close1()