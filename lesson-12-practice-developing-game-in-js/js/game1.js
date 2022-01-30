let start = document.querySelector('#start');
let game = document.querySelector('.game');
let time = document.querySelector('#time');
let result = document.querySelector('#result');
let timeH1 = document.querySelector('#time-header');
let resultH1  = document.querySelector("#result-header");
let inputTime = document.querySelector('#game-time');
let score = 0;
let isGameActive = false;

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
function randomColor(){
    a = getRandomInteger(0, 255);
    b = getRandomInteger(0, 255);
    c = getRandomInteger(0, 255);
    return('rgb(' + a + ',' + b + ',' + c  + ')')
}
  
  
  

function startGame(){
    score = 0;
    resultH1.classList.add('hide');
    timeH1.classList.remove('hide');
    let isGameActive = true
    start.classList.add('hidd');
    game.style.backgroundColor = '#FFFFFF';
    renderBox()
    let interval = setInterval(function(){
        let currentTime = Number(time.innerText)
        if(currentTime <= 0){
            clearInterval(interval);
            endGame();
        } else {
            time.innerText = (currentTime - 0.1).toFixed(1);
        }
    },100);
    inputTime.setAttribute('disabled', 'true');
}

function renderBox(){
    game.innerHTML = '';
    let randomSize = getRandom(30, 100);
    let maxDelta = 300 - randomSize

    let div = document.createElement('div');
    div.style.width= randomSize + "px";
    div.style.height= randomSize + "px"
    div.style.position = 'absolute';
    div.style.top = getRandom(0, maxDelta)  + 'px'
    div.style.left = getRandom(0, maxDelta)  + 'px'
    div.style.backgroundColor= randomColor();
    div.style.cursor = 'pointer';
    game.appendChild(div);
    div.classList.add('box');
}

function gameBoxClick(event){
    event.target.classList.contains('box');
    if(event.target.classList.contains('box')){
        score++;
        renderBox();
    }

    if (!isGameActive){
        return; 
    }
};

function getRandom(min, max) {
    return (Math.floor(Math.random() * (max - min) + min)) 
  }

function endGame(){
    isGameActive = false;
    game.innerHTML = '';
    start.classList.remove('hidd');
    game.style.backgroundColor = '#555555';
    resultH1.classList.remove('hide');
    timeH1.classList.add('hide');
    result.innerText = score;
    inputTime.removeAttribute('disabled');
}

inputTime.addEventListener('change', event => {
    time.innerText = inputTime.value;
    resultH1.classList.add('hide');
    timeH1.classList.remove('hide');
})

start.addEventListener('click', startGame);
game.addEventListener('click', gameBoxClick);

