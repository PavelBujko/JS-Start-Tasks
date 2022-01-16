let person = { name: 'Pavel', age: 17 };
person.getDescription = function(){
    return `${person.name}, ${person.age}`
}

console.log(person.getDescription())

//-2---------------------------------------------//
let persono = { name: 'Pavel', age: 17 };
persono.getDescription = function(){
    return `${this.name}, ${this.age}`
}

console.log(person.getDescription());

//-1---------------------------------------------//

function createPersone(name, age){
    let persono = { name: name, age: age };
    persono.getDescription = function(){
        return `${this.name}, ${this.age}`
    }
    return persono;
}

console.log(createPersone("Nikita", 33).getDescription());

//-2---------------------------------------------//

function Persone(name, age){
    this.name = name;
    this.age = age;
    this.getDescription = function(){
        return `${this.name}, ${this.age}`
    }
}
let personO = new Persone("Nikita", 33)
console.log(personO.getDescription());

//-----------------------------------------------//
//   Unit 2
//---------------------------------------------//

// let httpRequest = new XMLHttpRequest();

// httpRequest.onload = function(){
//     console.log(httpRequest.responseText);
// }
// httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
// httpRequest.send();

  //---------------------------------------------//
 //Выводит title ссылки                         //
//---------------------------------------------//

let httpRequest = new XMLHttpRequest();

httpRequest.onload = function(){
    let obj = JSON.parse(httpRequest.responseText);
    console.log(obj.title);
}
httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
httpRequest.send();
















