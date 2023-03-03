import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]')
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')






startBtn.setAttribute('disabled',true)
let inputTime ;


flatpickr("#datetime-picker",{
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputTime = selectedDates[0].getTime();
    if(inputTime - Date.now()<0){
      Notiflix.Notify.failure("Please choose a date in the future");
    }
    else {
      startBtn.removeAttribute('disabled')
    }

    startBtn.addEventListener('click',()=>{
        // function start(){
        let timeId = setInterval(()=>{

          let k = convertMs(inputTime-Date.now())
          let b = addLeadingZero(k)
          console.log(b)
          console.log(k)
          if(k.seconds==0&&k.minutes==0&&k.days==0&&k.hours==0){
            clearInterval(timeId);
          }
          days.innerHTML = k.days
          hours.innerHTML = k.hours
          minutes.innerHTML = k.minutes
          seconds.innerHTML = k.seconds


        },1000)
      }
    )
  },
})


function addLeadingZero(value){
  return String(value).padStart(2,'0')
}

  function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


