// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

let fruits = ["Apple", "Banana", "Cherry"];
console.log(`Before Replacing: ${fruits}`);

let replacedIndex = fruits.indexOf("Banana");

fruits[replacedIndex] = "Mango";
console.log(`After Replacing: ${fruits}`);
