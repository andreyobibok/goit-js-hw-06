const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.email.value === "" || form.password.value === "") {
        alert('Заповніть усі поля')
    }
    const userDetails = { email: form.email.value, password: form.password.value }
    console.log(userDetails);
    event.currentTarget.reset();
});