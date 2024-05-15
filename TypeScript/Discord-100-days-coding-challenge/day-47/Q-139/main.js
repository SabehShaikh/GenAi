// Question 139: List three reserved words in JavaScript and create
// a valid use case for each.
// Reserved word: return - used to exit a function and return a value from that function
function displayPersonInfo(person) {
    return "Name: ".concat(person.name, ", Age: ").concat(person.age);
}
// Reserved word: let - used to declare a block-scoped local variable
var details = { name: "Sabeh", age: 20 };
console.log(displayPersonInfo(details));
