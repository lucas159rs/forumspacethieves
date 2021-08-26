const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const user_email = email.value.substring(0, email.value.indexOf('@'));
    const domain_email = email.value.substring(email.value.indexOf('@') + 1, email.value.length);
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');

    if (name.value == "" || name.value.indexOf(' ') < 3) {
        event.preventDefault();
        name.classList.add('error-input');
    } else {
        name.classList.remove('error-input');
    }

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

    if (passwordConfirm.value != password.value || passwordConfirm.value.length != 7) {
        event.preventDefault();
        passwordConfirm.classList.add('error-input');
    } else {
        passwordConfirm.classList.remove('error-input');
    }
})