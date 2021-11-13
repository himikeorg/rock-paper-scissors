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
   if (playerSelection != computerSelection) {
       return "you lose!";
   } else {
       return "you win!";
   }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));