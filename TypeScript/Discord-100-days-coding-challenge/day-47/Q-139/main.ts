// Question 139: List three reserved words in JavaScript and create
// a valid use case for each.

// Reserved word: interface - to describe the shape of objects in your application.
interface Person {
  name: string;
  age: number;
}

// Reserved word: return - used to exit a function and return a value from that function
function displayPersonInfo(person: Person) {
  return `Name: ${person.name}, Age: ${person.age}`;
}

// Reserved word: let - used to declare a block-scoped local variable
let details: Person = { name: "Sabeh", age: 20 };
console.log(displayPersonInfo(details));
