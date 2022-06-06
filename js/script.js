// "use strict"

const iconMenu = document.querySelector('.header__hamburger-menu');
if (iconMenu) {
   const menu = document.querySelector('.menu');
   iconMenu.addEventListener('click', () => {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menu.classList.toggle('_active');
   })
}

// const swiper = new Swiper('.swiper', {
//    speed: 400,
//    spaceBetween: 100,
//  });

new Swiper('.swiper', {
   navigation: {//стрелки
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {//навигация: булеты, текущее положение
      el: '.swiper-pagination',
      //булеты
      type: 'bullets',
      clickable: true,//
      dynamicBullets: true,
   },
   simulateTouch: false,//перетаскивания слайда на пк
   slidesPerView: 4,
   loop:true,//бесконечный слайдер
   spaceBerween: 30,

    breakpoints : {
      320: {
         slidesPerView: 1
      },
      693: {
         slidesPerView: 2
      },
      767: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
      1239: {
         slidesPerView: 4
      }
   } 
});  

new Swiper('.patients__swiper', {
   navigation: {//стрелки
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {//навигация: булеты, текущее положение
      el: '.swiper-pagination',
      //булеты
      type: 'bullets',
      clickable: true,//
      dynamicBullets: true,
   },
   simulateTouch: false,//перетаскивания слайда на пк
   slidesPerView: 1,
   loop:true,//бесконечный слайдер
   spaceBerween: 30,

   
});  



"use strict";

const obg = {get x() {return 17;}};
obg.x = 5;
console.log(++obg.x);
