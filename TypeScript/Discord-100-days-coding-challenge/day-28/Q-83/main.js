// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts 
// it to uppercase, then to lowercase, and logs both.
function Converting(str) {
    var upperCase = str.toUpperCase();
    console.log("UpperCase: ".concat(upperCase));
    var lowerCase = str.toLowerCase();
    console.log("LowerCase: ".concat(lowerCase));
}
Converting('We are Learning Typescript.');
