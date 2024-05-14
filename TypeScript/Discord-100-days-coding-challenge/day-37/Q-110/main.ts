// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function grades(percentage: number): string {
  if (percentage >= 80 && percentage <= 100) {
    return "A";
  } else if (percentage >= 70 && percentage < 80) {
    return "B";
  } else if (percentage >= 60 && percentage < 70) {
    return "C";
  } else if (percentage >= 50 && percentage < 60) {
    return "D";
  } else if (percentage >= 0 && percentage < 50) {
    return "F";
  } else {
    return "Invalid input";
  }
}

let studentGrade = grades(80);
console.log(`Congratulations, you got ${studentGrade}`);
