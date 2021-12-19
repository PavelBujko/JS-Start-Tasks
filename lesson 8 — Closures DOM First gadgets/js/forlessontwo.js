const burger = document.querySelector('.burger');
const closed = document.querySelector('.closed');
const leftSlider = document.querySelector('.leftSlider');
const rightPart = document.querySelector('.rightPart');

burger.addEventListener("click", () => {
    rightPart.classList.add('rightPartPadding');
    leftSlider.classList.add('leftSliderVisible');
});

closed.addEventListener("click", () => {
    leftSlider.classList.remove('leftSliderVisible');
    rightPart.classList.remove('rightPartPadding');
});