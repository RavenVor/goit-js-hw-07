const inputRef = document.querySelector('#font-size-control');
inputRef.setAttribute('min', 10);
inputRef.setAttribute('max', 60);
inputRef.setAttribute('value', 20);

const spanTextRef = document.querySelector('#text');

inputRef.addEventListener('input', heandleInput);

function heandleInput(e) {
  return (spanTextRef.style.fontSize = e.target.value + 'px');
}
