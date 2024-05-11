// Question 78: Function Expressions vs. Function Declarations: Compare function expressions
// and declarations by creating one of each that performs the same task, such as squaring a number.

// Function Declaration: Define a function using the function key
function square(num: number): number {
  return num * num;
}

console.log(square(5));

// Function Expression: Assign a function to a variable or constant using an assignment operator (=)
const sqauring = function (x: number): number {
  return x * x;
};

console.log(sqauring(3));
