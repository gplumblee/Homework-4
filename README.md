# Homework-4
Multiple Choice Quiz

Pseudocode:
Write some questions and answers

When start button is clicked, count down from 60 seconds. (Every second will update the counter on the screen.)

For each question:
    ask the question
    display possible answers
    get player choice by click
    if wrong, subtract 5 seconds
    go to next question
    after last question, stop the timer

If timer reaches 0 before questions are answer, display "You Lost!" message.

Create an array of the five questions, and create an array of arrays of answers to the questions.
Then create an array of strings that point to the correct answer index.

Set a counter variable to 60.

Create a timer function that counts down to zero and stops.

HTML should have a button with a "start" ID that triggers the timer function.

Create a function to go through the array of questions one by one, show the question along with the four answers. Each answer will be a button. Question will have ID tag of "question" and the four buttons will have tags "a1", "a2", "a3", and "a4." Create a function called currentQuestion to assign the text content from the question and answer arrays.

If user does not select the correct answer, subtract ten seconds from the timer. When correct answer is selected, go on to the next question.

When questions are completed, stop the timer and display time as the score.


