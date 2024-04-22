// Q47 - Array Destructuring: Given an array of objects representing different laptops, each with
// properties make, model, and year, use arraydestructuring to assign the first and second laptops
//  to variables. Then, log these variables.
let laptops = [
    {
        make: "Lenovo",
        model: "ThinkPad T490",
        year: 2022
    },
    {
        make: "Dell",
        model: "XPS 15",
        year: 2023
    },
    {
        make: "Apple",
        model: "MacBook Air",
        year: 2023
    },
    {
        make: "Acer",
        model: "Nitro 5",
        year: 2022
    }
];



let [laptop1, laptop2] = laptops
console.log('laptop1 is:', laptop1);
console.log('laptop2 is:', laptop2);

 // We use dot notation to access object properties in template literals:
// console.log(`Laptop1 is: ${laptop1.make} ${laptop1.model} ${laptop1.year}`); 




// Array destructuring with rest operator:
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const [first, second, ...rest] = numbers;

// console.log(`First two numbers: ${first}, ${second}`);  // Output: First two numbers: 1, 2
// console.log(`Remaining numbers (as an array): ${rest}`); // Output: Remaining numbers (as an array): [3, 4, 5, 6, 7]

