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

function returnData(data) {
    for (let i = 0; i < 120; i += 10) {
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

        populationRound = String(Math.round(population - 0.1).toFixed(1))

        let moneyStr = []
        for (let prop in money) {
            moneyStr.push(money[prop].name)
        }


        if ((populationRound.length - 2) === 9 || (populationRound.length - 2) === 8 || (populationRound.length - 2) === 7) {
            let popul1 = Math.round(Math.round(populationRound) / 1000000) + ' млн'
            CreateCards(flag, countryName, region, popul1, languageStr.join(', '), moneyStr)
            
        } else{
            let popul2 = Math.round(Math.round(populationRound) / 1000) + ' тыс'
            CreateCards(flag, countryName, region, popul2, languageStr.join(', '), moneyStr)
        }
    }
}


fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        returnData(data)
    });
