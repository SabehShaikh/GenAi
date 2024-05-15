// Question 137: Implement a try-catch block to handle potential errors in a block of code.

let str: string = "Typescript";

try {
  let num: number = parseInt(str);
  if (isNaN(num)) {
    throw new Error("Invalid number format");
  }
  console.log(typeof num);
} catch (error) {
  console.log(`Error: ${error.message}`);
}

/* KEY POINTS:
We are attempting to convert the string "Typescript" to a number using parseInt().
The parseInt() function will return NaN because "Typescript" does not start with a valid integer representation.
Since parseInt() returns NaN, the if (isNaN(num)) check is true, leading to the
custom Error object being thrown with the message "Conversion failed".
*/
