const button = document.querySelector('button');
const dayEmoji = document.querySelector('.dayemoji');
const people = document.querySelector('.people');
const food = document.querySelector('.food')
const travel = document.querySelector('.travel')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

fetch('https://emojihub.herokuapp.com/api/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        button.addEventListener("click", () => {
            dayEmoji.innerHTML = ''
            let emoji = document.createElement('p');
            emoji.innerHTML = data[getRandomIntInclusive(0, 1791)].htmlCode[0];
            emoji.style.fontSize = '70px'
            dayEmoji.appendChild(emoji);
        });
    });

function addToClass(value, clas) {
    let emoji = document.createElement('H5');
    emoji.innerHTML = value;
    clas.appendChild(emoji);
}

fetch('https://emojihub.herokuapp.com/api/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {

            switch (data[i].category) {
                case 'smileys and people':
                    addToClass(data[i].htmlCode[0], people);
                    break;

                case 'food and drink':
                    addToClass(data[i].htmlCode[0], food);
                    break;

                case 'travel and places':
                    addToClass(data[i].htmlCode[0], travel);
                    break;
            }
        }
    });
