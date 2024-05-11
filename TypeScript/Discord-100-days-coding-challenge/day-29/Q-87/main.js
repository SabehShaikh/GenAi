// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
function Extracting(str) {
    console.log("Original String: ".concat(str));
    var extract = str.substring(0, 10);
    console.log("First 10 characters: ".concat(extract));
}
Extracting('TypeScript is a powerful superset of JavaScript.');
