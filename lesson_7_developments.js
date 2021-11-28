// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

let ul = document.querySelectorAll(".ul")
const input =  document.querySelector('input')
input.onkeydown = function(event){
    let ketEvent = event.key;
    let li = document.createElement('li');
    li.innerText = ketEvent;
    document.body.appendChild(li);
}

// Задание 2
// Вставить в html теги input и div (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля)

const input =  document.querySelector('input')
input.onkeyup = function(event){
    console.log(event.key);
};


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст. После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const form =  document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const input = form.querySelector('.string')
    message = input.value;
    const ul = document.querySelector('ul')
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = message;
    document.body.appendChild(ul);
    input.value = '';
    
})



// Задание 4

// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.

// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)


//1 Способ
const form =  document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const inputNum1 = form.querySelector('.num1');
    let num1 = Number(inputNum1.value);
    inputNum1.value = '';

    const inputNum2 = form.querySelector('.num2');
    let num2 =  Number(inputNum2.value);
    inputNum2.value = '';

    const select = form.querySelector('select');
    let num3 = select.value;

    if(select.value == '+'){
        console.log(num1 + num2);
    } else if (select.value == '-'){
        console.log(num1 - num2);
    } else if (select.value == '*'){
        console.log(num1 * num2);
    } else if (select.value == '/'){
        console.log(num1 / num2);
    };
});

//2 Способ
const form =  document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const inputNum1 = form.querySelector('.num1');
    let num1 = Number(inputNum1.value);
    inputNum1.value = '';

    const inputNum2 = form.querySelector('.num2');
    let num2 =  Number(inputNum2.value);
    inputNum2.value = '';

    const select = form.querySelector('select');
    let num3 = select.value;

    calc = eval(num1 + num3 + num2)
    console.log(calc)
});

//3 способ
const form =  document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const inputNum1 = form.querySelector('.num1');
    let num1 = Number(inputNum1.value);
    inputNum1.value = '';

    const inputNum2 = form.querySelector('.num2');
    let num2 =  Number(inputNum2.value);
    inputNum2.value = '';

    const select = form.querySelector('select');
    let num3 = select.value;

    let result = eval(`${num1} ${num3} ${num2}`)
    console.log(result)
});



// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor(){
    a = getRandomInteger(0, 255);
    b = getRandomInteger(0, 255);
    c = getRandomInteger(0, 255);
    return( `rgb(${a}, ${b} , ${c})`)
}
randomColor();

document.body.style.color = randomColor();

document.querySelector('button').onclick = randomColor();
