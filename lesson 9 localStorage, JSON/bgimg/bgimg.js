const firstImg = document.querySelector(".firstimg");
const secondImg = document.querySelector(".secondimg");
const thirdImg = document.querySelector(".thirdimg");

const clickone = document.querySelector(".clickone");
const clicktwo = document.querySelector(".clicktwo");
const clickThree = document.querySelector(".clickThree");

// let arr = document.querySelectorAll("img")
// console.log(arr)
// for(let i = 0; i < arr.length; i++){
//     arr[i].classList.add('hidden')
//     console.log(arr[i])
// }


//     if(clickone){
//         clickone.addEventListener("click", () => {
//             firstImg.classList.add('visible')
//             secondImg.classList.add('hidden');
//             thirdImg.classList.add('hidden')
//         })
//     }
//     if(clicktwo){
//         clicktwo.addEventListener("click", () => {
//             firstImg.classList.add('hidden')
//             secondImg.classList.add('visible');
//             thirdImg.classList.add('hidden')
//         })
//     }
//     if(clickThree){
//         clickThree.addEventListener("click", () => {
//             firstImg.classList.add('hidden')
//             secondImg.classList.add('hidden');
//             thirdImg.classList.add('visible')
//         })
//     }

let imgs = document.querySelectorAll('img');

if (localStorage.index){
    document.body.style.backgroundImage= `url(${imgs[localStorage.index].getAttribute('src')})`
    imgs[localStorage.index].classList.add('active');
} else {
    document.body.style.backgroundImage= `url(${imgs[0].getAttribute('src')})`
    imgs[0].classList.add('active');
}


for(let i = 0; i < imgs.length; i++ ) {
    imgs[i].addEventListener('click', (event) => {
        for (let item of imgs){
            if (item != event.target){
                item.classList.remove('active');
            } 
        }
        localStorage.index = i;
        imgs[i].classList.add('active')
        document.body.style.backgroundImage= `url(${imgs[i].getAttribute('src')})`
    });
}
