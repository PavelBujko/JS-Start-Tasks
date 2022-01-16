function createIcon(value){
    let links =  "http://openweathermap.org/img/wn/10d@2x.png";
    let split = links.split('')
    
    split.splice(33, 3, value)

    let result = split.join(''); 
    return result
}

const current = document.querySelector('.current')
const forecast = document.querySelector('.forecast')

function createElemInCurrent(tegName, content, nameClass){
    let teg = document.createElement(tegName);
    teg.innerText = content;
    current.appendChild(teg);

    teg.classList.add(nameClass);
}

function createElemInforecast(tegName, content, nameClass){
    let teg = document.createElement(tegName);
    teg.innerText = content;
    forecast.appendChild(teg);

    teg.classList.add(nameClass);
}

function getForecast(linkAPI){
    let httpRequest = new XMLHttpRequest();

    httpRequest.onload = function(){
    
        let country = JSON.parse(httpRequest.responseText);
        createElemInCurrent("p", country.city.name, "country") //Country Name
    
        //-----------------//
    
        let data = JSON.parse(httpRequest.responseText);
        createElemInCurrent("p", data.list[0].dt_txt, "time") //TIME
    
        //-----------------//
    
        let icon = JSON.parse(httpRequest.responseText);
        let iconId = icon.list[0].weather[0].icon;
    
        //-----------------//
    
        let linkIcon = createIcon(iconId);
        const images = document.createElement('IMG');
        images.setAttribute('src', linkIcon);
        images.classList.add('imgce')
        current.appendChild(images);  //  Images
    
        //-----------------//
    
        let weather = JSON.parse(httpRequest.responseText);
        createElemInCurrent("H2", weather.list[0].main.temp, "weather") //Weather
    
        //-----------------//
       //-----------------//
    
       for(let i = 0; i < 40; i +=8){
    
           createElemInforecast("div", '', "row")
    
            let weather = JSON.parse(httpRequest.responseText);
            createElemInforecast("p", weather.list[i].main.temp, "weatherforecast")
    
            let icon = JSON.parse(httpRequest.responseText);
            let iconId = icon.list[i].weather[0].icon;
    
            //-----------------//
    
            let linkIcon = createIcon(iconId);
            const images = document.createElement('IMG');
            images.setAttribute('src', linkIcon);
            images.classList.add('imgcebott')
            forecast.appendChild(images); 
    
    
            let data = JSON.parse(httpRequest.responseText);
            createElemInforecast("p", data.list[i].dt_txt, "time")
       }
    
    }
    
    httpRequest.open("GET", linkAPI);
    
    httpRequest.send();
}

navigator.geolocation.getCurrentPosition(
    function(position) {
	    alert('Последний раз вас засекали здесь: ' +
		    position.coords.latitude + ", " + position.coords.longitude);

                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
    
                let link = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=248dee22376dff44b5f737f243fc02c6`

                console.log(link)
                getForecast(link)
	}
);







