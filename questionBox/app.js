document.querySelectorAll('.question-box').forEach((item)=>{
     item.addEventListener('click', (e) => {
         if(e.target.className == "open-box"){
               
               document.querySelectorAll('.question-box').forEach((question) => {
                    if(question != item) {
                         question.querySelector('button').innerHTML = "&darr;"; 
                         question.querySelector('.details').classList.remove('show-detail');
                         question.querySelector('.divider').classList.remove('divider-visible');
                    }
               });

               if(item.querySelector('.details').className != "details show-detail"){
                    item.querySelector('.details').classList.add('show-detail');
                    item.querySelector('.divider').classList.add('divider-visible');
                    e.target.innerHTML = "&uarr;";
               } else {
                    item.querySelector('.details').classList.remove('show-detail');
                    item.querySelector('.divider').classList.remove('divider-visible')
                    e.target.innerHTML = "&darr;";
               }
         }
     })
 })