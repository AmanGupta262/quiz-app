const questionData = [
    {
        question: ' HTML stands for -',
        a: 'HighText Machine Language',
        b: 'HyperText and links Markup Language',
        c: 'HyperText Markup Language',
        d: 'None of these',
        correct: 'c'
    },
    {
        question: 'The correct sequence of HTML tags for starting a webpage is -',
        a: 'Head, Title, HTML, body',
        b: 'HTML, Body, Title, Head',
        c: 'HTML, Head, Title, Body',
        d: 'HTML, Head, Title, Body',
        correct: 'c'
    },
    {
        question: 'Which of the following element is responsible for making the text bold in HTML?',
        a: '<pre>',
        b: '<a>',
        c: '<b>',
        d: '<br>',
        correct: 'c'
    },
    {
        question: ' Which of the following tag is used for inserting the largest heading in HTML?',
        a: '<h3>',
        b: '<h1>',
        c: '<h5>',
        d: '<h6>',
        correct: 'b'
    },
    {
        question: 'Which of the following tag is used to insert a line-break in HTML?',
        a: '<br>',
        b: '<a>',
        c: '<pre>',
        d: '<b>',
        correct: 'a'
    },
];

const question = document.querySelector("#ques");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const options = document.getElementsByName("ans");
const submit = document.querySelector("#submit");
const op = document.querySelector('.options');
let count = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAll();
    const currQues = questionData[count];
    question.innerText = currQues.question;
    a_text.innerText = currQues.a;
    b_text.innerText = currQues.b;
    c_text.innerText = currQues.c;
    d_text.innerText = currQues.d;
}
function checkSelected(){
    for(let i=0; i<options.length; i++){
        if(options[i].checked)
            return options[i].id;
    }
    return false;
}
function deselectAll(){
    options.forEach((option) => {
        option.checked = false;        
    });
}
submit.addEventListener('click', () => {
    const ans = checkSelected()
    count++;

    if(ans){
        if (count < questionData.length) {
            loadQuiz();
        }
        else {
            question.innerText = `You have finished with score ${score}/${questionData.length}`;
            op.style.display = 'none';
            submit.setAttribute('onclick', 'location.reload()');
            return;
        }
        if(ans === questionData[count-1].correct)
            score ++;
        
    }

});
