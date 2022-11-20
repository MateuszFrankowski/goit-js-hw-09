// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  console.log(days, hours, minutes, seconds);
  return { days, hours, minutes, seconds };
}
const addLeadingZero = value => {
  formattedValue = value.toString().padStart(2, '0');
  return formattedValue;
};
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const actualDateChose = new Date();
    if (selectedDates[0].getTime() <= actualDateChose.getTime())
      return alert('wybierz date z przyszlosci');
    btnStart.disabled = false;
  },
};
const calendars = flatpickr('#datetime-picker', options);
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('.value[data-days]');
const hours = document.querySelector('.value[data-hours]');
const minutes = document.querySelector('.value[data-minutes]');
const seconds = document.querySelector('.value[data-seconds]');
const countdownTimer = finishDate => {
  let actualDate = new Date();
  let finishTime = finishDate.getTime();
  let timeDifference = finishTime - actualDate;
  const timeLeft = convertMs(timeDifference);
  days.textContent = addLeadingZero(timeLeft.days);
  hours.textContent = addLeadingZero(timeLeft.hours);
  minutes.textContent = addLeadingZero(timeLeft.minutes);
  seconds.textContent = addLeadingZero(timeLeft.seconds);
};
const catchTheTime = () => {
  btnStart.disabled = true;
  const finishDate = calendars.selectedDates[0];
  const timerId = setInterval(countdownTimer, 1000, finishDate);
};
btnStart.addEventListener('click', catchTheTime);
btnStart.disabled = true;
