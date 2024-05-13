// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function cmpTwoStr(str1: string, str2: string): boolean {
  return str1.toLowerCase() == str2.toLowerCase();
}

console.log(cmpTwoStr("Hello", "hello"));

/*
KEY NOTE:
For case-insensitive comparison, you can use methods like toLowerCase() 
or toUpperCase() to convert both strings to either 
lowercase or uppercase before comparison. 
*/
