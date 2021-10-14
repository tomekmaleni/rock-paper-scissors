const playerSelection = function () {
    return String(prompt("Enter rock, paper or scissors").toLowerCase())
}

function computerSelection() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return String("rock")
        case 1:
            return String("paper")
        case 2:
            return String("scissors")
    }
}

let message = "It's not a tie";
function playRound(playerSelection, computerSelection) {
    const player = playerSelection();
    const computer = computerSelection();
    if (player === computer) {
        message = "It's a tie! You both picked " + player + "!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        message = "You won! " + player[0].toUpperCase() + player.substring(1) + " beats " + computer + "!";
    } else if (
        (player === "scissors" && computer === "rock") ||
        (player === "rock" && computer === "paper") ||
        (player === "paper" && computer === "scissors")
    ) {
        message = "You lost! " + computer[0].toUpperCase() + computer.substring(1) + " beats " + player + "!";
    } else {
        message = "Invalid input! Try again!";
    }
    console.log("NEW ROUND")
    console.log(player);
    console.log(computer);
    alert(message);
    playRound(playerSelection, computerSelection);
}

playRound(playerSelection, computerSelection);
