const BASE_URL = "https://api.github.com/users/john-smilga/followers?per_page=100";

const buttons = document.querySelectorAll('.button-group .index-btn');
const prevButton = document.querySelector('button.prev');
const nextButton = document.querySelector('.button-group .next');
const pageHeader = document.querySelector('.page-header h1');
const usersDiv = document.querySelector('.users .row');

let index = 0;
let users = [];

buttons[index].classList.add('active');

axios
.get(BASE_URL)
.then(raw_data => raw_data.data)
.then(data => {
  users = data;
  pageHeader.innerHTML = "Pagination";
  getUsers();
})
.catch(err => {
    console.log(err);
});

function getUsers() {
    usersDiv.innerHTML = "";
    for(let i = index*10; i < ((index + 1) * 10) ; i++) {
        const div = document.createElement('div');
        div.className = "col-md-4";
        div.innerHTML = `
            <div class="user-card border p-3 mt-3">
                <img src="${users[i].avatar_url}" height="80px"/>
                <p>${users[i].login}</p>
                <a href="${users[i].html_url}">Visit Page</a>
            </div>       
        `;
        usersDiv.appendChild(div);
    }
  }

function addActiveStyle() {
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    buttons[index].classList.add('active');
}

function prevPage() {
    index --;
    if(index < 0) {
        index = 9;
    }
    getUsers();
    addActiveStyle();
}

function nextPage() {
    index ++;
    if(index > 9) {
        index = 0;
    }
    getUsers();
    addActiveStyle();
}

prevButton.addEventListener('click', prevPage);
nextButton.addEventListener('click', nextPage);
buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        index = Number(e.target.value);
        getUsers();
        addActiveStyle();
    });
});