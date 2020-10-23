const span = document.querySelector("span");
const body = document.querySelector("body");

span.addEventListener('click', function() {
     body.classList.toggle("text-light");
     body.classList.toggle("bg-dark");
     span.classList.toggle("bg-light");
});