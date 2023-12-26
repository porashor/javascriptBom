function showAlert(){
    window.alert('You make a mistake!')
}


function showConfarm(){
    if(window.confirm()){
        document.querySelector(".confarm").innerHTML = 'You press Okay!'
    }else{
        document.querySelector(".confarm").innerHTML = 'You press Cencel!'
    }
}


function showPrompt(){
   let a = window.prompt('Type Your Name', 'Abul Miya');

   if(a === null || a === ''){
    document.querySelector('.prompt').innerHTML = 'person cancel the prompt'
    }else{
    document.querySelector('.prompt').innerHTML = `hello ${a}! How are you?`
   }
}