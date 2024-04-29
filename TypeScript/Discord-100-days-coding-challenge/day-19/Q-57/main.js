// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [86, 92, 75, 68, 56, 82];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
// EXPLANATION:
// Initial State: total = 0, grade = 88
// Add 88 to total: total = 0 + 88 = 88
// Next Iteration: total = 88, grade = 94
// Add 94 to total: total = 88 + 94 = 182
// Next Iteration: total = 182, grade = 72
// Add 72 to total: total = 182 + 72 = 254
// Next Iteration: total = 254, grade = 99
// Add 99 to total: total = 254 + 99 = 353
// Next Iteration: total = 353, grade = 53
// Add 53 to total: total = 353 + 53 = 406
// Final Iteration: total = 406, grade = 77
// Add 77 to total: total = 406 + 77 = 483'
// 483 / 6 => 80.5
