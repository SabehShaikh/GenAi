// // Q55 - Double Numbers in an Array: Make a list of numbers. Then, 
// // use a trick to make a new list where each number is twice its original value.
// let numbers : number[] = [2,4,6,8,10]
// // let square : number[] = numbers.map((num)=> num * 2)
// // console.log(square);
// // OR
// let squared : number[] = []
// for (let i = 0; i < numbers.length; i++) {
// squared.push(numbers[i]*2)
// }
// console.log(squared);
var numbers = [2, 4, 6, 8, 10];
var doubled = [];
var doubleNumbers = function (numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        doubled.push(num * 2);
    }
    return doubled;
};
console.log(doubleNumbers(numbers)); // Output: [4, 8, 12, 16, 20]
