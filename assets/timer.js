function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const second = Math.floor((total / 1000) % 60);
  const minute = Math.floor((total / 1000 / 60) % 60);
  const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
  const day = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    day,
    hour,
    minute,
    second,
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.day');
  const hoursSpan = clock.querySelector('.hour');
  const minutesSpan = clock.querySelector('.minute');
  const secondsSpan = clock.querySelector('.second');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.day;
    hoursSpan.innerHTML = ('0' + t.hour).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minute).slice(-2);
    secondsSpan.innerHTML = ('0' + t.second).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
