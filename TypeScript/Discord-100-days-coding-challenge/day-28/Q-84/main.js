// Question 84: Replacing Text in a String: Write a function that takes a sentence and
// replaces all instances of the word "JavaScript" with "TypeScript".
function replaces(str) {
    console.log("Sentence Before Replacing: ".concat(str));
    var replacedStr = str.replace(/JavaScript/g, "TypeScript");
    console.log("Sentence After Replacing: ".concat(replacedStr));
}
replaces("We are learning JavaScript. JavaScript is a very good programming language.");
// replace method in JavaScript replaces only the first occurrence by default.
// To replace all occurrences, you can use a regular expression
//  with the global flag (/g) as the search pattern.
