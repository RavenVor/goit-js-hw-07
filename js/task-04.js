let counterValue = 0;
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);
const counterSpanRef = document.querySelector('#value');

const setTextContent = () => {
  counterSpanRef.textContent = counterValue;
};

const onBtnIncrement = () => {
  counterValue += 1;

  setTextContent();
};

function onBtnDecrement() {
  if (counterValue > 0) {
    counterValue -= 1;
  }

  setTextContent();
}

incrementBtnRef.addEventListener('click', onBtnIncrement);
decrementBtnRef.addEventListener('click', onBtnDecrement);
