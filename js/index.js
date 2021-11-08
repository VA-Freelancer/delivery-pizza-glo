"use strict";
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