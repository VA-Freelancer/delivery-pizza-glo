import createElement from './createElement.js'
const modalCart = document.querySelector('.modal-cart');
const modalBody = modalCart.querySelector('.modal-body');
const renderItems = (data) =>{
    modalBody.innerHTML = '';
    data.forEach(({name, price, id, count}) =>{
        const foodElem = createElement('div', ['food-row']);
        foodElem.innerHTML = `
        <span class="food-name">${name}</span>
            <strong class="food-price">${price} ₽</strong>
            <div class="food-counter">
                <button class="counter-button btn-dec">-</button>
                <span class="counter">${count}</span>
                <button class="counter-button btn-inc">+</button>
            </div>
        `;
        modalBody.append(foodElem);
    })

}
export default renderItems;