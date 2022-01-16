// let obj = {};
// obj.name = "misha";
// console.log(obj.name);


// localStorage.name = "Pavel";
// console.log(localStorage.name);

// let objO = {name: 'Pavel'};
// if(objO.name){
//     console.log(objO.name);
// } else{
//     console.log("Поля нет")
// }

// ////// obj.hasOwnProretry('name')


localStorage.number 
if(localStorage.number){
    console.log(Number(localStorage.number) + 10);
} else{
    localStorage.number = prompt("Введите число");
}

// localStorage.clear()


localStorage.user = {name: "Buyko"};
JSON.stringify({name: "Buyko"});  ///Приводит к типу 
let a = JSON.parse('{"name":"Buyko"}') //Распознать строку

console.log(a.name);



// let arr = [{model: 'audi'}, {model: 'mersedes'}];
// let jsonArray = JSON.stringify(arr)
// console.log(jsonArray)
// let initialArray = JSON.parse(jsonArray)
// console.log(initialArray)


//задание


let textInput = document.querySelector("input");
let form = document.querySelector("form");

let tasks = [];
if (localStorage.tasks){
    tasks = JSON.parse(localStorage.tasks);
}

for (let task of tasks){
    let li = document.createElement('li');
    li.innerText = task;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
}

let textInput = document.querySelector("input");
let form = document.querySelector("form");
form.addEventListener('submit', (event) => { 
    event.preventDefault();
    tasks.push(textInput.value);
    localStorage.tasks = JSON.stringify(tasks);

    let ul = document.querySelector('ul')
    let li = document.createElement('li');
    li.textContent = textInput.value;
    textInput.value = '';
    ul.appendChild(li);
});







