const cartArray =  localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) :
    []
const addToCart = (cartItem) =>{
    if(cartArray.some((item)=>item.id === cartItem.id)){
        cartArray.map((item=>{
            if(item.id === cartItem.id){
                item.count++;
            }
            return item;
        }))
        console.log('уже есть')
    }else {
        cartArray.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cartArray))
}
export default addToCart;