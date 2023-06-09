import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('[data-start]');
let deadline;
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    deadline = selectedDates[0];
    console.log(deadline);

    if (deadline <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtnEl.disabled = true;
      return;
    }
    startBtnEl.disabled = false;
  },
};

const timer = {
  start() {
    this.intervalId = setInterval(() => {
      const diff = deadline - Date.now();
      console.log('difference in ms is:', diff);
      if (diff <= 0) {
        this.stop();
        return;
      }

      let { days, hours, minutes, seconds } = this.getTimeComponents(diff);
      daysEl.textContent = this.pad(days);
      hoursEl.textContent = this.pad(hours);
      minutesEl.textContent = this.pad(minutes);
      secondsEl.textContent = this.pad(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    console.log('timer stopped');
  },

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  },

  pad(value) {
    return String(value).padStart(2, '0');
  },
};

startBtnEl.addEventListener('click', () => {
  console.log('OK');
  timer.start();
});

flatpickr('#datetime-picker', options);
