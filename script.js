
// Initialisation des variables 
let time = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let heures = document.querySelector('.hours');
let minutess = document.querySelector('.minutes');
let secondes = document.querySelector('.seconds')

let demarrage = null;
// Fonction d'affichage du temps
function showTime(time){
     hours = Math.floor(time / 3600) ;
     minutes = Math.floor((time % 3600) / 60 );
     seconds = time % 60;
     
     
     if (hours < 10){
         hours = "0" + hours;
     }

     if (minutes < 10){
        minutes = "0" + minutes;
    }

    if (seconds < 10){
        seconds = "0" + seconds;
    }

    heures.innerText = hours;
    minutess.textContent = minutes;
    secondes.textContent = seconds;

}

showTime(0);
function incrementTime(){
    time += 1;
    showTime(time);
}



start.addEventListener('click', function(){
           start.disabled = "true";
           demarrage =  setInterval(incrementTime,1000);
           
    
});

stop.addEventListener('click', function(){
    start.disabled = false;
    clearInterval(demarrage);
});

reset.addEventListener('click', function(){
    start.disabled = false;
    time =0;
    showTime(0);
    clearInterval(demarrage);
})