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

// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.