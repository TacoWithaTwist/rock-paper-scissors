const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    return choices[i];
}
function getPlayerChoice(){
    let input = prompt("What shall you choose? :");
    while (input.toUpperCase() != "ROCK" && input.toUpperCase() != "PAPER" && input.toUpperCase() != "SCISSORS"){
        input = prompt("What shall you choose? :");
    }
    return input;
}
function playRound(ComputerChoice, PlayerChoice) {
    if ((ComputerChoice.toUpperCase() === "ROCK") && (PlayerChoice.toUpperCase() === "SCISSORS")) {
        console.log("You Lose! " + ComputerChoice + " Beats " + PlayerChoice);
    } else if ((ComputerChoice.toUpperCase() === "PAPER") && (PlayerChoice.toUpperCase() === "ROCK")) {
        console.log("You Lose! " + ComputerChoice + " Beats " + PlayerChoice);
    } else if ((ComputerChoice.toUpperCase() === "SCISSORS") && (PlayerChoice.toUpperCase() === "PAPER")) {
        console.log("You Lose! " + ComputerChoice + " Beats " + PlayerChoice);
    } else if (ComputerChoice.toUpperCase() === PlayerChoice.toUpperCase()) {
        console.log("It's a tie!");
    } else {
        console.log("You Win! " + PlayerChoice + " Beats " + ComputerChoice);
    }
}
let ComputerChoice = getComputerChoice()
console.log(ComputerChoice)
let PlayerChoice = getPlayerChoice()
console.log(PlayerChoice)
playRound(ComputerChoice,PlayerChoice);