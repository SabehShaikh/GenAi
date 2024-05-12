// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
var fruits = ["Apple", "Banana", "Cherry"];
console.log("Before Replacing: ".concat(fruits));
var replacedIndex = fruits.indexOf("Banana");
fruits[replacedIndex] = "Mango";
console.log("After Replacing: ".concat(fruits));
