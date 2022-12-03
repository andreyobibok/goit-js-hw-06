const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.email.value === "" || form.password.value === "") {
        alert('Заповніть усі поля')
    }
});