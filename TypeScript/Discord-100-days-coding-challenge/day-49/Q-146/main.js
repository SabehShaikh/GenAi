// Question 146: Show an example of a callback function used to filter an array of numbers.
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Uses .filter() with a callback function to filter out numbers greater than 5
var filternums = nums.filter(function (num) { return num < 6; });
console.log(filternums);
