// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var arr = [25, 35, 20, 10];
var sum = arr.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log(sum);
/* KEY NOTES:
The second argument passed to the reduce method is indeed the
initial value of the accumulator (acc). In your example, its zero 0

Q: Can you explain the difference between using reduce with and without an initial value?
A: When using reduce without an initial value, the first element of the array becomes
the initial value of the accumulator. With an initial value, the accumulator starts with that value.

The reduce method returns a single value that results from applying the provided
callback function to each element of the array.
*/ 
