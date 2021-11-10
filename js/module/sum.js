
document.querySelector('.modal-pricetag').innerHTML = 0;

const sum = (operator, cartArray, cartItem) =>{

    if(operator === 'plus'){
        if(cartArray.some((item)=>item.id === cartItem.id)){
            cartArray.map((item=>{
                if(item.id === cartItem.id){
                    document.querySelector('.modal-pricetag').innerHTML
                    item.sum = (item.count * item.price);
                }
                return item;
            }))
        }else {
            cartArray.push(cartItem);

        }
    }
    cartArray.forEach((el, key, arr) =>{
        console.log(arr[key])
        localStorage.setItem('item-sum', sum);


    })
    // console.log(cartArray.length);
    localStorage.setItem('cart', JSON.stringify(cartArray));
}
export default sum;