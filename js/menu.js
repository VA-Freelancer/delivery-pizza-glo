// создаем переменную со значением категории в базе данных
const restaurant = 'food-band'
// функционально обробатываем данные из базы(формат json)
const renderItems = (data) => {
    if(data.length > 0 ){
        data.forEach((el) => {{
            console.log(el);

        }})
    }else{
        if(data){
            console.log(data);
        }
    }
}
// получаем тестовые данные из firebase.google.com
fetch(`https://test-b0177-default-rtdb.firebaseio.com/db/${restaurant}.json`)
    .then((response) => response.json())
    .then((data)=>{
        renderItems(data)
    })
    .catch((error)=>{
        console.log(error)
    })