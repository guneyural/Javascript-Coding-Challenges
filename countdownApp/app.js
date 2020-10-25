const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const startCounter = () => {
     let now = new Date().getTime();
     let countDownDate = new Date("01/01/2021").getTime();
     let timeleft = countDownDate - now;
     
     let day = Math.floor(timeleft / (1000 * 60 * 60 * 24));
     let hour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minute = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
     let second = Math.floor((timeleft % (1000 * 60)) / 1000);

     days.innerHTML = day;
     hours.innerHTML = hour; 
     minutes.innerHTML = minute; 
     seconds.innerHTML = second;
}
startCounter();
setInterval(startCounter, 1000);