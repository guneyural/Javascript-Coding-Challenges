const BASE_URL_A = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const BASE_URL_ID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const section = document.querySelector('.section .row');
const input = document.querySelector("input[type='text']");
const form = document.querySelector('form');
const modal = document.querySelector('.drink-modal');
const modalContent = document.querySelector('.modal-content');
let cocktails = [];
window.onload = function () {
    axios
    .get(BASE_URL_A)
    .then(raw_data => raw_data.data.drinks)
    .then(data => {
        cocktails = data;
        this.getCocktails();
        document.querySelector('.loading-img').style.display = "none";
        document.querySelector('.error').innerHTML = `${data.length} Drink Found.`;
    })
    .catch(err => console.log(err));
}
function getCocktails() {
    cocktails.forEach(item => {
        let div = document.createElement('div');
        div.className = "col-lg-4 cocktail";
        div.innerHTML = `
            <div id="${item.idDrink}" onclick="listenClick(this)" class="inner-cocktail">
                <img src="${item.strDrinkThumb}" class="drink-img" alt="cockatil photo" />
                <p class="drink-name">${item.strDrink}</p>
            </div>
        `;
        section.appendChild(div);
    });
}
form.addEventListener("submit", e => {
    e.preventDefault();
});
input.addEventListener('keyup', e => {
    let query = `${BASE_URL}${e.target.value}`;
    section.innerHTML = `
        <div class="row w-100">
            <img src="Loading.gif" class="loading-img" style="margin:auto;"/>
        </div>
    `;
    document.querySelector('.loading-img').style.display = "block";
    axios
    .get(query)
    .then(raw_data => raw_data.data.drinks)
    .then(data => {
        if(data == null) {
            document.querySelector('.error').innerHTML = "No Drink Found.";
            document.querySelector('.loading-img').style.display = "none";
        } else {
            cocktails = data;
            getCocktails();
            document.querySelector('.error').innerHTML = `${data.length} Drink Found.`;
            document.querySelector('.loading-img').style.display = "none";
        }
    })
    .catch(err => console.log(err));
});
function listenClick(e) {
    modal.style.display = "flex";
    let query = `${BASE_URL_ID}${e.id}`;
    axios
    .get(query)
    .then(raw_data => raw_data.data.drinks[0])
    .then(data => {
        if(data) {
            let i = 1;
            let ingredients = [];
            while(data[`strIngredient${i}`]) {
                ingredients.push(data[`strIngredient${i}`]);
                i ++;
            }
            const ul = document.createElement('ul');
            ingredients.forEach(item => {
                let li = document.createElement('li');
                li.innerText = item;
                ul.appendChild(li);
            });
            modalContent.innerHTML = `
                <div class="row">
                <div class="close-btn" onclick="closeModal(this)">&times</div>
                    <div class="col-lg-6">
                        <img src="${data.strDrinkThumb}" height="100%;" class="img-fluid p-5" alt="cockatil photo" />
                    </div>
                   <div class="col-lg-6 p-5">
                        <h1>${data.strDrink}</h1>
                        <p class="text-muted">${data.strInstructions}</p>
                        <div class="list-field"></div>    
                    </div>
                </div>
            `;
            modalContent.querySelector('.list-field').appendChild(ul);
        } else {
            modalContent.innerHTML = "No Drink Found.";   
        }
    })
    .catch(err => console.log(err));
}
function closeModal() {
    modal.style.display = "none";
    modalContent.innerHTML = `
        <div class="container">
            <img src="Loading.gif" class="loading-img-modal m-auto">
            <div class="row"></div>
        </div>
    `;
}
window.addEventListener('keydown', e => {
    if(e.keyCode == 27) {
        closeModal();
    }
})