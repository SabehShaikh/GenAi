// There are eight basic data types in JavaScript.

// We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:

let message = "hello";
message = 123456;

// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”,
// meaning that there exist data types, but variables are not bound to any of them.
// Typescript is static type, unlike JS.

// Number:
// The number type represents both integer and floating point numbers.
let n = 123;
n = 12.345;
// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.

// Besides regular numbers, there are so-called “special numeric values” which also belong to this data type:
//  Infinity, -Infinity and NaN.
// Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
// We can get it as a result of division by zero:
alert(1 / 0); // Infinity

// NaN represents a computational error. It is a result of an incorrect or an undefined mathematical
//  operation, for instance:
alert("not a number" / 2); // NaN, such division is erroneous

// NaN is sticky. Any further mathematical operation on NaN returns NaN:
alert(NaN + 1); // NaN
alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN

// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result
//  (there’s only one exception to that: NaN ** 0 is 1).
alert(NaN ** 0);

// A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// String:
// A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions
// into a string by wrapping them in ${…}, for example:
let name = "Sabeh";
// embed a variable
alert(`Hello, ${name}!`); // Hello, Sabeh!
// embed an expression
alert(`the result is ${1 + 2}`); // the result is 3

// Boolean (logical type):
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:
let isGreater = 4 > 1;
alert(isGreater); // true

// The “null” value:
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:
let age = null; // states that age is unknown.

// In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.

// The “undefined” value:
// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
let id;
alert(id); // shows "undefined"

// Technically, it is possible to explicitly assign undefined to a variable:
let num = 100;
// change the value to undefined
num = undefined;

alert(num); // "undefined"

// The typeof operator:
// The typeof operator returns the type of the operand. It’s useful when we want to process values
//  of different types differently or just want to do a quick check.

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2)

typeof alert; // "function"  (3)

/* 
The result of typeof null is "object". That’s an officially recognized error in typeof, 
coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object.
It is a special value with a separate type of its own. The behavior of typeof is wrong here.

Summary
There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

*/
