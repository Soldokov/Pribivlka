let sendtram = document.getElementById("sendtram"); //кнопка отправить трамвай
let listtram = document.getElementById("listoftram");//список трамваев
const numbertram  = document.querySelectorAll('.text')[0];//поле текста где мы вводим номер трамвая
const timetram  = document.querySelectorAll('.text')[1];//поле текста где мы вводим время отправления

sendtram.addEventListener("click", addtram); //исполняем функцию по нажатию на кнопку

function addtram() 
{
    if (numbertram.value == "" || timetram.value == "")
    {
        alert("Неправильно введены данные или пустое поле"); //проверяем не пустое ли поле у номера трамвая или времени (про неправильное придумал, но написать его не смогу, ибо ндолго и нудно вводить проверку формы написания данных)
        return;
    }
    let newtrampoint = document.createElement("li");//создаем пункт списка 
    newtrampoint.textContent = numbertram.value + " — " + timetram.value; //формируем данные которые поместим в пункт списка т.е. номер трамвая + время отбытия 
    listtram.appendChild(newtrampoint);//добавляем пункт в список 
    numbertram.value = "";//чистим наши поля
    timetram.value = "";//чистим наши поля 
}