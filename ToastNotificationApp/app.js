let btn = document.querySelector(".btn");
let toastField = document.querySelector(".toast-field");
let i = 0;

btn.addEventListener("click", function() {
     i++;
     const snackbar = document.createElement("div");
     snackbar.setAttribute("class", "snackbar");
     snackbar.innerText = i + ". BMW 428i xDrive 245 HP";
     toastField.append(snackbar);
     
     setTimeout(function() {
          snackbar.style.display = "none";
     }, 3000);
});