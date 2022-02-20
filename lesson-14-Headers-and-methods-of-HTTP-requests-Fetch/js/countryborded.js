const container = document.querySelector('.container');
const countrymain = document.querySelector('.countrymain');
const countryborded = document.querySelector('.countryborded');


function CreateCards(flag, countryName, region, population, languageStr, moneyStr, klass) {
    let cars = `
    <div class='card'>
        <img src="${flag}">
        <h1 class='country'>${countryName}</h1>
        <p class='region'>${region}</p>
        <p class='population'>${population}</p>
        <p class='language'>${languageStr}</p>
        <p class='money'>${moneyStr}</p>
    </div>
`;
    klass.innerHTML += cars;
};

function formACard(data, countrymain){
    let languageStr = [];
    for (let prop in data[0].languages) {
        languageStr.push(data[0].languages[prop])
    }
    let moneyStr = [];
    for (let prop in data[0].currencies) {
        moneyStr.push(data[0].currencies[prop].name)
    }

    CreateCards(data[0].flags.png, data[0].name.common, data[0].region, data[0].population, languageStr, moneyStr, countrymain)
}

function aboutContry(data) {
    formACard(data, countrymain);

    for (let i = 0; i < data[0].borders.length; i++) {
        fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[i]}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                formACard(data, countryborded);
            });
    }
}



// let srtCountry = 'https://restcountries.com/v3.1/name/belarus'
let srtCountry =`https://restcountries.com/v3.1/name/${prompt('Введите название старны:')}`

fetch(srtCountry)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        aboutContry(data)


    });