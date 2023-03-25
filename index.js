const ELEMENT_IDS = {
  DAYS : 'days',
  HOURS : 'hours',
  MINUTES : 'minutes',
  SECONDS : 'seconds'
};


const daysCount = document.getElementById(ELEMENT_IDS.DAYS);
const hoursCount = document.getElementById(ELEMENT_IDS.HOURS);
const minutesCount = document.getElementById(ELEMENT_IDS.MINUTES)
const secondsCount = document.getElementById(ELEMENT_IDS.SECONDS);

const christmas = '25 Dec 2023';

const calcuteTimeRemaining = (totalSeconds) => {
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  return {days, hours, minutes, seconds};
}

const countdown = () => {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();

  const totalSeconds = (christmasDate - currentDate) / 1000;
  const {days, hours, minutes, seconds} = calcuteTimeRemaining(totalSeconds);

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