// функционально обробатываем данные из базы(формат json)
const renderItems = (data) => {
    console.log(data)
}

fetch('https://test-b0177-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data)=>{
        renderItems(data)
    })
    .catch((error)=>{
        console.log(error)
    })