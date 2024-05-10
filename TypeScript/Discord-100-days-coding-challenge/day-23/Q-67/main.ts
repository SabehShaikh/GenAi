// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters:
// a number and a string that represents a number (e.g., "5"). Return their sum as a number.

function arithmeticOperation(strNum: string, num: number): number {
  let strToNum = Number(strNum);
  let sum = strToNum + num;
  return sum;
}

console.log(arithmeticOperation("5", 5));
