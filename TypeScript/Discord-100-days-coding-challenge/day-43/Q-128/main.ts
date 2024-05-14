// Question 128: Create an arrow function that takes multiple parameters
//  returns the product of all parameters.

const product = (...num: number[]) => {
    return num.reduce((acc, curr) => acc * curr, 1);
};

console.log(product(3, 5, 4));


/* KEY POINT:
 When you use the rest parameter syntax ...num: number[],
  it expects individual numbers as arguments, not an array.
*/