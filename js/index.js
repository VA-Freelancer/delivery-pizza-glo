"use strict";
import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';
import 'https://kit.fontawesome.com/6e3ef981cb.js';
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    horizontal: 'horizontal',
    effect: 'flip',
    grabCursor: true,
    on: {
        init: function () {
            console.log('swiper initialized');
        },
    }
})
import auth from './module/auth.js'
import partners from './module/partners.js'
import menu from './module/menu.js'
import cart from './module/cart.js'
const currentHref = location.pathname.replace(/\/delivery-pizza-glo\/|.html/gi, '')


// подключаем авторизацию
auth();
if (currentHref === '' || currentHref === 'index') {
    partners();
    if(localStorage.getItem('restaurant')){
        localStorage.removeItem('restaurant');
    }
}else if(currentHref !== '' && currentHref !== 'index' && currentHref === 'restaurant'){
    menu();
}
// подключаем корзину
cart();