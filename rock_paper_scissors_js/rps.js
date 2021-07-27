let result = ["", 0, 0]; //winner statement, your score, computer score

function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  }
  else if (choice === 1) {
    return "paper";
  }
  else if (choice === 2) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection, result) {
  console.log(playerSelection);
  console.log(computerSelection);

  if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    result[0] = "You Won! Rock Beats Scissors";
    result[1]++;
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    result[0] = "You Won! Scissors Cuts Paper";
    result[1]++;
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    result[0] = "You Won! Paper Covers Rock";
    result[1]++;
  }
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    result[0] = "You Lost! Rock Beats Scissors";
    result[2]++;
  }
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    result[0] = "You Lost! Scissors Cuts Paper";
    result[2]++;
  }
  else if (playerSelection === "rock" && computerSelection === "paper") {
    result[0] = "You Lost! Paper Covers Rock";
    result[2]++;
  }
  else if (playerSelection === "rock" && computerSelection === "rock") {
    result[0] = "You Tied! You both had Rock";
  }
  else if (playerSelection === "paper" && computerSelection === "paper") {
    result[0] = "You Tied! You both had Paper";
  }
  else if (playerSelection === "scissors" && computerSelection === "scissors") {
    result[0] = "You Tied! You both had Scissors";
  }
  else {
    result[0] = "there was some mistake";
  }
  return result;
}

function getInput(event) {
  console.log(event.target.id);
  let playerSelection = event.target.id;
  playRounds(playerSelection);
}

function scoreBoard(result) {
  console.log(result[0] + " Youre Score: " + result[1] + " Computer Score: " + result[2]);
}

function playRounds(playerSelection) {

  let computerSelection = computerPlay();
  console.log(result);
  result = playRound(playerSelection, computerSelection, result);
  scoreBoard(result);
  if (result[1] + result[2] == 5) {
    console.log("test");
    const input = document.querySelectorAll("input");
    input.forEach(input => { input.removeEventListener("click", getInput) });
  }
}

function play() {
  const input = document.querySelectorAll("input");
  input.forEach(input => { input.addEventListener("click", getInput) });
}

play();