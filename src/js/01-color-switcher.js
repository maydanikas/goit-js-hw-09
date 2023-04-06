const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.body;

let loopColorSwitch;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onStartColorChange = () => {
  loopColorSwitch = setInterval(() => {
    startBtnEl.disabled = true;
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const onStopColorChange = () => {
  clearInterval(loopColorSwitch);
  startBtnEl.disabled = false;
};

startBtnEl.addEventListener('click', onStartColorChange);
stopBtnEl.addEventListener('click', onStopColorChange);
