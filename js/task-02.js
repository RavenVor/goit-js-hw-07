const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createElement = item => {
  const listItemRef = document.createElement('li');

  listItemRef.textContent = item;
  return listItemRef;
};

const listItemArr = ingredients.map(ingredient => createElement(ingredient));

const ingredientsListRef = document.querySelector('#ingredients');

ingredientsListRef.append(...listItemArr);
