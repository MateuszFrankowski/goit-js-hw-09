import { Notify } from 'notiflix/build/notiflix-notify-aio';
const btnPromises = document.querySelector('button');
const form = document.querySelector('form');
const delayTime = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

const createPromise = ({ position, delay }) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const createPromises = event => {
  event.preventDefault();
  btnPromises.disabled = true;
  const DELAY = parseInt(delayTime.value);
  const DELAYSTEP = parseInt(step.value);
  const promisesAmount = parseInt(amount.value);

  const promises = [];
  for (let i = 0; i < promisesAmount; i++) {
    promises.push(
      createPromise({ position: i + 1, delay: DELAY + i * DELAYSTEP })
        .then(value => {
          Notify.success(
            `✅ Fulfilled promise ${value.position} in ${value.delay}ms`
          );
        })
        .catch(error => {
          Notify.failure(
            `❌ Rejected promise ${error.position} in ${error.delay}ms`
          );
        })
    );
  }
  Promise.allSettled(promises).then(() => (btnPromises.disabled = false));
};

form.addEventListener('submit', createPromises);
