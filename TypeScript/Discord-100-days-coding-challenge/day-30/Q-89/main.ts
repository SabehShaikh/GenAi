// Question 89: Rounding Numbers: Create a function that takes a number with decimals 
// (e.g., 3.14159) and rounds it to two decimal places.

// returns string cuz of toFixed:
function RoundingNum(num: number){

    return num.toFixed(2)
}

console.log(RoundingNum(3.14159))

// Returns number:
// function RoundingNum(num: number): number {
//     return Number(num.toFixed(2));
//   }
  
//   console.log(RoundingNum(3.14159));