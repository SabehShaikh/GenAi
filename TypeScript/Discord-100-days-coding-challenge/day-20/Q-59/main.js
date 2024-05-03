// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a
// specific number to any other number you give them later.
function customAdder(value) {
    return function adder(num) {
        return value + num;
    };
}
// Create a custom adder that adds 10 to any number
var addTen = customAdder(20);
// Use the custom adder to add 20 to 30 and 60
var result1 = addTen(30);
var result2 = addTen(60);
console.log(result1); // Output: 50
console.log(result2); // Output: 80
