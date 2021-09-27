let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (userGuess, compGuess, targetNum) => {
    if (Math.abs(userGuess - targetNum) < Math.abs(compGuess-targetNum)) {
        return true;
    } else if (Math.abs(userGuess - targetNum) > Math.abs(compGuess-targetNum)) {
        return false;
    } else {
        return true;
    }
}


const updateScore = stringVal => {
    if (stringVal === 'human') {
        humanScore++;
    } else if (stringVal === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;
