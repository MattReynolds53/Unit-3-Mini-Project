let choice = prompt("Welcome to your game of Rock, Paper, Scissors. Please enter your choice of either R, P, or S");

console.log(choice);

let computerChoice = ["R", "P", "S"];
let finalComputerAnswer = Math.floor(Math.random()*computerChoice.length);
console.log(finalComputerAnswer)

if (choice === finalComputerAnswer) {
    console.log("It's a tie!");
} else if (choice === "P" && finalComputerAnswer === "R") {
    console.log("You win!");
} else if (choice === "P" && finalComputerAnswer === "S") {
    console.log("You lost :(");
} else if (choice === "S" && finalComputerAnswer === "P") {
    console.log("You win!");
} else if (choice === "S" && finalComputerAnswer === "R") {
    console.log("You lost :(");
} else if (choice === "R" && finalComputerAnswer === "S") {
    console.log("You win!");
} else {
    console.log("You lost :(");
}



// let result = prompt("Computer choice: " + Math.floor(Math.random()*computerChoice.length);

// console.log(result);

// // alert("values:" + choice + " " + computerAnswer);

// let replay = prompt("Would you like to play again?")

// console.log(replay)


