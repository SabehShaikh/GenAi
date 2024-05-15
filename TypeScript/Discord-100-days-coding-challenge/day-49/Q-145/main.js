// Question 145: Create a function that accepts a callback and
//  invokes it with some arguments.
// Function that accepts a callback and invokes it with arguments
var foo = function (str, callback) {
    // Perform some operation with the input string
    var modifiedString = str.toUpperCase();
    // Invoke the callback function and pass the modified string
    callback(modifiedString);
};
// Example callback function
var myCallback = function (result) {
    console.log("Callback invoked with result:", result);
};
// Call foo and pass the input string and the callback function
foo("hello world", myCallback);
