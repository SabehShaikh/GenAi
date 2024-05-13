// Question 104: Create a function that generates a random hexadecimal color code.

function getRandomHexColor(): string {
  const color = "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6,'0')

  return color;
}

console.log(getRandomHexColor());

/* EXPLANATION:
Math.random() * 0xffffff generates a random floating-point number between 
0 and 16777215 (decimal value of FFFFFF in hexadecimal).

.toString(16) converts the decimal value to its hexadecimal representation.

The .padStart() method ensures that the hexadecimal color code always has six 
digits by padding it with leading zeros if necessary.
*/
