const сategoriesListRef = document.querySelectorAll('.item');
console.log(`В списке ${сategoriesListRef.length} категории`);

сategoriesListRef.forEach(item => {
  const nameOfCategory = item.firstElementChild.textContent;
  console.log(`Категория: ${nameOfCategory}`);
  const amountOfElements = item.lastElementChild.children.length;
  console.log(`количество елементов: ${amountOfElements}`);
});
