const buttons = document.querySelectorAll("button");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function computerPlay() {
  computerNum = Math.floor(Math.random() * 3) + 1;
  if (computerNum < 2) {
    return "Rock";
  } else if (computerNum < 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

const compPick = document.querySelector(".compPick");
const winOrLose = document.querySelector(".winOrLose");
const userTotal = document.querySelector(".userTotal");
const compTotal = document.querySelector(".compTotal");
const roundWinner = document.querySelector(".roundWinner");

function playRound(input) {
  let computerSelection = computerPlay();
  let playerSelection = input;
  if (playerSelection.toUpperCase() === "ROCK") {
    if (computerSelection == "Scissors") {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "You win!";
      return "win";
    } else if (computerSelection == "Paper") {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "You lose!";
      return "lose";
    } else {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "Tie!";
      return "tie";
    }
  } else if (playerSelection.toUpperCase() === "PAPER") {
    if (computerSelection == "Rock") {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "You win!";
      return "win";
    } else if (computerSelection == "Scissors") {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "You lose!";
      return "lose";
    } else {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "Tie!";
      return "tie";
    }
  } else if (playerSelection.toUpperCase() === "SCISSORS") {
    if (computerSelection == "Paper") {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "You win!";
      return "win";
    } else if (computerSelection == "Rock") {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "You lose!";
      return "lose";
    } else {
      compPick.textContent = "Computer chose: " + computerSelection;
      winOrLose.textContent = "Tie!";
      return "tie";
    }
  } else {
    return "Invalid selection";
  }
}

let userScore = 0;
let compScore = 0;

function game(rps) {
  if (userScore < 5 && compScore < 5) {
    let result = playRound(rps);
    if (result === "win") {
      userScore++;
    } else if (result === "lose") {
      compScore++;
    }
    userTotal.textContent = "Your total: " + userScore;
    compTotal.textContent = "Computer score: " + compScore;
  } else if (userScore === 5) {
    roundWinner.textContent = "You win!";
  } else if (compScore === 5) {
    roundWinner.textContent = "You lose!";
  }
}

rock.addEventListener("click", () => {
  game("rock");
});
paper.addEventListener("click", () => {
  game("paper");
});
scissors.addEventListener("click", () => {
  game("scissors");
});
