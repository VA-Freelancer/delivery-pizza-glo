import openModal from './openModal.js'
import closeModal from './closeModal.js'
import renderItems from './renderItems.js'
import countItem from "./countItem.js";
import resetCart from "./resetCart.js";

const cart = ()=>{
const modalCart = document.querySelector('.modal-cart');
const cartButton = document.getElementById('cart-button');
const buttonSend = modalCart.querySelector('.button-send');


    cartButton.addEventListener('click', (e)=>{
        if(localStorage.getItem('cart')){
            renderItems(JSON.parse(localStorage.getItem('cart')));
        }
        openModal(modalCart);
    })
    buttonSend.addEventListener('click', (e)=>{
        const cartArray = localStorage.getItem('cart');

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: cartArray
        })
            .then(response => {
                if(response.ok){
                    console.log('ok');
                    resetCart(modalCart)
                }
            })
            .catch(e =>{
                console.error(e)
            })
    })
    modalCart.addEventListener('click', (e)=>{
        e.preventDefault()
        // делегируем событие кнопки с крестиком и проверяем на клик вне формы
        if(e.target.closest('.close') || e.target.classList.contains('modal') && !e.target.classList.contains('.modal-dialog')){
            closeModal(modalCart);
        }

    })
    countItem(modalCart)

}
export default cart