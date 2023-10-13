let myQuestions = [
    {
        question: "1. Which layer of databases deals with the physical storage and organization of data on disk?",
        answer: {
            a: "Physical layer",
            b: "Management layer",
            c: "Both a and b",
            d: "None of the above"
        },
        correctAnswer: "a"
    },

    {
        question: "2. Which layer of databases is responsible for enforcing data integrity and security?",
        answer: {
            a: "Physical layer",
            b: "Management layer",
            c: "Both a and b",
            d: "None of the above"
        },
        correctAnswer: "b"
    },

    {
        question: "3. What are the three main components of the ER model?",
        answer: {
            a: "Entities, attributes, and queries",
            b: "Tables, columns, and keys",
            c: "Entities, attributes, and relationships",
            d: "Schemas, indexes, and constraints"
        },
        correctAnswer: "c"
    },

];

// Grabing the HTML Elements
let questionEl = document.getElementById("questions-el");
let scoreDisplay = document.getElementById("score");
let submitBtn = document.getElementById("submit");
let scorePopUp = document.getElementById("score-container")
let scoreObtained = document.getElementById("score-obtained")
let scoreBoxClose = document.getElementById("score-box-close")

// Build Quiz Function
function buildQuiz() {

    myQuestions.forEach((questions, questionNum) => {
        questionEl.innerHTML += `${questions.question} <br>`
        questionEl.innerHTML +=
            `<label>
                <input type = "radio" name="option${questionNum}" value="a" class="radio">
                <span class="ans">${questions.answer.a}</span>
            </label> <br>`
        questionEl.innerHTML +=
            `<label>
                <input type = "radio" name="option${questionNum}" value="b" class="radio">
                <span class="ans">${questions.answer.b}</span>
            </label> <br>`
        questionEl.innerHTML +=
            `<label> 
                <input type = "radio" name="option${questionNum}" value="c" class="radio">
                <span class="ans">${questions.answer.c}</span> 
            </label> <br>`
        questionEl.innerHTML +=
            `<label> 
                <input type = "radio" name="option${questionNum}" value="d" class="radio">
                <span class="ans">${questions.answer.d}</span> 
            </label> <br>`
    });
};

// Calling buildQuiz Function
buildQuiz();

submitBtn.addEventListener("click", () => {
    submitBtn.disabled = true
    submitBtn.style.opacity = "0.7"
    submitBtn.style.cursor = "not-allowed"
    let score = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        let selectedOption = document.querySelector(`input[name="option${questionNumber}"]:checked`);
        let selectedAnswer = selectedOption ? selectedOption.value : null;      // selectedOption ? means it is checked or not
        
        // Checking total score
        if (selectedAnswer === currentQuestion.correctAnswer) {
            score++;
        }
        scoreDisplay.innerHTML = `${score} out of ${myQuestions.length} correct`;
        submitBtn.textContent = "Submitted";
        
        let options = document.querySelectorAll(`input[name="option${questionNumber}"]`); // for changing the color of ans
        options.forEach((option) => {
            if (selectedOption && option.value === currentQuestion.correctAnswer) {
                option.parentElement.style.color = "#05b405";
            } else {
                option.parentElement.style.color = "#000000";
            }

            if (option.value === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
                option.parentElement.style.color = "red";
            }
        });

    });

    scorePopUp.style.display = "block"
    scoreObtained.textContent = `You scored ${score} out of ${myQuestions.length}`
});

// Closing Message
scoreBoxClose.onclick = () => {
    scorePopUp.style.display = "none"
}

// My Account show hide on hover
let myAccountItem = document.querySelector(".my-account-li");
let myAccount = document.querySelector(".my-account");

myAccount.addEventListener("click", () => {
    if (myAccountItem.style.visibility == "visible") {
        myAccountItem.style.visibility = "hidden";
    }
    else {
        myAccountItem.style.visibility = "visible";
    }
});

myAccount.addEventListener("mouseover", () => {
    myAccountItem.style.visibility = "visible";
});

myAccount.addEventListener("mouseout", () => {
    myAccountItem.style.visibility = "hidden";
});
