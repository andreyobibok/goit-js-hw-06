const myInput = document.querySelector('#validation-input');
console.log(myInput.dataset.length);

myInput.addEventListener('blur', () => {
    if (myInput.value.length != myInput.dataset.length) {
        myInput.classList.add('invalid');
    }
    else {
        myInput.classList.replace('invalid', 'valid');
    }
})