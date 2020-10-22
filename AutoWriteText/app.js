let text = document.querySelector(".text-content");
let index = 0;

window.onload = function () {
     const textContent = "PHOTO OF VERY SEXY BLACK BMW 4 WHICH IS GUNEY'S CAR".split("");
    
          let interval = setInterval(function(){
               if(index < textContent.length){
                    text.innerHTML += textContent[index];
                    index ++;
               }
          }, 100);
     
}