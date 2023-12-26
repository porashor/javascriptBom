function show(){
    time = setTimeout(function(){
        document.querySelector('.newArea').innerHTML = "ki kvr sobar!";
    },3000)
}

function cleartime(){
    clearTimeout(time);
}




function intervelshow(){
    intervel = setInterval(function(){
        document.querySelector('.newArea1').innerHTML = new Date().toLocaleTimeString();
    }, 1000);
}

function stopintervel(){
    clearInterval(intervel);
}
