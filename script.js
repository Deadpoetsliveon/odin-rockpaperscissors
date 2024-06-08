let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random
    if (randomNumber < 0.33) {
        return "scissors";
    }
    else if (randomNumber > 0.33 && randomNumber < 0.67) {
        return "paper";
    }
    else {
        return "rock";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors? Choose wisely.")
    while (choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "scissors") {
        choice = prompt ("You must choose between Rock, Paper or Scissors. PLEASE!")
    }
    return choice.toLowerCase()
}

function gameLogic(computer, human) {
    if (computer == human) {
        console.log(`The computer chose ${computer}`);
        console.log(`The game is a tie! Not bad! Not great either.. \n Cheer up the score is ${humanScore} to ${computerScore} for you.`);
    }
    else if (computer == "rock" && human == "paper") {
        humanScore += 1; 
        console.log(`You won! (Yay?) The score is now ${humanScore} to ${computerScore} for you`);
    }
    else if (computer == "paper" && human == "scissors") {
        humanScore += 1; 
        console.log(`You won! (Yay?) The score is now ${humanScore} to ${computerScore} for you`);
    }
    else if (computer == "scissors" && human == "rock") {
        humanScore += 1; 
        console.log(`You won! (Yay?) The score is now ${humanScore} to ${computerScore} for you`);
    }
    else {
        console.log(`The computer chose ${computer}`);
        computerScore += 1;
        console.log(`You lost.. The score is now ${humanScore} to ${computerScore} for you`);
    }
}

function gameStart() {
    let i = 0
    while (i < 5) {
        gameLogic(getComputerChoice(), getHumanChoice());
        i +=1;
    }
    console.log(`The game is over. You won ${humanScore} out of 5 games.`);
}

gameStart();
