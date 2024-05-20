// The “if” statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
let year = prompt(
    "In which year was ECMAScript-2015 specification published?",
    ""
);
if (year == 2015) alert("You are right!");

// If we want to execute more than one statement, we have to wrap our code block inside curly braces:
if (year == 2015) {
    alert("That's correct!");
    alert("You're so smart!");
}

// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

/* The “else” clause:
The if statement may contain an optional else block. It executes when the condition is falsy. */
let years = prompt(
    "In which year was the ECMAScript-2015 specification published?",
    ""
);

if (years == 2015) {
    alert("You guessed it right!");
} else {
    alert("How can you be so wrong?"); // any value except 2015
}

/* Several conditions: “else if”:
Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that. */
let yearr = prompt(
    "In which year was the ECMAScript-2015 specification published?",
    ""
);

if (yearr < 2015) {
    alert("Too early...");
} else if (yearr > 2015) {
    alert("Too late");
} else {
    alert("Exactly!");
}
/*  In the code above, JavaScript first checks year < 2015. If that is falsy, 
it goes to the next condition year > 2015. If that is also falsy, it shows the last alert. */

/* Conditional operator ‘?’ :
Sometimes, we need to assign a variable depending on a condition. */
var accessAllowed;
var age = prompt("How old are you?", "");

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
alert(accessAllowed);

// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
let result = condition ? value1 : value2;
// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.
var accessAllowed = age > 18 ? true : false;


/*Multiple ‘?’:
A sequence of question mark operators ? can return a value that depends on more than one condition. */
var age = prompt("age?", 18);
let message =
    age < 3
        ? "Hi, baby!"
        : age < 18
            ? "Hello!"
            : age < 100
                ? "Greetings!"
                : "What an unusual age!";

alert(message);

// Here’s how this looks using if..else:
if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}