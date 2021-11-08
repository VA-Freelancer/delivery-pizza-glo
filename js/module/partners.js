// получаем моудуль
import createElement from './createElement.js';
import openModal from "./openModal.js";
import alertOut from './alertOut.js';

const partners = () =>{
    const cardsRestaurants = document.querySelector('.cards-restaurants');
    // функционально обробатываем данные из базы(формат json)
    // перебираем полученные данные
    const renderItems = (data) => {
        // проверяем на количество элементов
        if(data.length > 0 ){
            data.forEach((item ) => {{
                const {image, kitchen, name, price, products, stars, time_of_delivery} = item;
                const card = createElement('a', ['card', 'card-restaurant'], {
                    href: 'restaurant.html'
                })
                card.dataset.products = products
                card.innerHTML = `
                    <img src="${image}" alt="${name}" class="card-image" />
                    <div class="card-text">
                         <div class="card-heading">
                            <h3 class="card-title">${name}</h3>
                            <span class="card-tag tag">${time_of_delivery} мин</span>
                        </div>
                        <div class="card-info">
                            <div class="rating">
                                ${stars}
                            </div>
                            <div class="price">От ${price} ₽</div>
                            <div class="category">${kitchen}</div>
                        </div>
                    </div>
            `;

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
            }});
        }else{
            // проверяем существование
            if(data){
                console.log('data', "One element || not element");
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
}
export default partners;
