//create a new function named getComputerChoice
//write the code so that getComputerChoice will randomly return one of the following string values: "rock", "paper" or "scissors".

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//write the logic to get the human choice

function getHumanChoice() {
    const validChoices = { rock: true, paper: true, scissors: true }; // Object for validation
    let choice = prompt("Please enter your choice (rock, paper, or scissors):");

    if (choice) {
        choice = choice.toLowerCase(); // Convert to lowercase for consistency
    }

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice; // Return the choice if it matches any valid option
    } else {
        return "Invalid choice. Please refresh and try again with 'rock', 'paper', or 'scissors'.";
    }
}
console.log(getHumanChoice())
//declare the players score variables
// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

//write the logic to play a single round

// Declare and initialize score variables in the global scope
let humanScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); // Random number between 0 and 2
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    return "scissors";
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // Case-insensitive human choice
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("Human wins this round!");
    } else {
        computerScore++;
        console.log("Computer wins this round!");
    }

    console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

// Function to play the entire game
function playGame() {
    console.log("Starting the game...");

    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}:`);
        const humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("\nFinal Scores:");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner. Better luck next time!");
    } else {
        console.log("It's a tie overall!");
    }
}

// Start the game
playGame();

//Write the logic to play the entire game


