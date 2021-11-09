import closeModal from "./closeModal.js";
const resetCart = (parent) =>{
    const body = parent.querySelector(`.modal-body`);
    body.innerHTML = "<strong>Ваш заказ успешно принят ожидайте!</strong>";
    localStorage.removeItem('cart');
    setTimeout(()=>{closeModal(parent)}, 3000);
}
export default resetCart;