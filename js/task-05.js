const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const onChangeOutput = event => {
  outputRef.textContent = event.target.value || 'незнакомец';
};

// function onChangeOutput(e) {
//   if (e.target.value) {
//     return (outputRef.textContent = e.target.value);
//   }

//   outputRef.textContent = 'незнакомец';
// }

// const onChangeOutput = function (e) {
//   outputRef.textContent = e.target.value ? e.target.value : 'незнакомец';
// };

inputRef.addEventListener('input', onChangeOutput);
