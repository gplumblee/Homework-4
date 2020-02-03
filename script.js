// Write some questions and answers
// When click is clicked, start timer at 60 seconds. (Every second will update the counter on the screen.)
// For each question:
//     ask the question
//     display possible answers
//     get player choice by click
//     if wrong, subtract 5 seconds
//     go to next question
//     after last question, stop the timer
// If timer reaches 0 before questions are answer, display "You Lost!" message.

let mainQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: [
      "1. string", 
      "2. booleans", 
      "3. alerts", 
      "4. square"
    ],
    answer: 2
  },
  {
    question: "The condition in an if/else statement is enclosed within_____.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets"
    ],
    answer: 2
  },
  {
    question: "Arrays in JavaScript can be used to store_____.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ],
    answer: 3
  },
  {
    question:
      "String values must be enclosed within _____ when being assign to variables.",
    choices: [
      "1. commas", 
      "2. curly brackets", 
      "3. quotes", 
      "4. parentheses"
    ],
    answer: 2
  },
  {
    question:
      "A useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log"
    ],
    answer: 3
  }
];

let counter = 60;
let timerDiv = document.getElementById("timer");
timerDiv.textContent = "Timer: " + counter;

function startTimer() {
  let clock = setInterval(function() {
    counter--;
    if (counter === 0) {
      clearInterval(clock);
    }
  }, 1000);
}

let start = document.getElementById("start");
start.addEventListener("click", function() {
  startTimer();
  for (let i = 0; i < mainQuestions.length; i++) {
    askQuestion(i);
  }
});

function askQuestion() {
  currentQuestion(i);
  if (!currentAnswr.addEventListener("click")) {
    counter -= 10;
  }
}

// Create a button for each answer (four buttons)

function currentQuestion(index) {
  document.getElementById("question").textContent = mainQuestions[index].question;
  document.getElementById("choice1").textContent = mainQuestions[index].choices[0];
  document.getElementById("choice2").textContent = mainQuestions[index].choices[1];
  document.getElementById("choice3").textContent = mainQuestions[index].choices[2];
  document.getElementById("choice4").textContent = mainQuestions[index].choices[3];
}
// While counter is greater than 0:
//   Ask current question starting with index 0
//   When answer button is clicked:
//     if correct, add 1 to current question
//     if incorrect, subtract 10 from counter and repeat loop
//   When all questions are asked, stop timer and display score.

// see Week 02/Day 05/Activity 18 for seeing what button user selects
