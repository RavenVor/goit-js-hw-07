const inputRef = document.querySelector('#validation-input');
// const inputAttributeValue = +inputRef.getAttribute('data-length');
const inputAttributeValue = +inputRef.dataset['length'];

const onInputValue = e => {
  const inputValuelength = e.target.value.length;

  inputRef.classList.add('invalid');

  if (inputValuelength === inputAttributeValue) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }

  if (
    inputValuelength !== inputAttributeValue &&
    inputRef.classList.contains('valid')
  ) {
    inputRef.classList.remove('valid');
  }

  if (!inputValuelength) {
    inputRef.classList.remove('invalid');
  }
};

inputRef.addEventListener('input', onInputValue);
