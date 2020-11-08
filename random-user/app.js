const buttons = document.querySelectorAll('.user-card-buttons button');
const dataName = document.querySelector(".data-name");
const userDataText = document.querySelector(".user-data");
const img = document.querySelector('.user-card img');
const newUserButton = document.querySelector('.new-user-button');

const BASE_URL = "https://randomuser.me/api/";

let userData = {};

window.onload = async function () {
     userDataText.innerHTML = "Loading...";
     this.getUser();
}

async function getUser() {
     const getUser = await axios.get(BASE_URL);
     const user = getUser.data.results[0];

     userData = {
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          age: user.dob.age,
          address: `${user.location.postcode} ${user.location.state}`,
          phone: user.phone,
          password: user.login.password,
          img: user.picture.large
     };

     img.src = userData.img;
     dataName.innerText = "My name is";
     userDataText.innerHTML = userData.name;

     buttons.forEach(btn => {
          btn.addEventListener('click', e => {
               let targetVal = e.target.value;
               dataName.innerText = `My ${targetVal} is`;
               userDataText.innerHTML = userData[targetVal];
          });
     });
}

newUserButton.addEventListener('click', e => {
     userDataText.innerHTML = "Loading...";
     getUser();
});