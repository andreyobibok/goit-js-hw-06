function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

button.addEventListener('click', () => {
  span.innerHTML = getRandomHexColor();
  body.style.backgroundColor = span.textContent;
})


// Returns span in rgb format :D
  // body.style.backgroundColor = getRandomHexColor();
  // span.innerHTML = body.style.backgroundColor;