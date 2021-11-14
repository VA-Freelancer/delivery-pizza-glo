import renderItems from "./renderItems.js";
import closeModal from "./closeModal.js";
import sumItem from "./sum.js";

const countItem = (modalCart) =>{
    const modalBody = modalCart.querySelector('.modal-body');

    modalBody.addEventListener('click', (e)=>{
        e.preventDefault()
    const cartArray =  localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) :
        []
    let newCartArray;
    if(cartArray.length){
        cartArray.map((item) => {
            if(item.id === e.target.dataset.index){

                if(e.target.closest('.btn-inc')){
                    item.count++;
                    sumItem(cartArray);
                }
                if(e.target.closest('.btn-dec')){
                    item.count = item.count > 0 ? item.count - 1 : 0;
                    sumItem(cartArray);
                    if(item.count === 0){
                        newCartArray = cartArray.indexOf(item);
                        console.log(cartArray)

                    }
                }

            }
            return item;
        })
    }
        if(cartArray.some((item)=>item.count === 0)){
            cartArray.splice(newCartArray, 1)

            localStorage.setItem('cart', JSON.stringify(cartArray));
            sumItem(cartArray);
        }
        if(cartArray.length === 0)
            {sumItem(cartArray);
            localStorage.removeItem('cart');
            closeModal(modalCart)
            window.location.href = `${window.location.href}`;
        }else{
            sumItem(cartArray);
            localStorage.setItem('cart', JSON.stringify(cartArray));
            renderItems(cartArray);
        }
    })
}
export default countItem;