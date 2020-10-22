let collapse = document.querySelector('span');
let sidebar = document.querySelector('.side-navbar');
let i = 0;

collapse.addEventListener("click", function(e) {
     i++;
     if(i % 2 === 0) {
          sidebar.style.width = "160px";
     } else{
          sidebar.style.width = "0px";
     }
});
