// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both
// the quotient and the remainder. Use an object to return both values.

function DivAndRem(
    num1: number,
    num2: number
): {
    quotient: number;
    remainder: number;
} {
    let division = Math.floor(num1 / num2);
    let remainder = num1 % num2;

    return {
        quotient: division,
        remainder: remainder,
    };
}

const result = DivAndRem(10, 3);
console.log(result);

