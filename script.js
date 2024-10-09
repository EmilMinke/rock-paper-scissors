function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber <= 33) {
    return "rock";
  } else if (randomNumber <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}.`);
    return "tie";
  }

  const winCondition =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (winCondition) {
    console.log(
      `You win! ${
        humanChoice.at(0).toUpperCase() + humanChoice.slice(1)
      } beats ${computerChoice}!`
    );
    return "win";
  }

  console.log(
    `You lose! ${
      computerChoice.at(0).toUpperCase() + computerChoice.slice(1)
    } beats ${humanChoice}!`
  );
  return "lose";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    if (result === "win") {
      humanScore++;
    } else if (result === "lose") {
      computerScore++;
    }
  }

  console.log(
    `Final Scores - Human: ${humanScore}, Computer: ${computerScore}`
  );
  if (humanScore > computerScore) {
    console.log("Congratulations! You won!");
  } else if (computerScore > humanScore) {
    console.log("Sorry! The Computer is the winner!");
  } else {
    console.log("Oops! It seems like we have a tie!");
  }
}

playGame();

// Plan or pseudocode your solution.
// Write the code.
// Test your code to make sure it works.
