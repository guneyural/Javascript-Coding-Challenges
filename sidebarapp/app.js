const sidenav = document.querySelector('.sidebar');
const btn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('.close-button');

btn.addEventListener('click', () => {
     sidenav.classList.toggle('visible');
});

closeBtn.addEventListener('click', ()=> {
     sidenav.classList.toggle('visible');
});