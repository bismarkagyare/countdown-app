const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minutesCount = document.getElementById('minutes');
const secondsCount = document.getElementById('seconds');

const christmas = '25 Dec 2023';

const countdown = () => {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();

  const totalSeconds = (christmasDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysCount.textContent = days;
  hoursCount.textContent = formatTime(hours);
  minutesCount.textContent = formatTime(minutes);
  secondsCount.textContent = formatTime(seconds);
}

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);