// получаем моудуль
import createElement from './module/createElement.js';
import alertOut from './module/alertOut.js';
import openModal from "./module/openModal.js";

const cardsRestaurants = document.querySelector('.cards-restaurants');
// функционально обробатываем данные из базы(формат json)

// перебираем полученные данные
const renderItems = (data) => {
    // проверяем на количество элементов
    if(data.length > 0 ){
        data.forEach((item) => {{
            const {image, kitchen, name, price, products, stars, time_of_delivery} = item;
            const card = createElement('a', ['card', 'card-restaurant'], {
                href: 'restaurant.html'
            });
            card.dataset.products = products
            const img = createElement('img', ['card-image'], {src: `${image}`, alt: `${name}`,});
            const cardText = createElement('div', ['card-text'], );
            const cardHeading = createElement('div', ['card-heading'], );
            const cardTitle = createElement('h3', ['card-title'], {textContent: `${name}`});
            const cardTag = createElement('span', ['card-tag', 'tag'], {textContent: `${time_of_delivery} мин`});
            const cardInfo = createElement('div', ['card-info'], );
            const rating = createElement('div', ['rating'], {textContent: `${stars} `});
            const priceEl = createElement('div', ['price'], {textContent: `От ${price} ₽`});
            const category = createElement('div', ['category'], {textContent: `${kitchen} `});

            cardInfo.append(rating, priceEl, category)
            cardHeading.append(cardTitle, cardTag);
            cardText.append(cardHeading, cardInfo);
            card.append(img, cardText);
            cardsRestaurants.append(card);
            card.addEventListener('click', (e)=> {
                e.preventDefault();
                if(localStorage.getItem('user')){
                    localStorage.setItem('restaurant', JSON.stringify(item));
                    window.location.href = `./${e.currentTarget.attributes['href']['value']}`
                }else{
                    openModal()
                    alertOut()
                }
            });
        }})
    }else{
        // проверяем существование
        if(data){
            console.log(data);
        }
    }


}
// получаем данные из json
fetch('https://test-b0177-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data)=>{
        renderItems(data)
    })
    .catch((error)=>{
        console.log(error)
    })