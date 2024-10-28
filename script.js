function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const resultsDiv = document.getElementById("results");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const choiceMessage = `You chose: ${humanChoice}, Computer chose: ${computerChoice}`;
  displayResult(choiceMessage);

  if (humanChoice === computerChoice) {
    displayResult(`It's a tie! Both chose ${humanChoice}.`);
    return "tie";
  }

  const winCondition =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (winCondition) {
    displayResult(
      `You win! ${capitalize(humanChoice)} beats ${computerChoice}!`
    );
    return "win";
  }

  displayResult(`You lose! ${capitalize(computerChoice)} beats ${humanChoice}!`);
  return "lose";
}

function displayResult(message) {
  const resultMessage = document.createElement("p");
  resultMessage.textContent = message;
  resultsDiv.appendChild(resultMessage);
}

function updateScore(result) {
  if (result === "win") {
    humanScore++;
  } else if (result === "lose") {
    computerScore++;
  }

  const scoreMessage = `Current Scores - Human: ${humanScore}, Computer: ${computerScore}`;
  resultsDiv.innerHTML = `<p>${scoreMessage}</p>`;

  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore > computerScore ? "Congratulations! You won!" : "Sorry! Losercity, the Computer won the game!";
    displayResult(winner);
    humanScore = 0;
    computerScore = 0;
  }
}

function capitalize(word) {
  return word.at(0).toUpperCase() + word.slice(1);
}

document.getElementById("rockButton").addEventListener("click", () => {
  const result = playRound("rock", getComputerChoice());
  updateScore(result);
});


document.getElementById("paperButton").addEventListener("click", () => {
  const result = playRound("paper", getComputerChoice());
  updateScore(result);
});


document.getElementById("scissorsButton").addEventListener("click", () => {
  const result = playRound("scissors", getComputerChoice());
  updateScore(result);
});