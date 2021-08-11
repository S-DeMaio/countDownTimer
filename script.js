const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2022';

function countDown(){
    const NewYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (NewYearsDate - currentDate) / 1000; 

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60)  % 60;
    const seconds = Math.floor(totalSeconds % 60); 

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//init call 
countDown();
setInterval(countDown, 1000);