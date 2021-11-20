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

function playRound() {
  let computerSelection = computerPlay();

  if (playerSelection.toUpperCase() === "ROCK") {
    if (computerSelection == "Scissors") {
      console.log("Computer chose: " + computerSelection);
      console.log("You win!");
    } else if (computerSelection == "Paper") {
      console.log("Computer chose: " + computerSelection);
      console.log("You lose!");
    } else {
      console.log("Computer chose: " + computerSelection);
      console.log("Tie!");
    }
  } else if (playerSelection.toUpperCase() === "PAPER") {
    if (computerSelection == "Rock") {
      console.log("Computer chose: " + computerSelection);
      console.log("You win!");
    } else if (computerSelection == "Scissors") {
      console.log("Computer chose: " + computerSelection);
      console.log("You lose!");
    } else {
      console.log("Computer chose: " + computerSelection);
      console.log("Tie!");
    }
  } else if (playerSelection.toUpperCase() === "SCISSORS") {
    if (computerSelection == "Paper") {
      console.log("Computer chose: " + computerSelection);
      console.log("You win!");
    } else if (computerSelection == "Rock") {
      console.log("Computer chose: " + computerSelection);
      console.log("You lose!");
    } else {
      console.log("Computer chose: " + computerSelection);
      console.log("Tie!");
    }
  } else {
    return "Invalid selection";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playerSelection = button.id;
    playRound();
  });
});

// function game() {
//     let score = 0;
//     for (var i = 1; i < 6; i++){
//         let result = playRound();
//         if (result == "You win!") {
//             console.log(result);
//             score++
//         } else if (result == "You lose!" || "Tie!") {
//             console.log(result);
//         } else {
//             console.log(result);
//         }
//         console.log("Your score is: " + score + "/5");
//     }
//     if (score > 2) {
//         console.log("You beat the computer!");
//     } else {
//         console.log("The computer beat you!");
//     }
//  }

// console.log(game());
