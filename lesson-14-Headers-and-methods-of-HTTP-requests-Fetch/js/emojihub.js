const button = document.querySelector('button');
const dayEmoji = document.querySelector('.dayemoji');
const people = document.querySelector('.people');
const food = document.querySelector('.food')
const travel = document.querySelector('.travel')

fetch('https://emojihub.herokuapp.com/api/random')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        button.addEventListener("click", () => {
            let emoji = document.createElement('p');
            emoji.innerHTML = data.htmlCode[0];
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
            console.log(data[i].htmlCode[0]);
            console.log(data[i].category)

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