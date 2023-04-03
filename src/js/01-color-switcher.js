const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.body;

// console.log(getRandomHexColor());

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtnEl.addEventListener('click', () => {
  const colorSwitch = setInterval(() => {
    startBtnEl.disabled = true;
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtnEl.addEventListener('click', () => {
  clearInterval(colorSwitch);
  startBtnEl.disabled = false;
});
