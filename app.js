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

console.log(computerPlay());