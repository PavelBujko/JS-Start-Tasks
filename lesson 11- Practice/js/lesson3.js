var intervalID = window.setInterval(restartTime, 1000);

let div = document.createElement('div');
document.body.appendChild(div);

function restartTime() {
    var now = new Date().toLocaleTimeString();
    console.log(now);

    let nowH = now.slice(0,2);
    let nowM = now.slice(3,5);
    let nowS = now.slice(6,8);

    let nowHMS = nowH + ':' + nowM + ':' + nowS;

    div.innerText = nowHMS;
}


