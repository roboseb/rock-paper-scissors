//Returns a random choice of either rock, paper, or 
//scissors for the computer.
function computerPlay() {
    let comChoices = ["rock","paper","scissors"];
    let comPick = comChoices[Math.floor(Math.random()*3)];
    return comPick;
}

//Plays a round of roshambo taking player input,
//and returns a string declaring the winner.
function playRound(playerSelection, computerSelection) {
    console.log(`Com has chosen ${computerSelection}!`)

    //change player input to lower case
    playerSelection = playerSelection.toLowerCase();

    //Tests to find a winner of roshambo.
    if (playerSelection != computerSelection) {

        if (playerSelection === "rock" && computerSelection === "scissors") {
            playerWins ++;
            return "You win! Rock beats scissors!";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerWins ++;
            return "You win! Paper beats rock!"; 
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerWins ++;
            return "You win! Scissors beats paper!"; 
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            comWins ++;
            return "You lose! Rock beats scissors!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            comWins ++;
            return "You lose! Paper beats rock!"; 
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            comWins ++;
            return "You lose! Scissors beats paper!"; 
        }

    } else {
        return "It's a tie! You both chose the same!";
    }
}

//Plays 5 rounds of roshambo.
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Choose your tool!"), computerPlay()));
        console.log(`Player has ${playerWins} wins.`);
        console.log(`Computer has ${comWins} wins.`);

    }

}

let playerWins = 0;
let comWins = 0;

game();


