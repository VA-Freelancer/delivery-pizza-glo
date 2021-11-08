import openModal from './openModal.js'
import closeModal from './closeModal.js'
import renderItems from './renderItems.js'

const cart = ()=>{
const  cartButton = document.getElementById('cart-button');
const modalCart = document.querySelector('.modal-cart');
    cartButton.addEventListener('click', (e)=>{
        if(localStorage.getItem('cart')){
            renderItems(JSON.parse(localStorage.getItem('cart')));
        }
        openModal(modalCart);
    })
    modalCart.addEventListener('click', (e)=>{
        // делегируем событие кнопки с крестиком и проверяем на клик вне формы
        if(e.target.closest('.close')  || !e.target.closest('.modal-dialog')){
            closeModal(modalCart);
        }

    })
}
export default cart;