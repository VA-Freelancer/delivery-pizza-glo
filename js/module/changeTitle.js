const changeTitle = (title, rating, price, category) =>{
    if(title){
        const restaurantTitle = document.querySelector('.restaurant-title');
        if(restaurantTitle){
            restaurantTitle.textContent = title
        }else{
            console.log('нет элемента')
        }
    }else{
        console.log('нет данных из переменной')
    }
    if(rating){
        const cardInfoRating = document.querySelector('.rating');
        if(cardInfoRating){
            cardInfoRating.textContent = rating
        }else{
            console.log('нет элемента')
        }
    }else{
        console.log('нет данных из переменной')
    }
    if(price){
        const cardInfoPrice = document.querySelector('.price');
        if(cardInfoPrice){
            cardInfoPrice.textContent = `От ${price} ₽`
        }else{
            console.log('нет элемента')
        }
    }else{
        console.log('нет данных из переменной')
    }
    if(category){
        const cardInfoCategory = document.querySelector('.category');
        if(cardInfoCategory){
            cardInfoCategory.textContent = category
        }else{
            console.log('нет элемента')
        }
    }else{
        console.log('нет данных из переменной')
    }

}

export default changeTitle;