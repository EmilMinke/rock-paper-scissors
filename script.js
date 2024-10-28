const WINNING_SCORE = 5;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const resultsDiv = document.getElementById("results");
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(humanChoice, computerChoice);
  updateScore(result.winnerType, result.message);
}

function determineWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return {
      message: `It's a tie! Both chose ${humanChoice}.`,
      winnerType: "tie",
    };
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const isHumanWinner = winConditions[humanChoice] === computerChoice;

  return {
    message: isHumanWinner
      ? `You win! ${capitalize(humanChoice)} beats ${computerChoice}!`
      : `You lose! ${capitalize(computerChoice)} beats ${humanChoice}!`,
    winnerType:
      winConditions[humanChoice] === computerChoice ? "human" : "computer",
  };
}

function clearDisplay() {
  resultsDiv.innerHTML = "";
}

function displayResult(message) {
  const resultMessage = document.createElement("p");
  resultMessage.textContent = message;
  resultsDiv.appendChild(resultMessage);
}

function updateScore(winnerType, resultMessage) {
  if (winnerType === "human") {
    humanScore++;
  } else if (winnerType === "computer") {
    computerScore++;
  }

  clearDisplay();
  displayResult(resultMessage);
  displayResult(
    `Current Scores - Human: ${humanScore}, Computer: ${computerScore}`
  );

  if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    displayFinalWinner();
    resetScores();
  }
}

function displayFinalWinner() {
  const finalMessage =
    humanScore > computerScore
      ? "Congratulations! You Won!"
      : "Sorry! The Computer won the game!";

  displayResult(finalMessage);
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
}

function capitalize(word) {
  return word.at(0).toUpperCase() + word.slice(1);
}

document
  .getElementById("rockButton")
  .addEventListener("click", () => playRound("rock"));

document
  .getElementById("paperButton")
  .addEventListener("click", () => playRound("paper"));

document
  .getElementById("scissorsButton")
  .addEventListener("click", () => playRound("scissors"));
