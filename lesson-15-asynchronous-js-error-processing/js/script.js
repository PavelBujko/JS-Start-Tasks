function renderTasks(tasks) {
    document.body.innerText = '';
    const ul = document.createElement('ul');
    for (const task of tasks) {
        const li = document.createElement('li');
        li.innerText = task.title;
        ul.append(li);
    }
    document.body.append(ul);
}


fetch('https://todoappexamplejs.herokuapp.com/items.json')
    .then((response) => response.json())
    .then((tasks) => {
        renderTasks(tasks);
        return fetch(tasks[tasks.length - 1].url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ title: `Новый - ${new Date()}` }),
        })
            .then((response) => response.json())
            .then((data) => fetch('https://todoappexamplejs.herokuapp.com/items.json')
            .then((response) => response.json())
            .then((tasks) => renderTasks(tasks))
            );
    });