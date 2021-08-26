const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    const email = document.getElementById('email');
    const user_email = email.value.substring(0, email.value.indexOf('@'));
    const domain_email = email.value.substring(email.value.indexOf('@') + 1, email.value.length);
    const password = document.getElementById('password');

    if (user_email.length >= 1 && domain_email.length >= 3 &&
        user_email.search("@") == -1 && domain_email.search("@") == -1 &&
        user_email.search(" ") == -1 && domain_email.search(" ") == -1 &&
        domain_email.search(".") != -1 && domain_email.indexOf(".") >= 1 &&
        domain_email.lastIndexOf(".") < domain_email.length - 1) {
        email.classList.remove('error-input');
    } else {
        event.preventDefault();
        email.classList.add('error-input');
    }

    if (password.value.length != 7) {
        event.preventDefault();
        password.classList.add('error-input');
    } else {
        password.classList.remove('error-input');
    }
})