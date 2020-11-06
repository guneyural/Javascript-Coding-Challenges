$(document).ready(function() {
     $('a').on('click', function(e) {
          if(this.hash !== "") {
               event.preventDefault();

               let hash = this.hash;

               $('html, body').animate({
                    scrollTop: $(hash).offset().top
               }, 500, function() {
                    window.location.hash = hash;
               });
          }
     });
});

document.querySelector('#burger').addEventListener('click', () => {
     if(document.querySelector('.topnav').className !== "topnav responsive") {
          document.querySelector('.topnav').className += " responsive";
     } else {
          document.querySelector('.topnav').className = "topnav";
     } 
})