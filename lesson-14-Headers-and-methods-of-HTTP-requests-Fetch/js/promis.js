fetch('https://todoappexamplejs.herokuapp.com/items.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });


fetch('https://todoappexamplejs.herokuapp.com/items', {
    headers: {
        Accept: 'application/json'
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });

fetch('https://todoappexamplejs.herokuapp.com/items/1252', {
    method: 'PUT',
    headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({ title: 'Pavel' })
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });