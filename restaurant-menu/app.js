const menu = [
     {
       id: 1,
       title: "buttermilk pancakes",
       category: "breakfast",
       price: 15.99,
       img: "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1967&q=80",
       desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
     },
     {
       id: 2,
       title: "diner double",
       category: "lunch",
       price: 13.99,
       img: "https://images.unsplash.com/photo-1549399541-54e16138e7ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
       desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
     },
     {
       id: 3,
       title: "godzilla milkshake",
       category: "shakes",
       price: 6.99,
       img: "https://images.unsplash.com/photo-1528597469186-bddab681a37f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
       desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
     },
     {
       id: 4,
       title: "country delight",
       category: "breakfast",
       price: 20.99,
       img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
       desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
     },
     {
       id: 5,
       title: "egg attack",
       category: "lunch",
       price: 22.99,
       img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
       desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
     },
     {
       id: 6,
       title: "oreo dream",
       category: "shakes",
       price: 18.99,
       img: "https://images.unsplash.com/photo-1601362840608-942cdd122b52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
       desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
     },
     {
       id: 7,
       title: "bacon overflow",
       category: "breakfast",
       price: 8.99,
       img: "https://images.unsplash.com/photo-1601362839562-eac9b79d2e7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
       desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
     },
     {
       id: 8,
       title: "american classic",
       category: "lunch",
       price: 12.99,
       img: "https://images.unsplash.com/photo-1601362839860-88a6a13f4acc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
       desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
     },
     {
       id: 9,
       title: "quarantine buddy",
       category: "shakes",
       price: 16.99,
       img: "https://images.unsplash.com/photo-1601362840367-ebe42a6bda53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
       desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
     },
     {
       id: 10,
       title: "steak dinner",
       category: "dinner",
       price: 39.99,
       img: "https://images.unsplash.com/photo-1601362840138-44bca7a80305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
       desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
     },
];
const meals = document.querySelector('.meals');
const btns = document.querySelectorAll('button');
window.onload = function () {
     this.getMeals();
}
function addMealsToDocument(item) {
     let div = document.createElement('div');
     div.setAttribute('id', item.id);
     div.setAttribute('class', item.category);
     div.innerHTML = `
          <div class="meal-item">
               <img src="${item.img}" alt="image of ${item.title}" height="300px" style="object-fit: fit;"/>
               <h4 class="meal-name">${item.title}</h4>
               <p class="text-muted">${item.desc}</p>
               <p>$ ${item.price}</p>
          </div>
     `;
     meals.appendChild(div);
}
function getMeals() {
     menu.forEach(item => {
          addMealsToDocument(item);
     });
}
function getMealsByCategory(category="all") {
     meals.innerHTML = "";
     if(category != 'all') {
          const filteredResults = menu.filter(item => item.category == category);
          filteredResults.forEach(item => {
               addMealsToDocument(item);
          });
     } else {
          getMeals();
     }
}
btns.forEach(btn => {
     btn.addEventListener('click', e => {
          getMealsByCategory(e.target.value);
     });
})