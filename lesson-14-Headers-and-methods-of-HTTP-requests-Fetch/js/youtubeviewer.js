const form = document.querySelector("form");
const input = document.querySelector('input');
const player = document.querySelector('.player');
const preview = document.querySelector('.preview');


function createLinkForCards(search, playerr) {
    let cars = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${search}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>`;
    playerr.innerHTML = cars;
}

function appendToFeatch(data) {
    createLinkForCards(data.items[0].id.videoId, player)
    preview.innerHTML = ''
    for (let i = 1; i < 5; i++) {
        let img = `<img src="${data.items[i].snippet.thumbnails.high.url}">`;
        preview.innerHTML += img;
    }

    let imgs = document.querySelectorAll('img');

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('click', (event) => {
            for (let item of imgs) {
                if (item != event.target) {
                    item.classList.remove('active');
                    createLinkForCards(data.items[i + 1].id.videoId, player)
                }
            }
            imgs[i].classList.add('active')
            createLinkForCards(data.items[i + 1].id.videoId, player)
        });
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = form.querySelector('.search')
    let link = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB5nX8yZf5VQi0g7V7FWwpJ6YSrOTK8b10&q=${input.value}&type=video`;

    fetch(link)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            appendToFeatch(data, input)
        });
});
