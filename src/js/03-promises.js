import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const delayTime = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');
const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        console.log('resolve', position, delay);
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        console.log('reject', position, delay);
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delayFromEachOther);
  });
};

const createPromises = event => {
  event.preventDefault();
  let delay = parseInt(delayTime.value);
  const delayStep = parseInt(step.value);
  const promisesAmount = amount.value;
  delayFromEachOther = delay;
  let position = 1;
  const promisesHandler = delay =>
    createPromise(position++, delay)
      .then(value => {
        Notify.success(value);
      })
      .catch(error => {
        Notify.failure(error);
      })
      .finally(() => {
        delay = delay + delayStep;
        delayFromEachOther = delayStep;
        return position <= promisesAmount
          ? promisesHandler(delay)
          : console.log('finish');
      });
  promisesHandler(delay);
};

form.addEventListener('submit', createPromises);
