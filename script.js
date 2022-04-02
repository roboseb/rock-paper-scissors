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
    console.log("*************************************");  
    console.log(playerSelection);      
    console.log(`Com has chosen ${computerSelection}!`)
    comChoiceInfo.innerText = `Com has chosen ${computerSelection}!`;

    


    //change player input to lower case
    playerSelection = playerSelection.toLowerCase();

    if (playerWins === 5 || comWins === 5) {
        return;
    }

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

const buttons = document.querySelectorAll('button');
let playerSelection;
let gameInfo = document.querySelector("#gameInfo");
let playerInfo = document.querySelector('#playerScore');
let computerInfo = document.querySelector('#computerScore');
let comChoiceInfo = document.querySelector("#comChoice");

const character = document.getElementById("character");
console.log(character);




let playerWins = 0;
let comWins = 0;
let comCurrentWins;

buttons.forEach(button => {
    
    if (button.id === "bounce") {
        return;
    }

    button.addEventListener('click' , () => {

        comCurrentWins = comWins;
        playerSelection = button.id;
        gameInfo.textContent = playRound(playerSelection, computerPlay());

        

        if (comWins > comCurrentWins) {
            terrify();
        } else {
            bounce();
        }

        playerInfo.textContent = `Player Score: ${playerWins}`;
        computerInfo.textContent = `Computer Score: ${comWins}`;
        if (playerWins === 5) {
            gameInfo.textContent = "That is it! The human has won!";
        } else if (comWins === 5) {
            gameInfo.textContent = "This is the end! Computer has vanquished their foe!";
        }
    });

});

const bounceButton = document.getElementById('bounce');
bounceButton.addEventListener('click' , bounce);

const terrifyButton = document.getElementById('terrify');
terrifyButton.addEventListener('click', terrify);

function bounce() {
    character.src = "images/alaiss happy.png"
    character.classList.remove('bounce', 'terrify');
    void character.offsetWidth;
    character.classList.add('bounce');    
}

function terrify() {
    for (let i = 0; i < 3; i++) {
        character.src = "images/alaiss sad.png"
        character.classList.remove('terrify', 'bounce');
        void character.offsetWidth;
        character.classList.add('terrify'); 
    }   
}










