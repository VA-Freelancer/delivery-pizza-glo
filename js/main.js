const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');

const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

// функция логина
const login = (user)=>{
    // скрываем после авторизации
    buttonAuth.style.display = 'none';
    // показываем кнопку после авторизации
    buttonOut.style.display = 'flex';
    // показываем логин поле и передаем текст с формы
    userName.textContent = user.login
    userName.style.display = 'flex';

    //закрываем модальное окно
    closeModal(modalAuth);
}
const closeModal = (modal) =>{
    modal.style.display = 'none';
}
// функция пароля
const logout = ()=>{
    // показываем после авторизации
    buttonAuth.style.display = 'flex';
    // скрываем кнопку после авторизации
    buttonOut.style.display = 'none';
    // показываем
    userName.style.display = 'none';
    userName.textContent = "";
    localStorage.removeItem('user');
}
// показываем показываек окно авторизации
buttonAuth.addEventListener('click', (e)=>{
    modalAuth.style.display = 'flex';
})
buttonOut.addEventListener('click', (e)=>{
    logout();
})
// скрываем модальное окно
modalAuth.addEventListener('click', (e)=>{
    // делегируем событие кнопки с крестиком и проверяем на клик вне формы
    if(e.target.closest('.close-auth')  || !e.target.closest('.modal-dialog-auth')){
        closeModal(modalAuth);
    }

})
document.addEventListener('keyup' ,(e)=>{
    if(e.keyCode === 27 && modalAuth.style.display === "flex"){
        closeModal(modalAuth);
    }

})
// получаем данные с формы авторизации и получаем данные
logInForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const user = {
        login: inputLogin.value,
        password: inputPassword.value,
    }
    localStorage.setItem('user', JSON.stringify(user));
    login(user);
})
if(localStorage.getItem('user')){
    login(JSON.parse(localStorage.getItem('user')));
}