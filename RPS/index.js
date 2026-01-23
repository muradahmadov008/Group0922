let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame(playerChoice) {
  console.log(" Player chose:", playerChoice);

  const computerChoice = getComputerChoice();
  console.log(" Computer chose:", computerChoice);

  let result = "";

  if (playerChoice === computerChoice) {
    result = "🤝 It's a Draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    result = "🎉 You Win!";
    playerScore++;
  } else {
    result = "😢 You Lose!";
    computerScore++;
  }

  document.getElementById("result").textContent =
    `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;

  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;

  console.log(" Score -> Player:", playerScore, "Computer:", computerScore);
}

function resetGame() {
  console.log(" Game reset");

  playerScore = 0;
  computerScore = 0;

  document.getElementById("playerScore").textContent = 0;
  document.getElementById("computerScore").textContent = 0;
  document.getElementById("result").textContent = "Choose your move!";
}
