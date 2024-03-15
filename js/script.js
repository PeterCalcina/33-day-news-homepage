let menu__hamburguer__open = document.querySelector('.menu__hamburguer__open');
let menu__hamburguer__close = document.querySelector('.menu__hamburguer__close');
let header__nav = document.querySelector('.header__nav');

menu__hamburguer__open.classList.add('active');

menu__hamburguer__open.addEventListener('click', function() {
    menu__hamburguer__open.classList.remove('active');
    menu__hamburguer__close.classList.add('active');
    header__nav.classList.add('active');
});

menu__hamburguer__close.addEventListener('click', function() {
    menu__hamburguer__close.classList.remove('active');
    menu__hamburguer__open.classList.add('active');
    header__nav.classList.remove('active');
});

header__nav.addEventListener('click', function() {
    menu__hamburguer__close.classList.remove('active');
    menu__hamburguer__open.classList.add('active');
    header__nav.classList.remove('active');
});

function closeNav() {
    menu__hamburguer__close.classList.remove('active');
    menu__hamburguer__open.classList.add('active');
    header__nav.classList.remove('active');
}