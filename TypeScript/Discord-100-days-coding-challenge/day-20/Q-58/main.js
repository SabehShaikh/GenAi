// Q58 - Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores given
// function averageScore(...scores: number[]): number {
//     // Adds all scores together and divides by the number of scores
//     let total = scores.reduce((sum, score) => sum + score, 0);
//     return total / scores.length;
//   }
//   // Example: finding the average of four scores
//   console.log(averageScore(80, 90, 100, 70)); // Shows the average score
//   // We add up all the scores, then divide by how many there are.
var averageScore = function (scores) {
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
};
console.log(averageScore([75, 85, 95, 80, 70]));
