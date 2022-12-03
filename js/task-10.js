function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  let width = 20;
  let height = 20;
  for (let i = 1; i <= input.value; i += 1) {
    width += 10;
    height += 10;
    const box = document.createElement('div');
    box.setAttribute('style', `background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px`);
    boxes.append(box);
  }
})

destroyButton.addEventListener('click', () => {
    boxes.innerHTML = "";
})

