

const arraySum = []
const reducer = (previousValue, currentValue) => previousValue + currentValue;
const sum = (cartArray) =>{
        console.log(cartArray)
        cartArray.forEach((el, key, array) => {
                if(array.length > 0){
                        arraySum[key] = el.price*el.count;
                        console.log(arraySum.reduce(reducer));

                }
                return document.querySelector('.modal-pricetag').innerHTML = `${arraySum.reduce(reducer)} ₽`;
        })


}
export default sum;