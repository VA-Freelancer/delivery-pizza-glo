// закрытие модального окна
const closeModal = (modal) =>{
    modal.classList.remove('is-open')
    document.body.classList.remove("_lock", '_fixed-modal');
    document.documentElement.classList.remove('_fixed-modal');
}
export default closeModal;