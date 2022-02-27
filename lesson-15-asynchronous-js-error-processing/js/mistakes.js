// document.querySelector('button').addEventListener('click', function () {
//     const request = new XMLHttpRequest();
//     request.open('GET', document.querySelector('input').value);

//     request.onload = function () {
//         if(request.status === 200){
//             console.log(request.responseText);
//         } else{
//             const error = new Error(request.statusText);
//             console.error("My error", error);
//         }
//     };

//     request.onerror = function (){
//         console.error(new Error('My network error'))
//     }

//     request.send();
// })


document.querySelector('button').addEventListener('click', function () {
    fetch(document.querySelector('input').value)
        .then((response) => {
            if(response.ok){
                return response.json()
            } else{
                throw new Error('Not ok')
            }
            response.json()
        })
        .then((json) => console.log(json))

        .catch((error) => {
            console.log('My error', error)
        });       //Когда нет интернета и надо обработаь ошибку
})



function log(){
    throw new Error()
}