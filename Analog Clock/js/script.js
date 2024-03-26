const hours = document.querySelector('.hrs');
const minutes = document.querySelector('.min');
const secondes = document.querySelector('.sec');

setInterval(runClock,1000);
function runClock(){
    let time = new Date();
    let sec = time.getSeconds()/60;
    let min = (sec+time.getMinutes())/60;
    let hrs = (min+time.getHours())/12;

    hours.style.setProperty('--rotation',hrs*360);
    minutes.style.setProperty('--rotation',min*360);
    secondes.style.setProperty('--rotation',sec*360);
}
