import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

////////////Func declaration create promise instanse & randomise result//
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormElSubmit(event) {
  event.preventDefault();
  console.log('form submitted');
  ////////taking data from input form/////////////////////
  const delay = +event.target.elements.delay.value;
  console.log('delay is:', delay);
  const step = +event.target.elements.step.value;
  console.log('step is:', step);
  const amount = +event.target.elements.amount.value;
  console.log('amount is: ', amount);
  ///////loop creates instanses //////////////////////////
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

formEl.addEventListener('submit', onFormElSubmit);
