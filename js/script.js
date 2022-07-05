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

new Swiper('.swiper-doctors', {
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
   spaceBetween: 30,
    breakpoints : {
      0: {
         slidesPerView: 1
      },
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
const data = document.querySelectorAll('.slider-patients');
new Swiper('.patients-say', {
   navigation: {//стрелки
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   slidesPerView: 4,
   
   loop:true,//бесконечный слайдер
   /* spaceBetween: 50, */
  
});   







 


