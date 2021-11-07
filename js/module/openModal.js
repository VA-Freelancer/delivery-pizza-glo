// закрытие модального окна
const openModal = (modal = document.querySelector('.modal-auth')) =>{
    if(modal){
        modal.style.display = 'flex';
        document.body.classList.add("_lock", '_fixed-modal');
        document.documentElement.classList.add('_fixed-modal');
    }
}
export default openModal;