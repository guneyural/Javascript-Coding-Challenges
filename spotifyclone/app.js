const sidenav = document.querySelector('.sidenav');
const closeBtn = document.querySelector('.close-btn');

/*document.querySelector('#burger').addEventListener('click', ()=> {
     if(document.querySelector('.topnav').className !== "topnav sidenav") {
          document.querySelector('.topnav').className += " responsive";
     } else {
          document.querySelector('.topnav').className = "topnav";
     }
});*/

document.querySelector('#burger').addEventListener('click', () => {
     sidenav.style.width = "100%";
});

closeBtn.addEventListener('click', () => {
     sidenav.style.width = "0";
});