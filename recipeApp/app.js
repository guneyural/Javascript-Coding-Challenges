const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

const randRecipeName = document.querySelector('#rand-recipe-name');
const randRecipeImg = document.querySelector('#rand-recipe-img');
const addFavorite = document.querySelector('.add-favorite');
const recipeModal = document.querySelector('.recipe-modal');
const closeModal = document.querySelector('.close-modal');
const cardImg = document.querySelector('.card .card-img-top') 
const card = document.querySelector('.card');
const recipeModalList = document.querySelector('.recipe-modal-list');
const favoriteMealField = document.querySelector('.favorite-meal');
const mealTable = document.querySelector(".meal-table");
const searchBar = document.querySelector("input[type='text']");

let randomRecipe = {}
let recipe = {}
let objectKeys = [];
let ingredients = [];
let amounts = [];
let favorites = [];
let otherCounter = 0;
let results = [];

const appendFavoritesToDocument = (mealData) => {
     const mealImg = document.createElement('img');
     const mealNameTd = document.createElement('td');
     const th = document.createElement('th');

     mealImg.setAttribute('id', 'favorite-meal-img');
     mealImg.src = mealData.strMealThumb;
     mealNameTd.innerHTML = `<td>${mealData.strMeal}</td>`;

     th.setAttribute('class', 'favorite-meal-img');
     th.setAttribute('value', mealData.idMeal);
     mealNameTd.setAttribute('class', "favorite-meal-name");
     mealNameTd.setAttribute('value', mealData.idMeal);
     th.appendChild(mealImg);

     document.querySelector('.meal-images').appendChild(th);
     document.querySelector('.meal-names').appendChild(mealNameTd);
}  

const getFavorites = async () => {
     JSON.parse(localStorage.getItem('favorites')).forEach(async(item) => {
          const fetchData = await axios.get(BASE_URL + `lookup.php?i=${item}`);
          const mealData = fetchData.data.meals[0];
          appendFavoritesToDocument(mealData);
     });
}

const addToFavorites = async(id) => {
     const fetchData = await axios.get(BASE_URL + `lookup.php?i=${id}`);
     const mealData = fetchData.data.meals[0];
     appendFavoritesToDocument(mealData);
}

window.onload = async () => {
     if(!localStorage.getItem('favorites')) {
          localStorage.setItem('favorites', JSON.stringify(favorites));
     }

     if(localStorage.getItem('favorites').length > 0) {
          getFavorites();
     }
}

const getRandomRecipe = async () => {
     const randRecipe = await axios.get(BASE_URL+"random.php");
     randomRecipe = {...randRecipe.data.meals[0]};

     card.setAttribute('value', randomRecipe.idMeal);
     randRecipeName.innerHTML = `<span class="recipe-name" id="rand-recipe-name">${randomRecipe.strMeal} <span class="add-favorite" id="addFavorite"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
   </svg></span></span>`;
     randRecipeImg.src = `${randomRecipe.strMealThumb}`;
}

const getRecipeById = async (id) => {
     const favoriteId = JSON.parse(localStorage.getItem('favorites')); // For Comparison with favorite recipe
     recipeModal.style.display = "block";
     const getById = await axios.get(BASE_URL + `lookup.php?i=${id}`);
     recipe = getById.data.meals[0];
     objectKeys = [...Object.keys(recipe)]; //objectKeys[9] = "strIngredient1", objectKeys[48] = "strMeasure20"

     //========= FOR ONLY GETTING INGREDIENTS AND AMOUNT OF INDGREDIENTS =============
     let extractKeys = [];

     for(var i=9; i<=48; i++){
          extractKeys.push(objectKeys[i]);
     }
     //========= FOR ONLY GETTING INGREDIENTS AND AMOUNT OF INDGREDIENTS =============

     let ingredientsAndAmounts = []

     //remove empty ingredients and amounts
     extractKeys.forEach((item) => {
          return recipe[item] == "" || recipe[item] == null || recipe[item] == " " ? "" : ingredientsAndAmounts.push(recipe[item]); 
     }); 

     //Only Get Ingredients
     for(let i = 0; i<(ingredientsAndAmounts.length / 2); i++) {
          ingredients.push(ingredientsAndAmounts[i]);
     }
     
     //Only Get Amounts
     for(let i = ingredientsAndAmounts.length / 2; i<ingredientsAndAmounts.length; i++) {
          amounts.push(ingredientsAndAmounts[i]);
     }

     for(let i = 0; i<ingredients.length; i++) {
          const newLi = document.createElement('li');
          newLi.innerHTML = `<span id="amount">${amounts[i]}</span> <span id="ingredient">${ingredients[i]}</span>`;
          
          newLi.setAttribute('class', 'pb-3');
          recipeModalList.appendChild(newLi);
         
     }

     document.querySelector('#recipe-modal-img').src = recipe.strMealThumb;
     document.querySelector('#recipe-modal-name').innerHTML = `<span class="recipe-name" id="recipe-modal-name">${recipe.strMeal}</span>`;
     document.querySelector('#recipe-modal-instructions').innerText = recipe.strInstructions;
}

