const burger_closed = document.querySelector('.burger_closed');
const burger_open = document.querySelector(".burger_open");
const burger_nav = document.querySelector(".burger_nav");
const search = document.querySelector(".search");
const find = document.querySelector(".find");

function makeMenuVisible() {
    burger_nav.classList.remove('visible');
    burger_closed.classList.remove('disapper')
    burger_open.classList.remove('found')
}


burger_closed.addEventListener("click", () => {
    burger_nav.classList.add('visible');
    burger_closed.classList.add('disapper')
    burger_open.classList.add('found')
});

burger_open.addEventListener("click", () => {
    makeMenuVisible()
});


search.addEventListener("focusin", () => {
search.classList.add('blackbg');
find.classList.add('blackbg');
});

search.addEventListener("focusout", () => {
search.classList.remove('blackbg');
find.classList.remove('blackbg');
});

find.addEventListener("focus", () => {
    find.classList.add('blackbg');
});

find.addEventListener("focusout", () => {
    find.classList.remove('blackbg');
});

document.addEventListener("click", (event) => {
    if (!burger_nav.contains(event.target) && !burger_closed.contains(event.target)){
        makeMenuVisible()
    };
});
