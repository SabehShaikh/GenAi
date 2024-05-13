// Question 94: Use the .map() method to create a new array that contains the
// length of each word from an array of words.

let arr = ["abc", "sabeh", "coding", "typescript"];

let lengthOfArr = arr.map((word) => word.length);

console.log(lengthOfArr);

/*Keynotes about Map(): 
Returns a New Array
Does Not Modify Original Array
Iterates Over Each Element
*/
