const btns = document.querySelectorAll('button');
const articles = document.querySelectorAll('.article');
window.onload = function () {
     document.querySelector('.second-col nav button:nth-of-type(1)').setAttribute('id', 'button-active');
}
btns.forEach((item) => {
     item.addEventListener('click', (e) => {
          articles.forEach(article =>  {
               article.style.display = "none";
          });
          btns.forEach(btn => {
               btn.setAttribute('id', '');
          });
          if(e.target.value == "vision") {
               document.querySelector('.article-vision').style.display = "block";
               if(item.getAttribute('value', 'vision')) {
                    item.setAttribute('id', 'button-active');
               }
          } else if(e.target.value == "goals") {
               document.querySelector('.article-goals').style.display = "block";
               if(item.getAttribute('value', 'goals')) {
                    item.setAttribute('id', 'button-active');
               }
          } else if(e.target.value == "history") {
               document.querySelector('.article-history').style.display = "block";
               if(item.getAttribute('value', 'history')) {
                    item.setAttribute('id', 'button-active');
               }
          }
     });
});