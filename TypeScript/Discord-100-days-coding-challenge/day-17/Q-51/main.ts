// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle 
// and refactor it into an arrow function.

function calculate_area(length: number, width: number) {
    let area = length * width
    console.log(`Area of rectangle with normal function: ${area}`);
}
calculate_area(5, 10)

// Arrow function:
const calculate_Area = (length: number, width: number) => {
    let area = length * width
    console.log(`Area of rectangle with arrow function: ${area}`);
}
calculate_Area(5, 14)