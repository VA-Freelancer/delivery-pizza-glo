


const sum = (cartArray) =>{
        const arraySum = []
        const reducer = (previousValue, currentValue) => previousValue + currentValue;

        cartArray.forEach((el, key, array) => {

                if(array.length > 0){
                        arraySum[key] = el.price*el.count;

                }
                return document.querySelector('.modal-pricetag').innerHTML = `${arraySum.reduce(reducer)} ₽`;
        })


}
export default sum;