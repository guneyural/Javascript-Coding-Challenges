const input = document.querySelector("input[type='text']");
const button = document.querySelector('button');
const list = document.querySelector('.list');

function addToList(e) {
     console.log(uuid());
}

button.addEventListener('click', (e) => {addToList(e)});