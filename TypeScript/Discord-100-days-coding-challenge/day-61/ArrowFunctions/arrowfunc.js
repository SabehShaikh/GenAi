/* Arrow functions, the basics
There’s another very simple and concise syntax for creating functions,
 that’s often better than Function Expressions.
It’s called “arrow functions”, because it looks like this: */

let func = (arg1, arg2, ...argN) => expression;
/* This creates a function func that accepts arguments arg1..argN,
 then evaluates the expression on the right side with their use and returns its result. */

// In other words, it’s the shorter version of:

let foo = function (arg1, arg2, ...argN) {
    return expression;
};

// Let’s see a concrete example:

let add = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)); // 3

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
let double = (n) => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
alert(double(2));

// If there are no arguments, parentheses are empty, but they must be present:
let sayHi = () => alert("Hello!");

sayHi();

// Arrow functions can be used in the same way as Function Expressions.
// For instance, to dynamically create a function:
let age = prompt("What is your age?", 18);

let welcome = age < 18 ? () => alert("Hello") : () => alert("Greetings");

welcome();

// The major difference is that curly braces require a return within them to
// return a value (just like a regular function does).
let sum = (a, b) => {
    // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};

alert(sum(1, 2)); // 3

/* Summary
Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

Without curly braces: (...args) => expression – the right side is an expression: 
the function evaluates it and returns the result.

Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
With curly braces: (...args) => { body } – brackets allow us to write multiple 
statements inside the function, but we need an explicit return to return something. */


/* TASK: */
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);

// Rewrite in arrow function:
const ask = (que, yes, no) => {

    if (confirm(que)) yes();
    else no();
}


ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution"))

