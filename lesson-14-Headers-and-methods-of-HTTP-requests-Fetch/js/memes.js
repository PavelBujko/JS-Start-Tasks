const wrap = document.querySelector('.wrap');
console.log(wrap)



fetch('https://api.doge-meme.lol/v1/memes/?skip=0&limit=20')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for(let i= 0; i < data.data.length; i++){
            if(data.data[i].submission_url[data.data[i].submission_url.length - 4] == "."){
                let imgI = data.data[i].submission_url;
                let img = `<img src="${imgI}">`;
                wrap.innerHTML += img;
            }
        }
    });

