let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;


function computerPlay (){

// Generates a random number 0, 1, 2 //

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0){
        return rock;
    } else if (randomNumber == 1){
        return paper;
    } else if (randomNumber == 2) {
        return scissors;
    } else {
        return 'Incorrect';
    }

}


function playRound (playerSelection, computerSelection) {

// Rock Selection  
    if (playerSelection == rock && computerSelection == scissors){
        playerScore++;
        roundNumber++;
    } else if (playerSelection == rock && computerSelection == paper) {
        computerSelection++;
        roundNumber++;
    } else (playerSelection == rock && computerSelection == rock){
        alert('Tie Game!');
        roundNumber++;
    }

// Paper Selection
if (playerSelection == paper && computerSelection == rock){
    playerScore++;
    roundNumber++;
} else if (playerSelection == paper && computerSelection == scissors) {
    computerSelection++;
    roundNumber++;
} else (playerSelection == paper && computerSelection == paper){
    alert('Tie Game!');
    roundNumber++;
}

//Scissors Selection
if (playerSelection == scissors && computerSelection == paper){
    playerScore++;
    roundNumber++;
} else if (playerSelection == scissors && computerSelection == rock) {
    computerSelection++;
    roundNumber++;
} else (playerSelection == scissors && computerSelection == scissors){
    alert('Tie Game!');
    roundNumber++;
}

}


function playerSelection (){

}

function computerSelection (){

}



const playerSelection = 'Rock';
const computerSelection =computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game(){


}

