// Question 107: Write a condition using logical operators that checks 
// if a number is divisible by both 2 and 3.
function IsDivisibleByTwoThree(num) {
    return num % 2 === 0 && num % 3 === 0;
}
console.log(IsDivisibleByTwoThree(18));
console.log(IsDivisibleByTwoThree(25));
console.log(IsDivisibleByTwoThree(30));
