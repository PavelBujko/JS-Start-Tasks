function renderTasks(tasks) {
    document.body.innerText = '';
    const ul = document.createElement('ul')
    for (const task of tasks) {
        const li = document.createElement('li');
        li.innerText = task.title;
        ul.append(li);
    }
    document.body.append(ul);
}


let getXmlHttp = new XMLHttpRequest();
getXmlHttp.onload = function () {
    const tasks = JSON.parse(getXmlHttp.responseText);
    renderTasks(tasks);

    let putXmlHttp = new XMLHttpRequest();
    putXmlHttp.onload = function () {

        let updateGetXmlHttp = new XMLHttpRequest();
        updateGetXmlHttp.onload = function () {
            const tasks = JSON.parse(updateGetXmlHttp.responseText);
            renderTasks(tasks);
        };
        updateGetXmlHttp.open("GET", "https://todoappexamplejs.herokuapp.com/items.json");
        updateGetXmlHttp.send();

    }

    putXmlHttp.open("PUT", tasks[tasks.length - 1].url);
    putXmlHttp.setRequestHeader('Accept', 'application/json');
    putXmlHttp.setRequestHeader('Content-Type', 'application/json');
    const newTasksAttributes = { title: `Новый заголовок - ${new Date}` }
    putXmlHttp.send(JSON.stringify(newTasksAttributes));
};
getXmlHttp.open("GET", "https://todoappexamplejs.herokuapp.com/items.json");
getXmlHttp.send();