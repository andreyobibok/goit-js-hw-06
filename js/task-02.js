const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const item = ingredients.map(value => `<li class="item">${value}</li>`).join("");
list.insertAdjacentHTML('beforeend', item);

// ingredients.forEach(element => {
//   const item = document.createElement('li');
//   item.textContent = element;
//   item.classList.add('item');
//   list.append(item);
// });