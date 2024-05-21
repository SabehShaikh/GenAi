/*The "switch" statement: A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.

The syntax: */
var a = 2 + 2;

switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly!"); // this works.
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}

// The switch has one or more case blocks and an optional default.

/* Grouping of “case” : Several variants of case which share the same code can be grouped.
For example, if we want the same code to run for case 3 and case 5:*/

let a = 3;
switch (a) {
  case 4:
    alert("Right!");
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert("Wrong!");
    alert("Why don't you take a math class?");
    break;

  default:
    alert("The result is strange. Really.");
}

/*Type matters: let’s emphasize that the equality check is always strict. 
The values must be of the same type to match.

For example, let’s consider the code: */

let arg = prompt("Enter a value?");
switch (arg) {
  case "0":
  case "1":
    alert("One or zero");
    break;

  case "2":
    alert("Two");
    break;

  case 3:
    alert("Never executes!");
    break;
  default:
    alert("An unknown value");
}

/* For 0, 1, the first alert runs.
For 2 the second alert runs.
But for 3, the result of the prompt is a string "3",
which is not strictly equal === to the number 3. So we’ve got a
dead code in case 3! The default variant will execute. */
