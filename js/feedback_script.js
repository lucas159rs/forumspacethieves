const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    const email = document.getElementById('email');
    const user_email = email.value.substring(0, email.value.indexOf('@'));
    const domain_email = email.value.substring(email.value.indexOf('@') + 1, email.value.length);
    const feedback = document.getElementById('feedback');

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

    if (feedback.value == "") {
        event.preventDefault();
        feedback.classList.add('error-input');
    } else {
        feedback.classList.remove('error-input');
    }
})