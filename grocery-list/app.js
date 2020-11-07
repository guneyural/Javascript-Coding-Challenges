const input = document.querySelector("input[type='text']");
const submitBtn = document.querySelector('.submit-btn');
const editBtn = document.querySelector('.edit-btn');
const list = document.querySelector('.list');
const errorField = document.querySelector('.error-field');

let getItemID = 0;
let isEdit = false;
let emptyArr = [];
let listData = 0;

function deleteItem(e) {
     const itemId = e.parentNode.id;
     e.parentNode.remove();

     for(let i = 0; i<listData.length; i++) {
          if(itemId == listData[i].id) {
               listData.splice(i, 1);
          }
     }
     
     localStorage.setItem('items', JSON.stringify(listData));
}

function editItem(e) {
     isEdit = true;
     submitBtn.style.display = "none";
     editBtn.style.display = "inline-block";

     getItemID = () => {
          return e.parentNode.id;
     }

     let updateItem = document.getElementById(getItemID());
     input.value = updateItem.innerText;
}

function editList(e) {
     const ID = getItemID();
     let updateItem = document.getElementById(ID);

     updateItem.innerHTML = `
          ${input.value}
          <span class="del-icon" onclick="editItem(this)">
               <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
               </svg>
          </span>
          <span class="del-icon" onclick="deleteItem(this)">
               <svg style="color:red" width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
               </svg>
          </span>
     `;

     for(let i = 0; i<listData.length; i++) {
          if(ID == listData[i].id) {
               listData[i].name = input.value;
          }
     }
     
     localStorage.setItem('items', JSON.stringify(listData));

     submitBtn.style.display = "inline-block";
     editBtn.style.display = "none";
     input.value = '';
     isEdit = false;
}

function addToList(e) {
     const ID = uuid();
     const listItem = input.value;
     
     if(listItem) {
          //ADD TO LOCAL STORAGE
          listData.push({
               id: ID,
               name: listItem
          });
          localStorage.setItem('items', JSON.stringify(listData));
          //ADD TO LOCAL STORAGE
          let p = document.createElement('p');
          p.style.padding= "10px";
          p.innerHTML = `
               ${listItem}
               <span class="del-icon" onclick="editItem(this)">
                    <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                         <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
               </span>
               <span class="del-icon" onclick="deleteItem(this)">
                    <svg style="color:red" width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                         <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
               </span>
          `;

          p.setAttribute('id', ID);
          list.appendChild(p);

     } else {
          if(!errorField.querySelector('p')) {
               errorField.style.display = "block";
               let errMsg = document.createElement('p');
               errMsg.innerText = "Please Enter A Value";
               errorField.appendChild(errMsg);
          }

          setTimeout(() => {
               errorField.childNodes.forEach(item => {
                    item.remove();
               });
          }, 1000);
     }

     input.value = "";
}

window.onload = function () {
     listData = this.localStorage.getItem('items') ? JSON.parse(this.localStorage.getItem('items')) : 0;

     if(listData == 0 || listData.length == 0) {
          this.localStorage.setItem('items', JSON.stringify(emptyArr));
     } else {
          listData.forEach(item => {
               let p = document.createElement('p');
               p.style.padding= "10px";
               p.innerHTML = `
                    ${item.name}
                    <span class="del-icon" onclick="editItem(this)">
                         <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                         </svg>
                    </span>
                    <span class="del-icon" onclick="deleteItem(this)">
                         <svg style="color:red" width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                         </svg>
                    </span>
               `;

               p.setAttribute('id', item.id);
               list.appendChild(p);
          });
     }
}

editBtn.addEventListener('click', e => {editList(e); e.preventDefault();});
submitBtn.addEventListener('click', (e) => {addToList(e); e.preventDefault();});
input.addEventListener('keydown', e => {
     if(e.keyCode == 13 && !isEdit) {
          addToList();
     }
});