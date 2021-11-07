// создаем переменную со значением категории в базе данных
import createElement from "./module/createElement.js";
import changeTitle from './module/changeTitle.js';


// получаем обертку для карточек в меню
const cardMenu = document.querySelector('.cards-menu');
// функционально обробатываем данные из базы(формат json)
const renderItems = (data) => {
    if(data.length > 0 ){
        data.forEach(({id, name, description, price, image})=>{
            const card = createElement('div', ['card']);

            card.dataset.id = id;
            const cardImage = createElement('img', ['card-image'],
                {
                    src: `${image}`,
                    alt: `${name}`,
                });
            const cardText = createElement('div', ['card-text'], );
            const cardHeading = createElement('div', ['card-heading']);
            const cardTitle = createElement('h3', ['card-title', 'card-title-reg'],{
                innerText: `${name}`
            });
            const cardInfo = createElement('div', ['card-info']);
            const ingredients = createElement('div', ['ingredients'],
                {
                    innerText: `${description}`
                });
            const cardButtons = createElement('div', ['card-buttons']);
            const buttonAddCart = createElement('div', ['button', 'button-primary', 'button-add-cart']);
            const buttonCardText = createElement('span', ['button-card-text'], {
                innerText: 'В корзину'
            });
            const buttonCartSvg = createElement('span', ['button-cart-svg']);
            const cardPriceBold = createElement('strong', ['card-price-bold'], {
                innerText: `${price}  ₽`
            });

            buttonAddCart.append(buttonCardText, buttonCartSvg );
            cardButtons.append(buttonAddCart, cardPriceBold );
            cardInfo.append(ingredients);
            cardHeading.append(cardTitle);
            cardText.append(cardHeading, cardInfo, cardButtons);
            card.append(cardImage, cardText);
            if(typeof cardMenu !== 'undefined'){
                cardMenu.append(card);
            }
        })
    }else{
        if(data){
            console.log("data", "не получает");
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