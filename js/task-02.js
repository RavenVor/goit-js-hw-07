const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListRef = document.querySelector('#ingredients');

const createElement = item => {
  const listItemRef = document.createElement('li');

  listItemRef.textContent = item;
  ingredientsListRef.appendChild(listItemRef);
};

ingredients.forEach(element => {
  createElement(element);
});
console.log(ingredientsListRef);
