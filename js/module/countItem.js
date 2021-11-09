import renderItems from "./renderItems.js";



const countItem = (modalCart) =>{
    const modalBody = modalCart.querySelector('.modal-body');

    modalBody.addEventListener('click', (e)=>{
        e.preventDefault()
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    let newCartArray;

    cartArray.map((item) => {
        if(item.id === e.target.dataset.index){

                if(e.target.closest('.btn-inc')){
                    item.count++;
                    console.log(item.count, item.price)
                }
                if(e.target.closest('.btn-dec')){
                    item.count = item.count > 0 ? item.count - 1 : 0;
                    if(item.count === 0){
                        newCartArray = cartArray.indexOf(item)
                    }
                }

        }
        return item;
    })

        localStorage.setItem('cart', JSON.stringify(cartArray))

        renderItems(cartArray);

    })
}
export default countItem;