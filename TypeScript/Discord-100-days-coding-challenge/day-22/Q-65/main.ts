// Q65 - Determine the Remainder: Make a function that gets two numbers and shows the
// leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function Remainder(num1: number, num2: number): number {
  let modulu = num1 % num2;
  return modulu;
}

console.log(`Remainder is: ${Remainder(5, 2)}`);
