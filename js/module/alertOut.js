const alertOut = () =>{

    if(!document.querySelector('.error-auth') && !localStorage.getItem('user')){
        const alertError = document.createElement('div');
        alertError.classList.add('error-auth')
        alertError.innerText = "Вы не авторизованы, авторизуйтесь пожалуйста";
        document.body.append(alertError);
        setTimeout(()=>alertError.remove(), 1000)
    }
}
export default alertOut;