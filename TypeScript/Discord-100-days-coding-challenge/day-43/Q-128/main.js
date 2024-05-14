// Question 128: Create an arrow function that takes multiple parameters
//  returns the product of all parameters.
var product = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (acc, curr) { return acc * curr; }, 1);
};
console.log(product(3, 5, 4));
/* KEY POINT:
 When you use the rest parameter syntax ...num: number[],
  it expects individual numbers as arguments, not an array.
*/ 
