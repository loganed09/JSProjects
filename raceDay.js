let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = false;
let runnerAge = 16;


if (runnerAge > 18 && isRegisteredEarly) {
  raceNumber += 1000;
  console.log(`You will race at 9:30am, your race number is ${raceNumber}.`)
} else if (runnerAge > 18 && !isRegisteredEarly) {
  console.log(`You will race at 11:00am, your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30pm, your race number is ${raceNumber}.`);
} else {
  console.log('Please see registration desk.');
}

