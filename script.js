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
let questions = ["q1", "q2", "q3", "q4", "q5"];
let answers = [
  ["a1", "a2", "a3", "a4"],
  ["a1", "a2", "a3", "a4"],
  ["a1", "a2", "a3", "a4"]
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
  askQuestions();
});

function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    askQuestion(i);
  }
}

// Create a button for each answer (four buttons)

function askQuestion(n) {
    document.getElementById("question").textContent = questions[n];
    document.getElementById("a1").textContent = answers[n][0];
    document.getElementById("a2").textContent = answers[n][1];
    document.getElementById("a3").textContent = answers[n][2];
    document.getElementById("a4").textContent = answers[n][3];
}


//
// current questions starts at 0
// askQuestion(currentQuestion)
//  when they click a button decide whether they got it right or not
// add 1 to current question
// if not all questions finished
//  askQuestion(currentQuestion)
// 