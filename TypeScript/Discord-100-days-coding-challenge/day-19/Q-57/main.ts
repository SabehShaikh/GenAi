// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.


let grades = [86, 92, 75, 68, 56, 82];

let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log(averageGrade);

// EXPLANATION:
// Initial State: total = 0, grade = 86
// Add 86 to total: total = 0 + 86 = 86
// Next Iteration: total = 86, grade = 92
// Add 94 to total: total = 86 + 92 = 178
// Next Iteration: total = 178, grade = 75
// Add 72 to total: total = 178 + 75 = 253
// Next Iteration: total = 253, grade = 68
// Add 99 to total: total = 253 + 68 = 321
// Next Iteration: total = 321, grade = 56
// Add 53 to total: total = 321 + 56 = 377
// Final Iteration: total = 377, grade = 82
// Add 77 to total: total = 377 + 82 = 459
// 459 / 6 => 76.5