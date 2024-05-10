// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both
// the quotient and the remainder. Use an object to return both values.
function DivAndRem(num1, num2) {
    var division = Math.floor(num1 / num2);
    var remainder = num1 % num2;
    return {
        quotient: division,
        remainder: remainder,
    };
}
var result = DivAndRem(10, 3);
console.log(result);
