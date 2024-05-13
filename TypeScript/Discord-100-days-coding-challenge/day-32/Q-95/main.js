// Question 95: Write a function that uses the .filter() method
//  to return an array of numbers greater than 10.
var arr = [15, 2, 28, 8, 60, 5, 82];
var greaterThanTen = arr.filter(function (num) { return num > 10; });
console.log(greaterThanTen);
