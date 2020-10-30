const sidenav = document.querySelector('.sidebar');
const btn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('.close-button');

btn.addEventListener('click', () => {
     if(window.innerWidth <= 800) {
          sidenav.classList.toggle('visible');
          btn.classList.toggle('hidden');
          sidenav.style.width = "100%";
     } else {
          sidenav.classList.toggle('visible');
     }
});

closeBtn.addEventListener('click', ()=> {
     if(window.innerWidth <= 800) {
          sidenav.classList.toggle('visible');
          btn.classList.toggle('hidden');
          sidenav.style.width = "350px";
     } else{
          sidenav.classList.toggle('visible');
     }
});
