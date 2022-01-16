let ul = document.querySelectorAll(".ul");
const input =  document.querySelector('input');
const form =  document.querySelector('form');
const list = document.querySelector("list");
const allDone = document.querySelector(".allDone")



function addCheckbox(li){
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    li.prepend(checkbox);

    // checkbox.setAttribute("type", "checkbox"); //2 Вариант добавить checkbox
    checkbox.addEventListener("change", (event) => {
        if (checkbox.checked){
            li.classList.add('through');
            const parent = document.querySelector('.list');
            parent.append(li);

            let last = tasks.length
            tasks.pop(tasks[last]);
            tasks.push(tasks.pop(tasks[last]))
        } else{
            li.classList.remove("through");
            const parent = document.querySelector('.list');
            parent.prepend(li);
        }
    });
}

function createButtonClose(li){
    let button = document.createElement('button');
    button.innerText = 'X'
    li.prepend(button);
    button.addEventListener("click", () => {
        li.classList.add('hidden');
        tasks.pop(tasks);
        tasks.push(tasks.pop(tasks))
    })
}

function createLi(input){
    message = input.value;
    const ul = document.querySelector('ul')
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerText = message;

    document.body.appendChild(ul);
    input.value = ''  
    createButtonClose(li);
    addCheckbox(li);
    localStorage.tasks = JSON.stringify(tasks);
}

let tasks = [];
    if (localStorage.tasks){
        tasks = JSON.parse(localStorage.tasks);
    }

    for (let task of tasks){
        let li = document.createElement('li');
        li.innerText = task;
        createButtonClose(li);
        addCheckbox(li);
        let ul = document.querySelector('ul');
        ul.appendChild(li);
    }

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    tasks.push(input.value);
    createLi(input);
});


allDone.addEventListener('click', () => { 
    let liAll = document.querySelectorAll("li");
    console.log(liAll);
    console.log(liAll[1])
    for(let i = 0; i < liAll.length; i++){
        let elem = liAll[i];
        elem.style.textDecoration = 'line-through';
    }
    const checkbox = document.getElementById("checkbox");

    // checkbox = true 
    localStorage.clear()
});





console.log(tasks)

console.log(tasks.length)







