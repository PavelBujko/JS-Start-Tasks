const listGroupItem = document.querySelectorAll('.list-group-item')
const klass = document.querySelector('.klass')

function CreateCards(name, userName, city, company, email) {
    let cars = `
    <div class='card'>
        <h1>${name}</h1>
        <p>${userName}</p>
        <p>${city}</p>
        <p>${company}</p>
        <a href="mailto:${email}">${email}</a>
    </div>
`;
    klass.innerHTML = cars;
};

function buttonClick(data) {
    for (let i = 1; i < 5; i++) {
        listGroupItem[i].innerText = data[i].name
    }

    for (let i = 1; i < 5; i++) {
        listGroupItem[i].addEventListener('click', (event) => {
            CreateCards(data[i].name, data[i].username, data[i].address.city, data[i].company.name, data[i].email)
        });
    }
}


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Not ok')
        }
        response.json()
    })
    .then((data) => {
        buttonClick(data)
    })

    .catch((error) => {
        console.log('My error', error)
    });   