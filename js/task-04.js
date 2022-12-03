let counterValue = 0;
const initialValue = document.querySelector('#value');

const minus = document.querySelector('button[data-action="decrement"]');
const plus = document.querySelector('button[data-action="increment"]');

const incrementClick = () => {
    counterValue += 1;
    initialValue.innerHTML = counterValue;
}

const decrementClick = () => {
    counterValue = counterValue - 1;
    initialValue.innerHTML = counterValue;
}

minus.addEventListener("click", decrementClick);
plus.addEventListener("click", incrementClick);

