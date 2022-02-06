let car = {color: 'red'};
car.go = function(){
    console.log(`${this.color} car goes`)
}

car.go()


//Поля и методы

let cars = {
    go(){
        console.log('car goes');
    },
}
cars.go();

//---------------------------------//

let carc = {
    go: function(){
        console.log('car goes');
    },
}
carc.go();

//---------------------------------//

let carr = {
    go(){
        console.log('car goes');
    },
    stop(){
        console.log('car stopped')
    }
}
carr.go();
carr.stop();

//---------------------------------//

//Объекты

function Carrr(color){
    this.color = color;
    this.go = function(){
        console.log(`${this.color} car goes`)
    }
}

const carrr = new Carrr('green')
carrr.go();


// Классы ООП

class Tesla {
    constructor(color){
        // this = {};
        this.color = color;
        // return this
    }

    go(color){
        console.log(`${this.color} car goes`)
    }
}
const tesla = new Tesla('blue');
tesla.go();


//----------//
// Lesson 3

class RacingTesla {
    constructor(color){
        this.color = color;
    }
    
    go(){
        console.log(`${this.color} car goes fast`)
    }
}
const racingTesla = new RacingTesla('white');
racingTesla.go();


// Наследование        //extends - расширяет, наследует
class RacingTeslaFast extends Tesla {
    constructor(color, maxSpeed){
        super(color);              //Обязательно когда надо добавить в наследничество что-то новое
        this.maxSpeed = maxSpeed;
    }

    go(){
        super.go()         // Убрали дублирование
        console.log(`fast by speed ${this.maxSpeed}`)
    }
}
const racingTeslaFast = new RacingTeslaFast('white', 150);
racingTeslaFast.go();



















