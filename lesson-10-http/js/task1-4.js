// Задание 1

// 1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
// Добавить эти объекты в массив shops.
// В итоге должен получиться массив объектов типа:
// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]

// function Shop(name, address){
//     this.name = name;
//     this.address = address;
// }

// let shopFirst = new Shop('Green', 'ул. Петра Мстиславца 11, Минск')
// let shopSec = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск')
// console.log(shopFirst)
// let arr = [shopFirst, shopSec]
// console.log(arr)


// const map = new Map();

// map.set('Green', 'ул. Петра Мстиславца 11, Минск')
//     .set('ProStore', 'пр-т Дзержинского, 126, Минск');
// console.log([map.values()])


   //---------------------------------------------//
  //    Задание 2                                //
 //---------------------------------------------//
// По данному url расположена задача:
// https://jsonplaceholder.typico...
// В html предусмотреть <div></div>
// Достать с сервера заголовок задачи и отобразить его в div.

// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function(){
//     let obj = JSON.parse(httpRequest.responseText);
//     console.log(obj.title);
//     let div = document.querySelector('div');
//     div.innerText = obj.title;
// }
// httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
// httpRequest.send();

   //---------------------------------------------//
  //    Задание 3                                //
 //---------------------------------------------//
//  Запросом на сервер по этому url: https://jsonplaceholder.typico... достать задачи.
//  Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.

// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function(){
//     let obj = JSON.parse(httpRequest.responseText);
//     console.log(obj);
//     for( let i = 0; i < 20; i++){
//         let li = document.createElement('li');
//         li.innerText = obj[i].title;
//         document.body.appendChild(li);
//     }
// }
// httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos');
// httpRequest.send();


   //---------------------------------------------//
  //    Задание 4                                //
 //---------------------------------------------//
//  Отобразить на странице 10 первых комментариев с сервера https://jsonplaceholder.typico...
//  Оформить тегами как в ПРИМЕРЕ.
//  Порядок работы:
//  1) создать http-запрос и получить результат в виде массива объектов (через JSON.parse)
//  2) внутри функции .onload:
//  - обойти через цикл первые 10 элементов массива
//  - описать функцию добавления элемента на страницу, функция принимает 3 параметра - тег, содержимое и название класса для CSS.
//  - вызвать функцию 3 раза: для добавления имени, имейла и комментария.
//  - прописать CSS для классов


// function createElem(tegName, content, nameClass){
//     let teg = document.createElement(tegName);
//     teg.innerText = content;
//     document.body.appendChild(teg);

//     teg.classList.add(nameClass);
// }

// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function(){
//     let obj = JSON.parse(httpRequest.responseText);
//     console.log(obj);
    
//     for(let i = 0; i < 20; i++){
//         createElem('H1', obj[i].name, 'headimg')
//         createElem("p", obj[i].email, 'email')
//         createElem("p", obj[i].body, 'text')
//     }
// }
// httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/comments');
// httpRequest.send();