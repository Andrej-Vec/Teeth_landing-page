"use strict"

const iconMenu = document.querySelector('.header__hamburger-menu');
if(iconMenu) {
     const menu = document.querySelector('.menu');
     iconMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
     })
}
