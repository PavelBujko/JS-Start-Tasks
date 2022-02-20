const card1 = document.querySelector('.card1')
const container = document.querySelector('.container')

function CreateCards(flag, countryName, region, population, languageStr, moneyStr) {
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
    container.innerHTML += cars;
}

function returnData(data){
    for (let i = 0; i < 120; i+=10) {
        let flag = data[i].flags.png;
        let countryName = data[i].name.common;
        let region = data[i].region;
        let population = data[i].population;
        let money = data[i].currencies
        let langu = data[i].languages;

        let languageStr = []
        for (let prop in langu) {
            languageStr.push(langu[prop])
        }

        let moneyStr = []
        for (let prop in money) {
            moneyStr.push(money[prop].name)
        }


        CreateCards(flag, countryName, region, population, languageStr, moneyStr)
    }
}


fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        returnData(data)
    });


