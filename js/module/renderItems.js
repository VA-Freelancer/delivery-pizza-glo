import createElement from './createElement.js'
import sumItem from "./sum.js";
const modalCart = document.querySelector('.modal-cart');
const modalBody = modalCart.querySelector('.modal-body');


const renderItems = (data) =>{
    sumItem(data);
    modalBody.innerHTML = '';
    if(data.length > 0){
    data.forEach(({id, name, price, image, count, sum, }) =>{
        const foodElem = createElement('div', ['food-row']);
        foodElem.innerHTML = `
            <div class="food-image"><img src="${image}" alt="${name}"></div>
            <span class="food-name">${name}</span>
            <strong class="food-price">${price*count} ₽</strong>
            <div class="food-counter">
                <button class="counter-button btn-dec" data-index="${id}">-</button>
                <span class="counter">${count}</span>
                <button class="counter-button btn-inc" data-index="${id}">+</button>
            </div>
        `;
        // const euros = [price];
        // const doubled = euros.reduce((total, amount) => {
        //     total.push(amount * count);
        //     return total;
        // }, []);
        // console.log(doubled)
        // document.querySelector('.modal-pricetag').innerHTML = sumEl(price)

        modalBody.append(foodElem);
    })
    }else{
        const foodElem = createElement('div', ['food-row']);
        modalBody.innerHTML = "Ваша корзина пуста"
    }
}

export default renderItems;