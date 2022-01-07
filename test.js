let sendtram = document.getElementById("sendtram"); //кнопка отправить трамвай
let listtram = document.getElementById("listoftram");//список трамваев
let final = document.querySelectorAll('.text')[0];//конечная
let stop1  = document.querySelectorAll('.text')[1];//первая
let stop2 = document.querySelectorAll('.text')[2];//вторая
const NUMBERTRAM  = document.querySelectorAll('.text')[3];//поле текста где мы вводим номер трамвая
const TIMETRAM  = document.querySelectorAll('.text')[4];//поле текста где мы вводим время отправления
let listonstop =  document.getElementById("thisstop");

let listofnumtrain = []
let listoftimetrain = []


sendtram.addEventListener("click", addtram); //исполняем функцию по нажатию на кнопку

function addtram() 
{
    if (NUMBERTRAM.value == "" || TIMETRAM.value == "")
    {
        alert("Неправильно введены данные или пустое поле"); //проверяем не пустое ли поле у номера трамвая или времени (про неправильное придумал, но написать его не смогу, ибо ндолго и нудно вводить проверку формы написания данных)
        return;
    }
    listofnumtrain.push(NUMBERTRAM.value);
    listoftimetrain.push( TIMETRAM.value);

    //таблица для остановок 
    

    //таблица трамваев общая
    let newtrampoint = document.createElement("li");//создаем пункт списка 
    newtrampoint.textContent = NUMBERTRAM.value + " — " + TIMETRAM.value; //формируем данные которые поместим в пункт списка т.е. номер трамвая + время отбытия 
    listtram.appendChild(newtrampoint);//добавляем пункт в список 
    NUMBERTRAM.value = "";//чистим наши поля
    TIMETRAM.value = "";//чистим наши поля 
}


function viewtramonthis() 
{
    listonstop.classList.toggle("hidden");
    
}