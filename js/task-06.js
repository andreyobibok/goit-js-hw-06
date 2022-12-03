const myInput = document.querySelector('#validation-input');
console.log(myInput.dataset.length);

myInput.addEventListener('blur', () => {
    if (myInput.value.length == myInput.dataset.length) {
        myInput.className = '';
        myInput.classList.add('valid');
    }
    else {
        myInput.className = '';
        myInput.classList.add('invalid');
    }
})