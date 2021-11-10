playRPS ()

let wins = 0;
let losses = 0;
let ties = 0;

function playRPS () {
    let choice = prompt("Welcome to your game of Rock, Paper, Scissors. Please enter your choice of either R, P, or S");

console.log(choice);

let computerChoice = ["R", "P", "S"];
let randomChoice = Math.floor(Math.random()*computerChoice.length);
console.log(randomChoice)
let finalComputerAnswer = computerChoice[randomChoice]

if (choice === finalComputerAnswer) {
    console.log("It's a tie!");
    ties++;
    alert("It's a tie!");
} else if (choice === "P" && finalComputerAnswer === "R") {
    console.log("You win!");
    wins++;
    alert("You win! You're smarter than your computer!");
} else if (choice === "P" && finalComputerAnswer === "S") {
    console.log("You lost :(");
    losses++;
    alert("You lose lol");
} else if (choice === "S" && finalComputerAnswer === "P") {
    console.log("You win!");
    wins++;
    alert("You win! You're smarter than your computer!");
} else if (choice === "S" && finalComputerAnswer === "R") {
    console.log("You lost :(");
    losses++;
    alert("You lose lol");
} else if (choice === "R" && finalComputerAnswer === "S") {
    console.log("You win!");
    wins++;
    alert("You win! You're smarter than your computer!");
} else {
    console.log("You lost :(");
    losses++;
    alert("You lose lol");
}

alert(
    `Stats:
Wins: ${wins}
Losses: ${losses}
Ties: ${ties}`
);
alert("Wins: " + wins + "Losses: " + losses + "Ties: " + ties)

let replayChoice = confirm("Would you like to play again?");

if (replayChoice === true) {
    playRPS ()
} else {
    return;
}
}

