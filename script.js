// Player and Computer selection function

const playerSelection = function () {
  let answer = prompt("Rock, Paper, Scissors?")?.toLowerCase();

  if (answer == "rock" || answer == "paper" || answer == "scissors") {
    return answer;
  } else {
    alert("Please choose between Rock, Paper or Scissors");
    return playerSelection();
  }
};

const computerSelection = function () {
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  let computerChoice;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
      console.log("Error");
  }

  return computerChoice;
};

// Helper function to capitalize first letter of a string

// Function for one round play

let playerScore = 0;
let computerScore = 0;

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);

    return playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);

    return playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);

    return playerScore++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);

    return computerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);

    return computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);

    return computerScore++;
  } else {
    return alert("It's a draw");
  }
};

// function for multiple games with score

const game = function () {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerSelection());
  }

  if (playerScore > computerScore) {
    return alert(`You win! Score is ${playerScore} to ${computerScore}`);
  } else if (computerScore > playerScore) {
    return alert(`You lose! Score is ${computerScore} to ${playerScore}`);
  } else {
    return alert(`It's a draw! Score is ${playerScore} to ${computerScore}`);
  }
};

game();
