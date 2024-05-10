// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {}
//  that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

// FOR LET:
let num = 15;
if (num === 15) {
  let result = "Yes we have 15";
  console.log(result);
}

// console.log(result); // cannot find result

// FOR CONST:
const number = 25;
if (number === 25) {
  const result = "Yes we have 25";
  console.log(result);
}

// console.log(result); // cannot find result

/*
EXPLANATION:
here will be an error because the variable is not accessible outside 
 of its block scope due to the use of let and const. 
*/
