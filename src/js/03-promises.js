import Notiflix from 'notiflix';

const amountInput = document.querySelector('input[name="amount"]');
const delayStep = document.querySelector('input[name="step"]')
const firstDelay = document.querySelector('input[name="delay"]')
const form = document.querySelector('form')

form.addEventListener('click',(e)=>{
  e.preventDefault()
  makePromise(Number(amountInput.value),Number(firstDelay.value),Number(firstDelay.value))
})


function createPromise(i, time) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({i,time})
      } else {
        reject({i,time})
      }

  });

  }


function makePromise(position,delay,time) {
  let stepF = Number(delayStep.value)
  for (let i = 1; i <= position; i++) {


     setTimeout(()=>{ createPromise(i, time).then(({ i, time }) => {
       Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${time}ms`);
      })
        .catch(({ i, time }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${time}ms`);
        });
       time=time+stepF;
     },delay);
    delay=delay+stepF;
  }
}




