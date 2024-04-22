// Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
//  Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let laptop1_price = [15000, 6000, 4500];
let laptop2_price = [8000, 7500, 9000];

let combined_price = [...laptop1_price, ...laptop2_price].sort((a, b) => a - b);
console.log(combined_price);

// EXPLANATION:
// The sort method takes a callback function (also called a comparison function) as its argument.
//  This function defines how the sorting should happen.
// The sort method starts by comparing the first two elements: 15000 and 6000.
// The callback function ((a, b) => a - b) is called with a being 15000 and b being 6000.
// We calculate 15000 - 6000 = 9000.
// Since the result is positive (9000), it means 15000 is greater than 6000.
// To maintain ascending order, 15000 and 6000 are swapped in the combined_price array.

// let num1 = [8, 10, 50, 25, 36, 98, 15]
// let num2 = [30, 40, 80, 75, 28, 82]

// let ascending = [...num1, ...num2].sort((a, b) => a - b)
// let descending = [...num1, ...num2].sort((a, b) => b - a)
// console.log("Ascending order:", ascending); // smaller to larger
// console.log("Descending order:", descending); // larger to smaller
