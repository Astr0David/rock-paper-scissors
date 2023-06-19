let computerselection;
let playerselection;

function getComputerChoice () {
    const choices = ["rock","paper","scissors"]; 
    num = Math.floor(Math.random()*3)
    console.log("Computer chose " + choices[num])
    computerselection = choices[num]
}

function getPlayerChoice () {
    playerselection = prompt("Rock, Paper or Scissors?")
    console.log("Player chose " + playerselection)
}

function rockPaperScissors (playerselection, computerselection){
    let playersel = playerselection.toLowerCase()
    if (playersel === computerselection) {
        console.log("You both went " + computerselection)
    }
    if (playersel == "rock" && computerselection == "paper") {
        console.log("You lose! Paper beats rock...")
    }
    if (playersel == "paper" && computerselection == "scissors") {
        console.log("You lose! Scissors beat paper...")
    }
    if (playersel == "scissors" && computerselection == "rock") {
        console.log("You lose! Rock beats scissors...")
    }
    if (playersel == "rock" && computerselection == "scissorsr") {
        console.log("You win! Rock beats scissors...")
    }
    if (playersel == "paper" && computerselection == "rock") {
        console.log("You win! Paper beats rock...")
    }
    if (playersel == "scissors" && computerselection == "paper") {
        console.log("You win! Scissors beat paper...")
    }
}


function game () {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        rockPaperScissors(playerselection,computerselection)
    }
}

game()