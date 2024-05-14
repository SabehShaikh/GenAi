// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

function DayOfWeek(day: number) {
  let dayName: string;

  switch (day) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid Day Number";
  }
  console.log(`Day ${day} is ${dayName}`);
}

DayOfWeek(5);
