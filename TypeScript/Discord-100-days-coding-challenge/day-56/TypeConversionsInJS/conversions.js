// STRING CONVERSION:
// String conversion happens when we need the string form of a value.

// For example, alert(value) does it to show the value.
// We can also call the String(value) function to convert a value to a string:
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
// String conversion is mostly obvious. A false becomes "false", null becomes "null", etc

// NUMERIC CONVERSION:
// Numeric conversion in mathematical functions and expressions happens automatically.

// For example, when division / is applied to non-numbers:
alert("6" / "2"); // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123
alert(typeof num); // number
// Explicit conversion is usually required when we read a value from a string-based
//  source like a text form but expect a number to be entered.

// If the string is not a valid number, the result of such a conversion is NaN. For instance:
let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

// Numeric conversion rules:
// Value	           Becomes…
// undefined	          NaN
let und = undefined;
und = Number(und);
alert(typeofof(und)); // NaN

// null     	           0
let nu = null;
nu = Number(nu);
alert(typeof nu); // number , but value is 0;

// true and false   	1 and 0
alert(Number("   123   ")); // 123
alert(Number("123z")); // NaN (error reading a number at "z")
alert(Number(true)); // 1
alert(Number(false)); // 0

// Please note that null and undefined behave differently here:
//  null becomes zero while undefined becomes NaN.

// BOOLEAN CONVERSION:
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
alert(Boolean(0)); // false
alert(Boolean(null)); // false
alert(Boolean(undefined)); // false
alert(Boolean(NaN)); // false
alert(Boolean("")); // false

// Other values become true.
alert(Boolean("hello")); // true
alert(Boolean(1)); // true
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

