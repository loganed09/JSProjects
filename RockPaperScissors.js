const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb') {
    return userInput;
  }else {
    console.log('Please enter: Rock, paper or Scissors.');
  }
}

const getComputerChoice = () => {
  randomNum = Math.floor(Math.random()*3);
  switch (randomNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'rock' && computerChoice ==='paper'){
    return 'Computer wins!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You win!';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You win!';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer wins!';
  }else if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You win!';
  }else if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer Wins!';
  }else if (userChoice === 'bomb') {
    return 'You used BOMB and won!';
  }else {
    return 'It was a tie!';
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} and the computer chose ${computerChoice}. ${determineWinner(userChoice,computerChoice)}`);
}

playGame();

