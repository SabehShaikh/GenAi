/* Loops: while and for:
We often need to repeat actions.
Loops are a way to repeat the same code multiple times. 

The “while” loop:
The while loop has the following syntax: */

while (condition) {
    // code / "loop body"
}


/* While the condition is truthy, the code from the loop body is executed.
For instance, the loop below outputs i while i < 3: */

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    alert(i);
    i++;
}
// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.


// For instance, a shorter way to write while (i != 0) is while (i):
let j = 3;
while (j) { // when j becomes 0, the condition becomes falsy, and the loop stops
    alert(j);
    j--;
}

/* Curly braces are not required for a single-line body
If the loop body has a single statement, we can omit the curly braces {…}: */
let k = 3;
while (k) alert(k--);


/* The “do…while” loop:
The condition check can be moved below the loop body using the do..while syntax:*/

do {
    // loop body
} while (condition);

// The loop will first execute the body, then check the condition, and,
//  while it’s truthy, execute it again and again.

let s = 0;
do {
    alert(i);
    s++;
} while (s < 3);

/* This form of syntax should only be used when you want the body of the loop
 to execute at least once regardless of the condition being truthy. 
 Usually, the other form is preferred: while(…) {…}. */


/* The “for” loop:
The for loop is more complex, but it’s also the most commonly used loop.*/

for (begin; condition; step) {
    // ... loop body ...
}

// The loop below runs alert(i) for i from 0 up to (but not including) 3:

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
}
/*

Let’s examine the for statement part-by-part:

begin:	let i = 0	Executes once upon entering the loop.
condition:	i < 3	Checked before every loop iteration. If false, the loop stops.
body:	alert(i)	Runs again and again while the condition is truthy.
step/increament:	i++	Executes after the body on each iteration. */


/* Inline variable declaration:
Here, the “counter” variable i is declared right in the loop. 
This is called an “inline” variable declaration. Such variables are visible only inside the loop. */

for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
}
alert(i); // error, no such variable

// Instead of defining a variable, we could use an existing one:
let z = 0;
for (z = 0; z < 3; z++) { // use an existing variable
    alert(z); // 0, 1, 2
}

alert(z); // 3, visible, because declared outside of the loop

/* Skipping parts: Any part of for can be skipped.
For example, we can omit begin if we don’t need to do anything at the loop start. */

let p = 0; // we have i already declared and assigned

for (; p < 3; p++) { // no need for "begin"
    alert(p); // 0, 1, 2
}
// We can also remove the step part:

let m = 0;
for (; m < 3;) {
    alert(m++);
}

/* Breaking the loop : Normally, a loop exits when its condition becomes falsy.
But we can force the exit at any time using the special break directive.

For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered: */

let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}
alert('Sum: ' + sum);


/* The break directive is activated at the line (*) if the user enters an empty line or cancels
 the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.*/


/*Continue to the next iteration: The continue directive is a “lighter version” of break. 
It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the 
loop to start a new one (if the condition allows).

We can use it if we’re done with the current iteration and would like to move on to the next one.
The loop below uses continue to output only odd values: */

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}

// For even values of i, the continue directive stops executing the body and passes control to
//  the next iteration of for (with the next number). So the alert is only called for odd values.

/* Labels for break/continue:
Sometimes we need to break out from multiple nested loops at once. 
A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}*/

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)

        console.log(`Value at coords (${i},${j})`)
    }
}

alert('Done!');
/* In the code above, break outer looks upwards for the label named outer and breaks out of that loop.
So the control goes straight from (*) to alert('Done!') */

/*Summary
We covered 3 types of loops:

while – The condition is checked before each iteration.
do..while – The condition is checked after each iteration.
for (;;) – The condition is checked before each iteration, additional settings available.

If we don’t want to do anything in the current iteration and would like to forward to 
the next one, we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue 
to escape a nested loop to go to an outer one. */