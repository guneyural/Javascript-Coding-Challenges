const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const fullname = document.querySelector("#fullname");
const role = document.querySelector("#role");
const content = document.querySelector("#content");
const image = document.querySelector('#personImg');

const people = [
     {
          fullname: 'Susan Smith',
          role: 'Web Developer',
          content: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
     },
     {
          fullname: 'Anna Johnson',
          role: 'Web Designer',
          content: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg'
     },
     {
          fullname: 'Peter Jones',
          role: 'Intern',
          content: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag',
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'          
     },
     {
          fullname: 'Bill Anderson',
          role: 'Boss',
          content: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
          image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
     }
];

let idx = 0;

function getUserData(index) {
     const userData = people[index];
     fullname.innerHTML = userData.fullname;
     role.innerHTML = userData.role;
     content.innerHTML = userData.content;
     image.src = userData.image;
}

window.onload = function () {
     this.getUserData(idx);
}

next.addEventListener('click', () => {
     if(idx < people.length - 1) {
          idx ++
     } else {
          idx = 0;
     }

     getUserData(idx);
});

prev.addEventListener('click', () => {
     if(idx < 1) {
          idx = people.length - 1;
     }else{
          idx --;
     }

     getUserData(idx);
});