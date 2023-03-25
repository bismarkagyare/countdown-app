const christmas = '25 Dec 2023';

const countdown = () => {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();

  const totalSeconds = (christmasDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  console.log(days, hours, minutes, seconds); 
}

countdown();

//setInterval(countdown, 1000);