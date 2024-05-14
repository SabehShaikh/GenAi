"use strict";
// Question 123: Create a loop that iterates through a string and stops when
// it finds the first vowel.
let sentence = "TypeScript is a superset of JavaScript";
let vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < sentence.length; i++) {
    let currentChar = sentence.charAt(i).toLowerCase();
    if (vowels.includes(currentChar)) {
        console.log(`First vowel found: ${currentChar}`);
        break;
    }
    console.log(currentChar);
}
