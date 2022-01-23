const body = document.querySelector("body");
const bar = document.querySelector(".bar");
const lightDark = document.querySelector(".light-dark");

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

dark.addEventListener("click", () => {
    body.classList.add('darken')
    bar.classList.add('darken')
})

light.addEventListener("click", () => {
    body.classList.remove('darken')
    bar.classList.remove('darken')
})