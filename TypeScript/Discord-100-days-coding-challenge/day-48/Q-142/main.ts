// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

// Simulated asynchronous function that returns a Promise
function Greet() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World"); // Resolving the Promise after timeout
    }, 2000); // Simulating a 2-second delay
  });
}

Greet().then((message) => {
  console.log(message); // Output: Hello, World!
});

console.log("First Line"); // This line executes immediately
