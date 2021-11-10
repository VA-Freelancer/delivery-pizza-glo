const cartArray =  localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) :
    []
const addToCart = (cartItem) =>{
    if(cartArray.some((item)=>item.id === cartItem.id)){
        cartArray.map((item=>{
            if(item.id === cartItem.id){
                item.count++;
                item.sum = (item.count * item.price);
            }
            return item;
        }))
    }else {
        cartArray.push(cartItem);

    }
    // console.log(cartArray.length);
    localStorage.setItem('cart', JSON.stringify(cartArray));
}
export default addToCart;