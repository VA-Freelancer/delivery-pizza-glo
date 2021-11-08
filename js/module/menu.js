// получаем моудуль
import createElement from './createElement.js';
import changeTitle from './changeTitle.js';
import addToCart from './addToCart.js';

const menu = () =>{
    const cardMenu = document.querySelector('.cards-menu');
// функционально обробатываем данные из базы(формат json)

    const renderItems = (data) => {
        if(data.length > 0 ){
            data.forEach(({id, name, description, price, image})=>{
                const card = createElement('div', ['card'])
                card.dataset.id = id;
                card.innerHTML = `
                    <img src="${image}" alt="${name}" class="card-image" />
                    <div class="card-text">
                        <div class="card-heading">
                        <h3 class="card-title card-title-reg">Пицца Везувий</h3>
                    </div>
                    <div class="card-info">
                        <div class="ingredients">
                        ${description}
                        </div>
                    </div>
                    <div class="card-buttons">
                            <button class="button button-primary button-add-cart">
                                <span class="button-card-text">В корзину</span>
                                <span class="button-cart-svg"></span>
                            </button>
                            <strong class="card-price-bold">${price} ₽</strong>
                        </div>
                    </div>
                `;
                card.querySelector('.button-card-text').addEventListener('click', ()=>{
                    addToCart({id, name, price, count: 1 });
                })
                cardMenu.append(card);
            })
        }else{
            if(data){
                console.log(data);
            }
        }
    }
// проверяем на доступность localstorage данных переменной, если есть парсим
// проверяем на существование в локальном хранилище данные
    if(localStorage.getItem('restaurant')){
        // проверяем на существование в локальном хранилище текста об отсутствие данных при заходе на страницу меню
        if(localStorage.getItem('empty-element')){
            // если есть удаляем его
            localStorage.removeItem('empty-element');
        }

        const restaurant = JSON.parse(localStorage.getItem('restaurant'))
        // функция из импорта меняет текст в тайтде, всего 4 значения, если нужно пропустить ставим false и если перменная получает false или подобное значение
        changeTitle(restaurant.name, restaurant.stars, restaurant.price, restaurant.kitchen)
        // получаем тестовые данные из firebase.google.com
        fetch(`https://test-b0177-default-rtdb.firebaseio.com/db/${restaurant.products}`)
            .then((response) => response.json())
            .then((data)=>{
                renderItems(data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }else {
        // закидываем сообщение об отсутствие данных
        localStorage.setItem('empty-element', 'данные из базы отстутствуют для выгрузки элементов');
        window.location.href = './';
    }
}
export default menu;
