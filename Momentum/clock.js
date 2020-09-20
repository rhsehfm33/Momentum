const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getPrettyTime(time)
{
    return time < 10 ? `0${time}` : time;
}

function getTime() {
    const date = new Date();
    const minutes = getPrettyTime(date.getMinutes());
    const hours = getPrettyTime(date.getHours());
    const seconds = getPrettyTime(date.getSeconds());
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();