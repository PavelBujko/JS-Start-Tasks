// Задание 1
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str){
    first = str.substr(0,1);
    other = str.substr(1)

    letter = first.toUpperCase();
    console.log(letter + other);
}
ucFirst('павел')

// 'Задание 2
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str){
    string = str.toLowerCase()
    console.log(string)

    badWord = string.includes('badWord')
    
    console.log(badWord)
}
checkSpam('BadWord')

// 'Задание 3
//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

function reverse(word){
    let strin = word;
    let strinStr = strin.split(''); //превращает в массив из букв
    console.log(strinStr)

    let reversStr = strinStr.reverse(); // перевернутый массив
    console.log(reversStr)

    let result = reversStr.join(); // строка
    console.log(result)
}

reverse('привет Женя');


// Задание 4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield', 
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street', 
    'SYB4f65hf75f736463;Stalybridge', 
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
]
    
//Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:
// MAN: Manchester Piccadilly
//Вывести эти строки в консоль


//строка 1//
let firstStation = stations[0];           //строка 1
let firstStationForStr = firstStation;        
let firstStationToArray = firstStationForStr.split(); //превращает 1 строку в массив

let threeLetter = [];                    // создает массив из первым 3 букв
for(let i = 0; i < 3; i++){
    threeLetter.push(firstStationForStr[i]);
}
let threeLetterTogether = threeLetter.join('')  // объеденяет массив в строку


let separateLetters = firstStationForStr.split('') //выводит 1 строку как массив

let separateArrayToStr
for(let i = 0; i < separateLetters.length; i++){
    if (separateLetters[i] == ';'){

        let separateArray = separateLetters.splice(i+1, separateLetters.length); //выводит нам нужное название как массив
        separateArrayToStr = separateArray.join('');//выводит нам нужное название как строку
    } 
}
console.log(threeLetterTogether, ':', separateArrayToStr)

//строка 2 Manchester Piccadilly//

let SecondStation = stations[1];           //строка 2
let SecondStationForStr = SecondStation;        
let SecondStationToArray = SecondStationForStr.split(); //превращает 2 строку в массив

let threeLetter1 = [];                    // создает массив из первым 3 букв
for(let i = 0; i < 3; i++){
    threeLetter1.push(SecondStationForStr[i]);
}
let threeLetter1Together = threeLetter1.join('')  // объеденяет массив в строку


let separateLetters1 = SecondStationForStr.split('') //выводит 1 строку как массив

let separateArrayToStr1
for(let i = 0; i < separateLetters1.length; i++){
    if (separateLetters1[i] == ';'){

        let separateArray = separateLetters1.splice(i+1, separateLetters1.length); //выводит нам нужное название как массив
        separateArrayToStr1 = separateArray.join('');//выводит нам нужное название как строку
    } 
}
console.log(threeLetter1Together, ':', separateArrayToStr1)

//строка 3 Liverpool Lime Street//
let ThirdStation = stations[2];           //строка 3
let ThirdStationForStr = ThirdStation;        
let ThirdStationToArray = ThirdStationForStr.split(); //превращает 3 строку в массив

let threeLetter2 = [];                    // создает массив из первым 3 букв
for(let i = 0; i < 3; i++){
    threeLetter2.push(ThirdStationForStr[i]);
}
let threeLetter2Together = threeLetter2.join('')  // объеденяет массив в строку

let separateLetters2 = ThirdStationForStr.split('') //выводит 3 строку как массив

let separateArrayToStr2
for(let i = 0; i < separateLetters2.length; i++){
    if (separateLetters2[i] == ';'){

        let separateArray = separateLetters2.splice(i+1, separateLetters2.length); //выводит нам нужное название как массив
        separateArrayToStr2 = separateArray.join('');//выводит нам нужное название как строку
    } 
}
console.log(threeLetter2Together, ':', separateArrayToStr2)

//строка 4 Stalybridge//
let fourthStation = stations[3];           //строка 4
let fourthStationForStr = fourthStation;        
let fourthStationToArray = fourthStationForStr.split(); //превращает 4 строку в массив

let fourthLetter4 = [];                    // создает массив из первым 4 букв
for(let i = 0; i < 3; i++){
    fourthLetter4.push(fourthStationForStr[i]);
}
let fourthLetter4Together = fourthLetter4.join('')  // объеденяет массив в строку

let separateLetters4 = fourthStationForStr.split('') //выводит 4 строку как массив

let separateArrayToStr4
for(let i = 0; i < separateLetters4.length; i++){
    if (separateLetters4[i] == ';'){

        let separateArray = separateLetters4.splice(i+1, separateLetters4.length); //выводит нам нужное название как массив
        separateArrayToStr4 = separateArray.join('');//выводит нам нужное название как строку
    } 
}
console.log(fourthLetter4Together, ':', separateArrayToStr4)

//строка 5 Huddersfield//
let firthStation = stations[4];           //строка 5
let firthStationForStr = firthStation;        
let firthStationToArray = firthStationForStr.split(); //превращает 4 строку в массив

let firthLetter5 = [];                    // создает массив из первым 4 букв
for(let i = 0; i < 3; i++){
    firthLetter5.push(firthStationForStr[i]);
}
let firthLetter5Together = firthLetter5.join('')  // объеденяет массив в строку

let separateLetters5 = firthStationForStr.split('') //выводит 4 строку как массив

let separateArrayToStr5
for(let i = 0; i < separateLetters5.length; i++){
    if (separateLetters5[i] == ';'){

        let separateArray = separateLetters5.splice(i+1, separateLetters5.length); //выводит нам нужное название как массив
        separateArrayToStr5 = separateArray.join('');//выводит нам нужное название как строку
    } 
}
console.log(firthLetter5Together, ':', separateArrayToStr5)

// Задание 4.1
// Выведите полученные строковые значения на странице в виде списка (ul li) 

function createUlLi(letter, str){
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = letter + ':'+ str;
    document.body.appendChild(ul);
}
createUlLi(threeLetterTogether, separateArrayToStr);
createUlLi(threeLetter1Together, separateArrayToStr1);
createUlLi(threeLetter2Together, separateArrayToStr2);
createUlLi(fourthLetter4Together, separateArrayToStr4);
createUlLi(firthLetter5Together, separateArrayToStr5);




// Задание 5 
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
// Пример:
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

function unique(arr){
    let newArr = [];
    let i = 0
        while (i <= arr.length) {
            i++
    
            let word = arr[i];
    
            if (!newArr.includes(word)) {
                newArr.push(word);
            } 
            
        }
    
        console.log(newArr)
}

console.log(unique(strings));
