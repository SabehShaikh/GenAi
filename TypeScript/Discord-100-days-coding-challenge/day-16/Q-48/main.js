// Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
//  Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let laptop1_price = [15000, 6000, 4500];
// let laptop2_price = [8000, 7500, 9000];
// let combined_price = [...laptop1_price , ...laptop2_price].sort((a , b)=> a - b)
// console.log(combined_price);
// EXPLANATION:
// The sort method takes a callback function (also called a comparison function) as its argument.
//  This function defines how the sorting should happen.
// The sort method starts by comparing the first two elements: 15000 and 6000.
// The callback function ((a, b) => a - b) is called with a being 15000 and b being 6000.
// We calculate 15000 - 6000 = 9000.
// Since the result is positive (9000), it means 15000 is greater than 6000.
// To maintain ascending order, 15000 and 6000 are swapped in the combined_price array.
var num1 = [8, 10, 50, 25, 36, 98, 15];
var num2 = [30, 40, 80, 75, 28, 82];
var ascending = __spreadArray(__spreadArray([], num1, true), num2, true).sort(function (a, b) { return a - b; });
var descending = __spreadArray(__spreadArray([], num1, true), num2, true).sort(function (a, b) { return b - a; });
console.log("Ascending order:", ascending);
console.log("Descending order:", descending);