const addFavoriteEvent = async (id) => {
     const fetchData = await axios.get(BASE_URL + `lookup.php?i=${id}`);
     const mealData = fetchData.data.meals[0];

     let temp = 0; //Counter for duplicates in array
     favorites = [...JSON.parse(localStorage.getItem('favorites'))];

     favorites.forEach((item) => {
          if(item == id) {
               temp ++;
          }
     });

     if(temp <= 0) {
          favorites.push(id);
          localStorage.setItem('favorites', JSON.stringify(favorites));
     } else {
          favorites.splice(favorites.indexOf(id), 1);
          localStorage.setItem('favorites', JSON.stringify(favorites));
     }
     
     if(otherCounter % 2 != 0) {
          document.querySelector('.add-favorite svg').style.color = "black";
          document.querySelector('.card .recipe-name .add-favorite svg').style.color = "black";
     } else {
          document.querySelector('.add-favorite svg').style.color = "gray";
          document.querySelector('.card .recipe-name .add-favorite svg').style.color = "gray";
     }
}

document.querySelector('.card .recipe-name').addEventListener("click", (event) => {
     otherCounter ++;
     if(event.target.className == '[object SVGAnimatedString]') {  
          makeFavsVisible();
     }
});

function makeFavsVisible() {
     addFavoriteEvent(card.getAttribute('value'));
     let counter = 0;
     const favs = document.querySelector(".meal-images").childNodes;
          const favMealNames = document.querySelector(".meal-names").childNodes;
          for(let i = 1; i<favs.length; i++) {
               if(favs[i].getAttribute('value') != card.getAttribute('value')){
                    counter ++;
               }else {
                    favs[i].style.display = 'none';
                    favMealNames[i].style.display = 'none';
               }
          }

          if(otherCounter%2!=0) {
               addToFavorites(card.getAttribute('value'));
          }else{
               document.querySelector('.add-favorite svg').style.color = "pink";
          }
}

closeModal.addEventListener('click', () => {
     recipeModal.style.display = 'none';
});

document.querySelector('.meal-images').addEventListener("click", (e) => {
     if(Object.is(document.querySelector('th img').id, e.target.id)) {
          getRecipeById(e.target.parentNode.getAttribute('value'));
     }
});

document.querySelector('.search-icon').addEventListener('click', async () => {     
     axios
     .get(BASE_URL + `search.php?s=${searchBar.value}`)
     .then(result => {
          return result.data.meals;
     })
     .then(data => {
          if(data){
               document.querySelectorAll('.content .card').forEach(element => {
                    element.style.display = 'none';
               });

               data.forEach(item => {
                    const div = document.createElement('div');
                    div.setAttribute('value', item.idMeal);
                    div.setAttribute('class', 'card random-recipe mb-4 mt-4');
                    div.style.width = "90%"; 
                    
                    const img = document.createElement('img');
                    img.setAttribute('class', "card-img-top recipe-img");
                    img.setAttribute('id', "rand-recipe-img")
                    img.setAttribute('src', item.strMealThumb);
                    img.setAttribute('alt', item.strMeal);
                    img.setAttribute('onclick', `getRecipeById(${item.idMeal})`);

                    const p = document.createElement('p');
                    p.setAttribute('class', 'lead');
                    p.innerHTML = "Results";

                    const span = document.createElement('span');
                    span.setAttribute('class', 'recipe-name');
                    span.setAttribute('id', 'rand-recipe-name');
                    span.innerHTML = `<span class="recipe-name" id="rand-recipe-name">${item.strMeal} <span class="add-favorite" id="addFavorite" onclick="makeFavsVisible()"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg></span></span>`

                    div.appendChild(img);
                    div.appendChild(p);
                    div.appendChild(span);
                    
                    document.querySelector('.content').appendChild(div);
               });
          } else {
               alert('No Recipe Found');
          }
     })
     
});

cardImg.addEventListener('click', (e) => {
     if(e.target.tagName.toLowerCase() === 'img'){
          getRecipeById(card.getAttribute('value'));
     }
});

getRandomRecipe();