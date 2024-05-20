// Logical operators:
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

/* || (OR)
The “OR” operator is represented with two vertical line symbols: */
result = a || b;

/* the logical OR is meant to manipulate boolean values only. If any of its
 arguments are true, it returns true, otherwise it returns false.*/
alert(true || true);   // true
alert(false || true);  // true
alert(true || false);  // true
alert(false || false); // false

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert('The office is closed.'); // it is the weekend
}

/* OR "||" finds the first truthy value
The OR || operator does the following:
Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand. */

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "Anonymous"); // SuperCoder
// If all variables were falsy, "Anonymous" would show up.

true || alert("not printed");
false || alert("printed");
// In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

/* && (AND)
The AND operator is represented with two ampersands &&:*/
result = a && b;
// AND returns true if both operands are truthy and false otherwise:
alert(true && true);   // true
alert(false && true);  // false
alert(true && false);  // false
alert(false && false); // false

let hours = 12;
let minute = 30;

if (hours == 12 && minute == 30) {
    alert('The time is 12:30'); // this will work because both values are true.
}

/*AND “&&” finds the first falsy value
The AND && operator does the following:
Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
*/

// if the first operand is truthy,
// AND returns the second operand:
alert(1 && 0); // 0
alert(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert(null && 5); // null
alert(0 && "no matter what"); // 0

/*! (NOT)
The boolean NOT operator is represented with an exclamation sign !. */
// Returns the inverse value.
alert(!true); // false
alert(!0); // true