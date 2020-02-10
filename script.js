let quiz = [{
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
  question: "String values must be enclosed within _____ when being assign to variables.",
  choices: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses"
  ],
  answer: 2
},
{
  question: "A useful tool used during development and debugging for printing content to the debugger is:",
  choices: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log"
  ],
  answer: 3
}
];

let highscores = JSON.parse(localStorage.getItem('score')) || [];
let clock;
let index = 0;
let score = 0;

$("#scores").html(`<h4>High Scores:</h4>
<ul class="list-group"></ul>`)
highscores.forEach(score => {
$("#scores").append(`<ul><li class="list-group-item">${score}</li></ul>`);
})

let count = 60;
$("#timer").html(`<h4>Timer: ${count}</h4>`);
let header = "Coding Quiz Challenge";
$("#title").text(`${header}`);
let directions = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
$("#text").text(`${directions}`);
$("#text").append(`<div class="text-center"><button type="button" class="btn btn-primary">Start</button></div>`);

function startTimer() {
clock = setInterval(function () {
  count--;
  $("#timer").html(`<h4>Timer: ${count}</h4>`)
  if (count === 0) {
      clearInterval(clock);
      endGame()
  }
}, 1000);
}

function askQuestion(num) {
$('#question').empty();
$('#answers').empty();
$("#question").text(`${quiz[num].question}`);
$("#answers").append(`<li class="list-group-item" id=${0}>${quiz[num].choices[0]}</li>`);
$("#answers").append(`<li class="list-group-item" id=${1}>${quiz[num].choices[1]}</li>`);
$("#answers").append(`<li class="list-group-item" id=${2}>${quiz[num].choices[2]}</li>`);
$("#answers").append(`<li class="list-group-item" id=${3}>${quiz[num].choices[3]}</li>`);
}

$(document).on("click", 'li', function () {
if ($(this).text()[0] == quiz[index].answer + 1) {
  index++;
  alert('RIGHT!');
  if (index !== quiz.length) {
      askQuestion(index)
  } else {
      endGame()
  }

} else {
  count -= 10;
  alert('WRONG!');
}

})

endGame = () => {
clearInterval(clock);
score = count;
$('#question').empty();
$('#answers').empty();
$('#title').text(`GAME OVER! YOUR SCORE IS ${score}!`)
$('#question').append(`<h3>Enter Your Initials</h3><input id='initials'/><button id='submit'>Submit</button>`)
$('#answers')
}

$(document).on('click', '#submit', function () {
highscores.push(`${$('#initials').val().trim()}: ${score}`)
localStorage.setItem('score', JSON.stringify(highscores))
})

$("button").on("click", function () {
startTimer();
$("#text").text("");
askQuestion(index);

});
