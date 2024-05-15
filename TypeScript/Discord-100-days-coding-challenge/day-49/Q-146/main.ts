// Question 146: Show an example of a callback function used to filter an array of numbers.

let nums: number[] = [1,2,3,4,5,6,7,8,9]

// Uses .filter() with a callback function to filter out numbers greater than 5
let filternums: number[] = nums.filter((num)=> num < 6)
console.log(filternums)