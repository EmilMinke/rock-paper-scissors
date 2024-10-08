// CREATE a variable that stores a random whole number between 1 and 100.
// CREATE a function that returns a string of either "rock", "paper" or "scissors"
// which depends on the stored number.


let randomNumber = Math.floor(Math.random() * 100) + 1;

function getComputerChoice() {
    if (randomNumber <= 33) {
        return "Rock"
    } else if (randomNumber <= 66 && randomNumber > 33) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.