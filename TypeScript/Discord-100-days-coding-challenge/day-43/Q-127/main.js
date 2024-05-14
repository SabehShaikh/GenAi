// Question 127: Convert a traditional function expression to an arrow function.
function greet(name) {
    return "Hello ".concat(name);
}
console.log(greet('John'));
// In Arrow function:
var greet2 = function (name) {
    return "Hello ".concat(name);
};
console.log(greet2('Sabeh'));
