//---------------------------------------
//
//      Rock Paper Scissors Game
//      Project from: The Odin Project
//      Code by: Tim Wherry
//
//---------------------------------------

function playRound(playerSelection, computerSelection) {
    // your code here!
}

function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3)
    switch(roll)
    {
        case 0:
            return "rock";
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

console.log(getComputerChoice())
   
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));