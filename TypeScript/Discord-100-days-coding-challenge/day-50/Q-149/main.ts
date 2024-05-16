// Question 149: Explain the concept of the event loop in JavaScript with an example.

console.log("Start");

setTimeout(() => {
  console.log("Callback executed"); // This gets queued to be executed by the event loop
}, 0);

console.log("End");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.

/* KEY NOTES:

The event loop is a key mechanism in JavaScript's runtime environment that
handles asynchronous operations and ensures non-blocking behavior.

JavaScript is single-threaded, meaning it can only execute one piece of code 
at a time in a single call stack.

Asynchronous operations like timers (setTimeout, setInterval), AJAX requests, and event
 handlers (clicks, keypresses) are handled asynchronously through browser APIs or the Node.js event loop.

 

*/
