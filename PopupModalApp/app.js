const modal = document.querySelector('.myModal');
const btn = document.querySelector('.btn');
const close = document.querySelector('span');

btn.addEventListener('click', function() {
     modal.style.display = "block";
});

close.addEventListener('click', function() {
     modal.style.display = "none";
});