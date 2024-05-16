// Question 150: Describe how asynchronous callbacks differ from
// synchronous code execution.
// Synchronous Code:
console.log("Start");
console.log("Middle");
console.log("End");
// Asynchronous Callbacks:
console.log("Start of asynchronous");
setTimeout(function () {
    console.log("Inside setTimeout callback");
}, 2000);
console.log("End of asynchronous");
