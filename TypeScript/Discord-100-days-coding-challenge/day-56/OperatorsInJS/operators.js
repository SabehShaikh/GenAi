// Terms: “unary”, “binary”, “operand”

// An operand –-> is what operators are applied to. For instance, in the multiplication
// of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2.

// An operator is unary if it has a single operand. For example, the unary negation -
// reverses the sign of a number:
let x = 1;
x = -x;
alert(x); // -1, unary negation was applied

// An operator is binary if it has two operands. The same minus exists in binary form as well:
let z = 1,
  y = 3;
alert(y - z); // 2, binary minus subtracts values

/*
MATHS:
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
The first four are straightforward, while % and ** need a few words about them.
*/

// REMAINDER %:
// The remainder operator %, despite its appearance, is not related to percents.
// The result of a % b is the remainder of the integer division of a by b
alert(5 % 2); // 1, the remainder of 5 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
alert(8 % 4); // 0, the remainder of 8 divided by 4

// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b.
alert(2 ** 2); // 2² = 4
alert(2 ** 3); // 2³ = 8
alert(2 ** 4); // 2⁴ = 16

// String concatenation with binary +
// if the binary + is applied to strings, it merges (concatenates) them:
let s = "my" + "string";
alert(s); // mystring

alert("1" + 2); // "12"
alert(2 + "1"); // "21"
// See, it doesn’t matter whether the first operand is a string or the second one.

alert(2 + 2 + "1"); // "41" and not "221"
alert("1" + 2 + 2); // "122" and not "14"

// The binary + is the only operator that supports strings in such a way.
// Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:
alert(6 - "2"); // 4, converts '2' to a number
alert("6" / "2"); // 3, converts both operands to numbers

// Numeric conversion, unary +
// No effect on numbers
let a = 1;
alert(+a); // 1

let b = -2;
alert(+b); // -2

// Converts non-numbers
alert(+true); // 1
alert(+""); // 0

/* 
it actually does the same thing as Number(...), but is shorter.

The need to convert strings to numbers arises very often. For example, 
if we are getting values from HTML form fields, they are usually strings. 
*/

// The binary plus would add them as strings:

let apples = "2";
let oranges = "3";
alert(apples + oranges); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:
let mango = "2";
let strawberry = "3";

// both values converted to numbers before the binary plus
alert(+mango + +strawberry); // 5

// Assignment =
// Let’s note that an assignment = is also an operator.
//  It is listed in the precedence table with the very low priority of 2.

// That’s why, when we assign a variable, like c = 2 * 2 + 1,
// the calculations are done first and then the = is evaluated, storing the result in c.
let c = 2 * 2 + 1;
alert(c); // 5

// Assignment = returns a value:
// Here’s a demo that uses an assignment as part of a more complex expression:

let d = 1;
let e = 2;
let f = 3 - (d = e + 1); // 2 + 1 = 3, stored in d. then 3 - 3 = 0 stored in f.
alert(a); // 3
alert(c); // 0

// Chaining assignments:
let g, h, i;

g = h = i = 2 + 2;

alert(g); // 4
alert(h); // 4
alert(i); // 4

// Modify-in-place:
let n = 2;
n = n + 5; // 2 + 5 = 7
n = n * 2; // 7 * 2 = 14

// This notation can be shortened using the operators += and *=:
// let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

let k = 2;
k *= 3 + 5; // right part evaluated first, same as k *= 8
alert(k); // 16

// Increment ++ increases a variable by 1:
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3

// Decrement -- decreases a variable by 1:

let count = 2;
count--; // works the same as counter = counter - 1, but is shorter
alert(count); // 1
