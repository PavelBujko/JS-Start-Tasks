function makeCalculator(x) {
    const result = function() {
        return x * 2
    }
    return result;
}

console.log(makeCalculator(4));
let calculator = makeCalculator(2);
console.log(calculator());

let calculator2 = makeCalculator(3);
console.log(calculator2());

console.log(calculator());
console.log(calculator2());


console.log(' ' );

//##############//

function makeCounter() {
    let count = 0;
    const result = function() {
        return count++
    };
    return result;
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());