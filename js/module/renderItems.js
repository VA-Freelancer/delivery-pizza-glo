import createElement from './createElement.js'
const modalCart = document.querySelector('.modal-cart');
const modalBody = modalCart.querySelector('.modal-body');


const renderItems = (data) =>{
    modalBody.innerHTML = '';
    data.forEach(({name, price, id, count}) =>{
        const foodElem = createElement('div', ['food-row']);
        foodElem.innerHTML = `
        <span class="food-name">${name}</span>
            <strong class="food-price">${price*count} ₽</strong>
            <div class="food-counter">
                <button class="counter-button btn-dec" data-index="${id}">-</button>
                <span class="counter">${count}</span>
                <button class="counter-button btn-inc" data-index="${id}">+</button>
            </div>
        `;
        const euros = [price];
        const doubled = euros.reduce((total, amount) => {
            total.push(amount * count);
            return total;
        }, []);
        console.log(doubled)
        // document.querySelector('.modal-pricetag').innerHTML = sumEl(price)

        modalBody.append(foodElem);
    })

}

export default renderItems;