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

function playRound(playerSelection,computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Scissors") {
            return "You win!";
        } else if (computerSelection == "Paper") {
            return "You lose!";
        } else {
           return "Tie!";
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Rock") {
            return "You win!";
        } else if (computerSelection == "Scissors") {
            return "You lose!";
        } else {
            return "Tie!";
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Paper") {
            return "You win!";
        } else if (computerSelection == "Rock") {
            return "You lose!";
        } else {
            return "Tie!";
        }
    } else {
        return "Invalid selection";
    }
    
}



const playerSelection = "Paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));