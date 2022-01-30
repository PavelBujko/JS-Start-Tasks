const hour = document.querySelector('.hour')
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const semion = document.querySelectorAll('.semicolon')
var intervalID = window.setInterval(restartTime, 1000);

function restartTime() {
    var now = new Date().toLocaleTimeString();

    let nowH = now.slice(0,2);
    let semicolon = now.slice(2,3);
    let nowM = now.slice(3,5);
    let nowS = now.slice(6,8);

    hour.innerText = nowH;
    semion[0].innerText = semicolon;
    min.innerText = nowM;
    semion[1].innerText = semicolon;
    sec.innerText = nowS;
}

