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
let questions = [
  "Commonly used data types DO NOT include:",
  "The condition in an if/else statement is enclosed within_____.",
  "Arrays in JavaScript can be used to store_____.",
  "String values must be enclosed within _____ when being assign to variables.",
  "A useful tool used during development and debugging for printing content to the debugger is:"
];
let answers = [
  ["1. string", "2. booleans", "3. alerts", "4. numbers"],
  ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
  [
    "1. numbers and strings",
    "2. other arrays",
    "3. booleans",
    "4. all of the above"
  ],
  ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
  ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"]
];
let correct = [
  "3. alerts",
  "3. parentheses",
  "4. all of the above",
  "3. quotes",
  "4. console.log"
];

let counter = 60;

function startTimer() {
  let handle = setInterval(function() {
    let timerDiv = document.getElementById("timer");
    timerDiv.textContent = counter;
    counter--;
    if (counter === 0) {
      clearInterval(handle);
    }
  }, 1000);
}

let start = document.getElementById("start");
start.addEventListener("click", function() {
  startTimer();
  askQuestion();
});

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    currentQuestion(i);
  }
}

// Create a button for each answer (four buttons)

function currentQuestion(index) {
  document.getElementById("question").textContent = questions[index];
  document.getElementById("a1").textContent = answers[index][0];
  document.getElementById("a2").textContent = answers[index][1];
  document.getElementById("a3").textContent = answers[index][2];
  document.getElementById("a4").textContent = answers[index][3];
}
// While counter is greater than 0:
//   Ask current question starting with index 0
//   When answer button is clicked:
//     if correct, add 1 to current question
//     if incorrect, subtract 10 from counter and repeat loop
//   When all question are asked, stop timer and display score.
