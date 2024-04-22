// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
// and refactor it into an arrow function.
function calculate_area(length, width) {
    var area = length * width;
    console.log("Area of rectangle with normal function: ".concat(area));
}
calculate_area(5, 10);
var calculate_Area = function (length, width) {
    var area = length * width;
    console.log("Area of rectangle with arrow function: ".concat(area));
};
calculate_Area(5, 14);
