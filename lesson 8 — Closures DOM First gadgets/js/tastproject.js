let ul = document.querySelectorAll(".ul");
const input =  document.querySelector('input');
const form =  document.querySelector('form');
const list = document.querySelector("list");


form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const input = form.querySelector('.string')
    message = input.value;

    const ul = document.querySelector('ul')
    let li = document.createElement('li');
    
    ul.appendChild(li);
    li.innerText = message;

    let button = document.createElement('button');
    button.innerText = 'X'
    li.prepend(button);


    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    li.prepend(checkbox);

    // checkbox.setAttribute("type", "checkbox"); //2 Вариант добавить checkbox

    document.body.appendChild(ul);
    input.value = '';  

    checkbox.addEventListener("click", () => {
        if (checkbox.checked){
            li.classList.add('through');
            const parent = document.querySelector('.list');
            parent.append(li);
            

        } else{
            li.classList.remove("through");
            const parent = document.querySelector('.list');
            parent.prepend(li);
        }
    });

    button.addEventListener("click", () => {
        li.classList.add('hidden');
    })
});



