//try to assign rock paper scissors to 1, 2, 3.
//have the program randomly pick one of the numbers. 
//Return the associated String.

function computerPlay() {
   computerNum = Math.floor(Math.random() * 3) + 1;
   if (computerNum < 2) {
       return "Rock";
   } else if (computerNum < 3) {
       return "Paper";
   } else {
       return "Scissors";
   }
};

function playRound() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = computerPlay();

    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection == "Scissors") {
            console.log("Computer chose: " + computerSelection);
            return "You win!";
        } else if (computerSelection == "Paper") {
            console.log("Computer chose: " + computerSelection);
            return "You lose!";
        } else {
            console.log("Computer chose: " + computerSelection);
            return "Tie!";
        }
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection == "Rock") {
            console.log("Computer chose: " + computerSelection);
            return "You win!";
        } else if (computerSelection == "Scissors") {
            console.log("Computer chose: " + computerSelection);
            return "You lose!";
        } else {
            console.log("Computer chose: " + computerSelection);
            return "Tie!";
        }
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection == "Paper") {
            console.log("Computer chose: " + computerSelection);
            return "You win!";
        } else if (computerSelection == "Rock") {
            console.log("Computer chose: " + computerSelection);
            return "You lose!";
        } else {
            console.log("Computer chose: " + computerSelection);
            return "Tie!";
        }
    } else {
        return "Invalid selection";
    }
    
}

function game() {
    let score = 0;
    for (var i = 1; i < 6; i++){
        let result = playRound();
        if (result == "You win!") {
            console.log(result);
            score++
        } else if (result == "You lose!" || "Tie!") {
            console.log(result);
        } else {
            console.log(result);
        }
        console.log("Your score is: " + score + "/5");
    }
    if (score > 2) {
        console.log("You beat the computer!");
    } else {
        console.log("The computer beat you!");
    }
 }

console.log(game());
