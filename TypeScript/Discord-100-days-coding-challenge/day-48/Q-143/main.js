"use strict";
// Question 143: Show how to use the .then() and .catch() methods to
// handle Promise resolution and rejection.
// Simulated asynchronous function that returns a Promise
function Greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulating success or failure
            if (success) {
                resolve("Hello, World!"); // Resolving the Promise on success
            }
            else {
                reject(new Error("Greeting failed!")); // Rejecting the Promise on failure
            }
        }, 2000); // Simulating a 2-second delay
    });
}
// Call the function and handle the resolved value using .then() and .catch()
Greet()
    .then((message) => {
    console.log(message); // Output: Hello, World!
})
    .catch((error) => {
    console.error(error); // Output: Error: Greeting failed!
});
console.log('It runs first.');
