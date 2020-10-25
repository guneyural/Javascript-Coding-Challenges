const imageContainer = document.querySelector(".images");
const bigImage = document.querySelector('.big-image img');
const images = [...document.querySelectorAll('.images img')];
const veryBigImg = document.querySelector('.very-big-img');
const fullscreen = document.querySelector('.fullscreen');
const fullscreenModal = document.querySelector('.fullscreen-img');
const toLeft = document.querySelector('.toLeft');
const toRight = document.querySelector('.toRight');
const closeModal = document.querySelector('.close-modal');
const fullscreenContainer = document.querySelector('.fullscreen-container');

let imageLinks = [];
let idx = 0;

//Get links of all images
for (let i = 0; i<images.length; i++) {
     imageLinks.push(images[i].src);
}

//set first image as default image
bigImage.src = imageLinks[idx];
images[idx].className += " active";

const swipeLeft = () => {
     if(idx >= imageLinks.length - 1) {
          idx = 0;
     } else {
          idx ++;
     }
     bigImage.src = imageLinks[idx];
     for (i = 0; i < images.length; i++) {
          images[i].classList.remove("active");
      }
      images[idx].classList.add("active");
}

const swipeRight = () => {
     if(idx < 1) {
          idx = imageLinks.length - 1;
     }else{
          idx --;
     }
     bigImage.src = imageLinks[idx];
     for (i = 0; i < images.length; i++) {
          images[i].classList.remove("active");
      }
      images[idx].classList.add("active");
}

const openImgModal = () => {
     fullscreenModal.style.display = "block";
     veryBigImg.src = imageLinks[idx];
}

const closeImgModal = () => {
     fullscreenModal.style.display = "none";
}

fullscreenContainer.addEventListener('mousemove', (e) => {
     const x = e.clientX - e.target.offsetLeft;
     const y = e.clientY - e.target.offsetTop;

     veryBigImg.style.transformOrigin = `${x}px ${y}px`;
     veryBigImg.style.transform = "scale(2)";
});

fullscreenContainer.addEventListener('mouseleave', (e) => {
     veryBigImg.style.transformOrigin = "center center";
     veryBigImg.style.transform = "scale(1)";
});

imageContainer.addEventListener('click', (e) => {
     if(e.target.src) {
          bigImage.src = e.target.src;
          idx = imageLinks.indexOf(e.target.src);
          for (i = 0; i < images.length; i++) {
              images[i].classList.remove("active");
          }
          images[idx].classList.add("active");
     }
});

window.addEventListener('keydown', (e) => {
     switch(e.keyCode) {
          case 37:
               swipeRight();
               break;
          case 39:
               swipeLeft();
               break;
          case 70:
               openImgModal();
               break;
          case 27:
               closeImgModal();
               break;
     }
});

toLeft.addEventListener('click', swipeLeft);
toRight.addEventListener('click', swipeRight);
fullscreen.addEventListener('click', openImgModal);
closeModal.addEventListener('click', closeImgModal);