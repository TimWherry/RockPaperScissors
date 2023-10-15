//---------------------------------------
//
//      Rock Paper Scissors Game
//      Project from: The Odin Project
//      Code by: Tim Wherry
//
//---------------------------------------

function playRound(playerSelection, computerSelection) {
    let roundResult = NaN
    if(playerSelection == "rock")
    {
        if(computerSelection == "rock")
        {
            roundResult = 0
        }
        if(computerSelection == "paper")
        {
            roundResult = -1
        }
        if(computerSelection == "scissors")
        {
            roundResult = 1
        }
    }
    if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
        {
            roundResult = 1
        }
        if(computerSelection == "paper")
        {
            roundResult = 0
        }
        if(computerSelection == "scissors")
        {
            roundResult = -1
        }
    }
    if(playerSelection == "scissors")
    {
        if(computerSelection == "rock")
        {
            roundResult = -1
        }
        if(computerSelection == "paper")
        {
            roundResult = 1
        }
        if(computerSelection == "scissors")
        {
            roundResult = 0
        }
    }
    return roundResult
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

function translatePlayerChoiceToGameOptions(playerSelection)
{
    if(playerSelection.toUpperCase() == "ROCK")
    {
        return "rock"
    }
    if(playerSelection.toUpperCase() == "PAPER")
    {
        return "paper"
    }
    if(playerSelection.toUpperCase() == "SCISSORS")
    {
        return "scissors"
    }
    return null
}

function playGame()
{
    const playerSelection = prompt("Rock, paper, or scissors?")
    playerSelection = translatePlayerChoiceToGameOptions(playerSelection)

    const computerSelection = getComputerChoice();

    const playerWon = playRound(playerSelection, computerSelection);
}
   
//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));