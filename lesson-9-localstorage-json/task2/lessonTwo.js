
    // Задание 2 
// 1) 
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

// localStorage.user = {name: 'Pavel'};
// let b = JSON.stringify({name: 'Pavel'});
// let a = JSON.parse(b)
// console.log(a.name);


// 2)  
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

localStorage.user = {surname: 'Buyko'};
let newStorageStringify = JSON.stringify({surname: 'Buyko'});
let newStorageParse = JSON.parse(newStorageStringify)
console.log(newStorageParse.surname);
