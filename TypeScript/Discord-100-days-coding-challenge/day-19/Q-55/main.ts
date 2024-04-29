// // Q55 - Double Numbers in an Array: Make a list of numbers. Then, 
// // use a trick to make a new list where each number is twice its original value.

let numbers : number[] = [2,4,6,8,10]
// // let square : number[] = numbers.map((num)=> num * 2)

// // console.log(square);

// // OR
let squared : number[] = []

for (let i = 0; i < numbers.length; i++) {
squared.push(numbers[i]*2)
}
console.log(squared);

