let navbar = document.querySelector('.header_nav');

document.querySelector(".header__checkbox").addEventListener("click", event => {
    if (event.target.checked) {
        navbar.classList.add('deployed');
        document.body.style.overflow = 'hidden';
    } else {
        navbar.classList.remove('deployed');
        document.body.style.overflow = 'auto';
    }
});