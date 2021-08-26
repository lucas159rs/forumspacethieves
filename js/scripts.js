const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
})

function link_download() {
    confirm('Fazer o download de Space Thieves?');
}

function login_page() {
    window.location.href = "login_page.html"
}

function cadastro_page() {
    window.location.href = "cadastro_page.html";
}