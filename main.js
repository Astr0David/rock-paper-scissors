let computerselection;
let playerselection;
let thescore = 0;
let pcscore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const text = document.getElementById("textdisplay");
const text2 = document.getElementById("textdisplay2");
const h1Elements = document.querySelectorAll("#scoredisplay h1");
const result = document.getElementById("resultdisplay");

rock.addEventListener("click", function () {
  text.innerHTML = "Player chose rock.";
  playerselection = "rock";
  getComputerChoice();
  keepScore(playerselection, computerselection);
  showScore(thescore, pcscore);
  game(pcscore, thescore);
});

paper.addEventListener("click", function () {
  text.innerHTML = "Player chose paper.";
  playerselection = "paper";
  getComputerChoice();
  keepScore(playerselection, computerselection);
  showScore(thescore, pcscore);
  game(pcscore, thescore);
});

scissors.addEventListener("click", function () {
  text.innerHTML = "Player chose scissors.";
  playerselection = "scissors";
  getComputerChoice();
  keepScore(playerselection, computerselection);
  showScore(thescore, pcscore);
  game(pcscore, thescore);
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  num = Math.floor(Math.random() * 3);
  text2.innerHTML = "Computer chose " + choices[num] + ".";
  computerselection = choices[num];
}

function keepScore(playerselection, computerselection) {
  console.log(computerselection);
  if (playerselection == computerselection) {
    result.innerHTML = "You both went " + computerselection;
  } else if (playerselection == "rock" && computerselection == "paper") {
    result.innerHTML = "You lose! Paper beats rock...";
    pcscore += 1;
  } else if (playerselection == "paper" && computerselection == "scissors") {
    result.innerHTML = "You lose! Scissors beat paper...";
    pcscore += 1;
  } else if (playerselection == "scissors" && computerselection == "rock") {
    result.innerHTML = "You lose! Rock beats scissors...";
    pcscore += 1;
  } else if (playerselection == "rock" && computerselection == "scissorsr") {
    result.innerHTML = "You win! Rock beats scissors...";
    thescore += 1;
  } else if (playerselection == "paper" && computerselection == "rock") {
    result.innerHTML = "You win! Paper beats rock...";
    thescore += 1;
  } else if (playerselection == "scissors" && computerselection == "paper") {
    result.innerHTML = "You win! Scissors beat paper...";
    thescore += 1;
  }
}

function showScore(thescore, pcscore) {
  h1Elements[0].textContent = "User score: " + thescore;
  h1Elements[1].textContent = "Computer score: " + pcscore;
}

function game(pcscore, thescore) {
  if (pcscore == 5) {
    h1Elements[1].textContent = "Computer wins!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
  if (thescore == 5) {
    h1Elements[0].textContent = "User wins!";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}
