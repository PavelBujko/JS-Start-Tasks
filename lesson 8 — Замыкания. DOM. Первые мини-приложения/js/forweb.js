const buttonClick = document.querySelector('.popup-btn');
const popup = document.querySelector('.popup');
const content = document.querySelector('.popup_content');
const buttonClose = document.querySelector('.popup_close');

buttonClick.addEventListener("click", () => {
    popup.classList.add('popup_visible')
})

buttonClose.addEventListener("click", () => {
    popup.classList.remove('popup_visible')
})


window.addEventListener("click", (event) =>{
    if(event.target == popup){
        popup.classList.remove('popup_visible');
    }
})












