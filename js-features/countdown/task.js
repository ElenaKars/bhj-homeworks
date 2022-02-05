const intervalId = setInterval(updateCountdown, 1000);

const hoursEl = document.getElementById("hh");
const minutesEl = document.getElementById("mm");
const secondsEl = document.getElementById("ss");

function updateCountdown() {
  const hours = +hoursEl.textContent;
  const minutes = +minutesEl.textContent;
  const seconds = +secondsEl.textContent;

  const totalSeconds = seconds + minutes * 60 + hours * 60 * 60;

  if (totalSeconds === 0) {
    alert("Время вышло!");
    clearInterval(intervalId);

    return;
  }

  const newTotalSeconds = totalSeconds - 1;

  const { hh, mm, ss } = getTime(newTotalSeconds);

  hoursEl.textContent = hh;
  minutesEl.textContent = mm;
  secondsEl.textContent = ss;
}

function getTime(seconds) {
  const hh = Math.trunc(seconds / (60 * 60));
  const hhInSec = hh * 60 * 60;

  const mm = Math.trunc((seconds - hhInSec) / 60);
  const mmInSec = mm * 60;

  const ss = seconds - (hhInSec + mmInSec);

  return {
    hh: leadingZero(hh),
    mm: leadingZero(mm),
    ss: leadingZero(ss)
  };
}

function leadingZero(number) {
  const result = String(number);

  if (result.length === 1) {
    return "0" + result;
  }

  return result;
}
