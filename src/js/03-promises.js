import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
const form = document.querySelector('form');
const delayTime = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};

const createPromises = event => {
  event.preventDefault();
  let delay = delayTime.value;
  const delayStep = step.value;
  const promisesAmount = amount.value;
  for (let i = 0; i < promisesAmount; i++) {
    position = i + 1;
    createPromise(position, delay)
      .then(value => {
        Notify.success(value);
      })
      .catch(error => {
        Notify.failure(error);
      });
    delay = delay + delayStep;
  }
};
form.addEventListener('submit', createPromises);
