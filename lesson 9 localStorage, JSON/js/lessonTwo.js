// localStorage.user = {name: 'Pavel'};
// let b = JSON.stringify({name: 'Pavel'});
// let a = JSON.parse(b)
// console.log(a.name);


localStorage.user = {surname: 'Buyko'};
let newStorageStringify = JSON.stringify({surname: 'Buyko'});
let newStorageParse = JSON.parse(newStorageStringify)
console.log(newStorageParse.surname);
