// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let items: (number | string)[] = [1, 2, 'a', 'b', 3, 4, 'c', 'd'];

let string = items.filter((item)=> typeof item === 'string' )
console.log(string);


// Use filter when you need a new array containing only a subset of elements that meet a specific criterion.
// Use map when you want to create a new array with transformed elements based on the original array.
// Use forEach when you need to iterate through each element for side effects, like logging or manipulation 
// (but be cautious of unintended side effects).