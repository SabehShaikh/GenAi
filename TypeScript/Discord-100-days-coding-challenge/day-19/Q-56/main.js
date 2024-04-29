// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var items = [1, 2, 'a', 'b', 3, 4, 'c', 'd'];
var string = items.filter(function (item) { return typeof item === 'string'; });
console.log(string);
