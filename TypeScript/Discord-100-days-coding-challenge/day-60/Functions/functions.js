/*Functions: Quite often we need to perform a similar action in many places of the script.

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question).
 But we can create functions of our own as well. */

/*Function Declaration: To create a function we can use a function declaration. */

function showMessage() {
  alert("Hello everyone!");
}
/* The function keyword goes first, then goes the name of the function, 
then a list of parameters between the parentheses (comma-separated, empty in the example above)
 and finally the code of the function, also named “the function body”, between curly braces. */

function name(parameter1, parameter2, ...parameterN) {
  // body
}

//  Our new function can be called by its name: showMessage().
function showMessage() {
  alert("Hello everyone!");
}

showMessage();
showMessage();
/* The call showMessage() executes the code of the function. Here we will see the message two times.
 This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.
 If we ever need to change the message or the way it is shown, it’s enough to modify
  the code in one place: the function which outputs it.*/

/* Local variables:
A variable declared inside a function is only visible inside that function. */
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert(message);
}

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function.

/* Outer variables:
A function can access an outer variable as well, for example: */
var userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}

showMessage(); // Hello, John

// The function has full access to the outer variable. It can modify it as well.
// For instance:
let userName = "John";

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = "Hello, " + userName;
  alert(message);
}

alert(userName); // John before the function call

showMessage();

alert(userName); // Bob, the value was modified by the function
// The outer variable is only used if there’s no local one.

/* If a same-named variable is declared inside the function then it shadows the outer one.
For instance, in the code below the function uses the local userName.
 The outer one is ignored: */

let userName = "John";

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = "Hello, " + userName; // Bob
  alert(message);
}

// the function will create and use its own userName
showMessage();

alert(userName); // John, unchanged, the function did not access the outer variable

/* Global variables:
Variables declared outside of any function, such as the outer userName in the code above, are called global.
Global variables are visible from any function (unless shadowed by locals). */

/* Parameters:
We can pass arbitrary data to functions using parameters.
In the example below, the function has two parameters: from and text. */

function showMessage(from, text) {
  // parameters: from, text
  alert(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)

/*When the function is called in lines (*) and (**), the given values are 
copied to local variables from and text. Then the function uses them. */

/* Here’s one more example: we have a variable from and pass it to the function.
 Please note: the function changes from, but the change is not seen outside,
  because a function always gets a copy of the value: */

function showMessage(from, text) {
  from = "*" + from + "*"; // make "from" look nicer

  alert(from + ": " + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert(from); // Ann
// When a value is passed as a function parameter, it’s also called an argument.

/* Default values:
If a function is called, but an argument is not provided, then the corresponding value becomes undefined.
For instance, the aforementioned function showMessage(from, text) can be called with a single argument: */
showMessage("Ann");

// That’s not an error. Such a call would output "*Ann*: undefined".
//  As the value for text isn’t passed, it becomes undefined.

/* We can specify the so-called “default” (to use if omitted) value for
 a parameter in the function declaration, using =: */

function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage("Ann"); // Ann: no text given
// Now if the text parameter is not passed, it will get the value "no text given".

// The default value also jumps in if the parameter exists, but strictly equals undefined, like this:
showMessage("Ann", undefined); // Ann: no text given

/*Default parameters in old JavaScript code
Several years ago, JavaScript didn’t support the syntax for default parameters.
 So people used other ways to specify them.

Nowadays, we can come across them in old scripts.
For example, an explicit check for undefined: */

function showMessage(from, text) {
  if (text === undefined) {
    text = "no text given";
  }

  alert(from + ": " + text);
}

// …Or using the || operator:
function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || "no text given";
}

/*Alternative default parameters:
Sometimes it makes sense to assign default values for parameters at a later stage after the function declaration.

We can check if the parameter is passed during the function execution, by comparing it with undefined: */

function showMessage(text) {
  // ...

  if (text === undefined) {
    // if the parameter is missing
    text = "empty message";
  }

  alert(text);
}

showMessage(); // empty message

/*Modern JavaScript engines support the nullish coalescing operator ??,
it’s better when most falsy values, such as 0, should be considered “normal”: */

function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

/* Returning a value:
A function can return a value back into the calling code as the result.

The simplest example would be a function that sums two values:*/

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3

// There may be many occurrences of return in a single function. For instance:
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
  alert("Access granted");
} else {
  alert("Access denied");
}

/* A function with an empty return or without it returns undefined
If a function does not return a value, it is the same as if it returns undefined: */
function doNothing() {
  /* empty */
}

alert(doNothing() === undefined); // true

// An empty return is also the same as return undefined:
function doNothing() {
  return;
}

alert(doNothing() === undefined); // true

/* Never add a newline between return and the value:
For a long expression in return, it might be tempting to put it on a separate line, like this: */

return
some + long + expression + or + whatever * f(a) + f(b);

// That doesn’t work, because JavaScript assumes a semicolon after return. That’ll work the same as:

return;
some + long + expression + or + whatever * f(a) + f(b);
// So, it effectively becomes an empty return.

// If we want the returned expression to wrap across multiple lines, we should start it
// at the same line as return. Or at least put the opening parentheses there as follows:

return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
    )
// And it will work just as we expect it to.

/* Summary
A function declaration looks like this:

function name(parameters, delimited, by, comma) {
   code 
}
Values passed to a function as parameters are copied to its local variables.
A function may access outer variables. But it works only from inside out.
 The code outside of the function doesn’t see its local variables.
A function can return a value. If it doesn’t, then its result is undefined. */