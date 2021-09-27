const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 5;
      break;
    case 'sunday':
      return 7;
      break;
  }
}


const getActualSleepHours = () => getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');


const getIdealSleepHours = (idealHours) => {
  return idealHours *= 7;
}

const calculateSleepDebt = (idealH) => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(idealH);
  if (actualSleepHours > idealSleepHours) {
    return `You overslept ${actualSleepHours - idealSleepHours} hours. Slept ${actualSleepHours} out of ${idealSleepHours}. Get it together.`;
  } else if (actualSleepHours < idealSleepHours) {
    return `You are not sleeping enough. Slept ${actualSleepHours} out of ${idealSleepHours}. You underslept ${idealSleepHours - actualSleepHours} hours.`;
  }else {
    return 'You nailed your ideal hours this week!';
  }
}


console.log(calculateSleepDebt(11));
