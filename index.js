const startWatchBtn = document.querySelector('.start-watch');
const stopWatchBtn = document.querySelector('.stop-watch');
const resetWatchBtn = document.querySelector('.reset-watch');
const time = document.querySelector('h2');
let fimtosSecond = 0, second = 0, minute = 0, hour = 0, timer, isWorking;

const startSecondWatch = () => {
    fimtosSecond++;
    if (fimtosSecond == 90) {
        fimtosSecond = 0;
        second++;
        time.querySelector('.seconds').textContent = second < 10 ? `0${second}` : second;
    }
    time.querySelector('.time').textContent = fimtosSecond < 10 ? `0${fimtosSecond}` : `${fimtosSecond}`;

}

const startMinuteWatch = () => {
    if (second == 60) {
        second = 0;
        minute++;
        time.querySelector('.minute').textContent = minute < 10 ? `0${minute}` : minute;
    }
}

const startHourWatch = () => {
    if (minute == 60) {
        minute = 0;
        hour++;
        time.querySelector('.hour').textContent = hour < 10 ? `0${hour}` : hour;
    }
}

const startWatch = () => {
    timer = setInterval(() => {
        startSecondWatch()
        startMinuteWatch()
        startHourWatch()
    }, 30)
}



const resetWatch = () => {
    hour = fimtosSecond = second = minute = '00';
    time.innerHTML = `
    <span class="hour">${hour}</span> : <span class="minute">${minute}</span> :
    <span class="seconds">${second}</span> : <span class="time">${fimtosSecond}</span>`;
    document.querySelector('.watch').append(time);

    clearInterval(timer)
}

const stopWatch = () => {
    clearInterval(timer)
}

resetWatchBtn.addEventListener('click', resetWatch)
startWatchBtn.addEventListener('click', startWatch)
stopWatchBtn.addEventListener('click', stopWatch)