// CREATE a variable that stores a random whole number between 1 and 100.
// CREATE a function that returns a string of either "Rock", "Paper" or "Scissors"
// which depends on the stored number.
// CREATE a function that takes a user input and returns it.
// The user input is their choice between "Rock", "Paper" and "Scissors"
// CREATE two variables for human score and computer score and initialize them with the value of 0;

const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

let humanScore = 0;
let computerScore = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

function getComputerChoice() {
    if (randomNumber <= 33) {
        return ROCK;
    } else if (randomNumber <= 66 && randomNumber > 33) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function getHumanChoice(){
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput;
}

console.log(getHumanChoice());

// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.