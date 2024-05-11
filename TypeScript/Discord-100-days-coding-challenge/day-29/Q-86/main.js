"use strict";
// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript"
//  is present in a given string. It should return true if found, otherwise false.
Object.defineProperty(exports, "__esModule", { value: true });
function textPresence(str) {
    let present = str.includes("JavaScript");
    return present;
}
console.log(textPresence('Coding in JavaScript is fun')); // true, cuz JavaScript is present
console.log(textPresence('Coding in Python is fun')); // false, cuz JavaScript is not present
