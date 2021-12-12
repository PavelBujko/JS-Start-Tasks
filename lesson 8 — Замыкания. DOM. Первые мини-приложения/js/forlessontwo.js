const burger = document.querySelector('.burger');
const closed = document.querySelector('.closed');
const leftslider = document.querySelector('.leftslider');
const right_part = document.querySelector('.right_part');

burger.addEventListener("click", () => {
    right_part.classList.add('right_part_padding');
    leftslider.classList.add('leftslider_visible');
    // leftslider.classList.remove('leftslider_closed');
});

closed.addEventListener("click", () => {
    leftslider.classList.remove('leftslider_visible');
    // leftslider.classList.add('leftslider_closed');
    right_part.classList.remove('right_part_padding');
});