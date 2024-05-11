// Question 79: Creating and Accessing Object Properties: Construct an object representing a car
// with properties for make, model, and year. Then, show how you can access the model property of the car.
// This code explicitly defines the data types for each property using a type annotation:
var car = {
    make: "honda",
    model: "civic",
    year: 2023,
};
console.log(car.model);
// TypeScript is able to infer the types based on the assigned values (strings and a number).
//  This is called implicit type inference.
var car_two = {
    make: "toyota",
    model: "camry",
    year: 2023,
};
console.log(car_two.model);
