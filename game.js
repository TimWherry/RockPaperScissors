//---------------------------------------
//
//      Rock Paper Scissors Game
//      Project from: The Odin Project
//      Code by: Tim Wherry
//
//---------------------------------------


const NUMBER_OF_ROUNDS = 5


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
    // let playerSelection = prompt("Rock, paper, or scissors?")
    // if(playerSelection === null)
    // {
    //     console.error("There was a problem with the player's selection.")
    //     return null
    // }
    // playerSelection = translatePlayerChoiceToGameOptions(playerSelection)

    // const computerSelection = getComputerChoice();
    // console.log(computerSelection + " vs " + playerSelection)

    // const gameResult = playRound(playerSelection, computerSelection);
    // if(gameResult === NaN)
    // {
    //     console.error("There was a problem with the results.")
    //     return NaN
    // }
    // console.log(gameResult)
    // if(gameResult > 0)
    // {
    //     console.log("Player Won")
    // }
    // else if(gameResult === 0)
    // {
    //     console.log("It's a tie")
    // }
    // else 
    // {
    //     console.log("Computer Won")
    // }
    // return gameResult
}

let playerWins = 0;
let roundTies = 0;
let computerWins = 0;

function playerChoice(button) {
    playerSelection = translatePlayerChoiceToGameOptions(button.textContent);
    const computerSelection = getComputerChoice();
    console.log(computerSelection + " vs " + playerSelection);
    const gameResult = playRound(playerSelection, computerSelection);
    if(gameResult > 0)
    {
        playerWins++;
        document.querySelector("#round").textContent = "Player Won: " + playerSelection + " against " + computerSelection + ".";
    }
    else if(gameResult < 0) 
    {
        computerWins++;
        document.querySelector("#round").textContent = "Computer Won: " + computerSelection + " against " + playerSelection + ".";
    }
    else
    {
        roundTies++;
        document.querySelector("#round").textContent = "It's a tie!";
    }
}

console.log("The player won " + playerWins + " times!")
console.log("There were " + roundTies + " ties.")
console.log("The computer won " + computerWins + " times...")