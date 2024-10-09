let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return (randomNumber <= 33) ? "rock" :
            (randomNumber <= 66) ? "paper" :
            "scissors";
}

function getHumanChoice(){
    const humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice;
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`)
        return;
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice.at(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice.at(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`);
    }
}

playRound(getHumanChoice(), getComputerChoice());
console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);

// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.