const quizes = [
     {
          index: 0,
          content: "What is 5 times 8 ?",
          answers: {a:80, b:45, c:40, d:13},
          correct: 'c'
     },
     {
          index: 1,
          content: "What is 10 plus 5 ?",
          answers: {a: 50,b: 2,c: 5,d: 15},
          correct: 'd'
     },
     {
          index: 2,
          content: "What is the name of 3.14 ?",
          answers: {a: "Archimedes' constant π",b: "Euler's number e",c: "The imaginary unit i",d: "The golden ratio φ"},
          correct: 'a'
     }
];

let idx = 0;
let point = 0;

const resultModal = document.querySelector('.result-modal');
const question = document.querySelector('#question');
const options = document.querySelectorAll("input[type='radio']");
const allLabels = document.querySelectorAll("label");
const submit = document.querySelector("form input[type='submit']");

const answers = [...options];
const labels = [...allLabels];

//get question from array of objects 
let currentQuestion = quizes[idx];
//get the current question in html document
let currentHtmlQuestion = answers[idx];

const getQuestions = () => {
     question.innerText = currentQuestion.content;
     labels[0].innerText = currentQuestion.answers.a;
     labels[1].innerText = currentQuestion.answers.b;
     labels[2].innerText = currentQuestion.answers.c;
     labels[3].innerText = currentQuestion.answers.d;
}

const removeChecked = () => {
     answers.forEach((opt) => {
          opt.checked = false;
     });
}

getQuestions();

submit.addEventListener("click", (e) => {
     e.preventDefault();
     idx ++;
     
     if(document.querySelector(`input[type='radio'][value='${currentQuestion.correct}']`).checked) {
         point ++;
         removeChecked();
     }
     if(idx > 2) {
          getQuestions();
          submit.value = "Finish Quiz";
          removeChecked();
          
          document.querySelector("#point").innerText = point;
          document.querySelector("#quizLength").innerText = quizes.length;
          resultModal.style.display = "block";
     } else {
          currentQuestion = quizes[idx];
          currentHtmlQuestion = answers[idx];
          
          getQuestions();
          
          if(document.querySelector(`input[type='radio'][value='${currentQuestion.correct}']`).checked) {
               point ++;
          }

          removeChecked();
     }
     console.log(point);
});
