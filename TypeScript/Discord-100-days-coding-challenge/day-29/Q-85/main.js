// Question 85: Finding the Position of a Substring: Write a function that locates the first 
// occurrence of the word "code" within any given string and returns its position.
function positionOfStr(str) {
    var position = str.indexOf("code");
    console.log("position of code is: ".concat(position));
}
positionOfStr('we are writing code in typescript.');
