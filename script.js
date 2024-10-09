
let humanScore = 0;
let computerScore = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;

function getComputerChoice(computerChoice) {
    return (computerChoice <= 33) ? "Rock" :
    (computerChoice <= 66 && computerChoice > 33) ? "Paper" :
    "Scissors";
}

function getHumanChoice(){
    let userInput = prompt("Rock, Paper or Scissors?");
    return userInput;
}

// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.