/* 
COMPARISION:
In JavaScript they are written like this:

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
*/

/*
Boolean is the result
All comparison operators return a boolean value:

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth”.
For example:
*/
alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)

// A comparison result can be assigned to a variable, just like any value:
let result = 5 > 4;
alert(result); // true

// String comparison:
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.
alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true

/*
Comparison of different types
When comparing values of different types, JavaScript converts the values to numbers.
*/
alert("2" > 1); // true, string '2' becomes a number 2
alert("01" == 1); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
alert(true == 1); // true

/*
It is possible that at the same time:
Two values are equal.
One of them is true as a boolean and the other one is false as a boolean.
For example:
*/
let a = 0;
alert(Boolean(a)); // false
let b = "0";
alert(Boolean(b)); // true
alert(a == b); // true!
// From JavaScript’s standpoint, this result is quite normal. An equality check converts
//  values using the numeric conversion (hence "0" becomes 0)

// Strict equality: (===)
// A regular equality check == has a problem. It cannot differentiate 0 from false:
alert(0 == false); // true

// The same thing happens with an empty string:
alert("" == false); // true
// This happens because operands of different types are converted to numbers by the
// equality operator ==. An empty string, just like false, becomes a zero.

/* What to do if we’d like to differentiate 0 from false?
 A strict equality operator === checks the equality without type conversion.
In other words, if a and b are of different types, then a === b immediately returns
 false without an attempt to convert them. */
alert(0 === false); // false, because the types are different

/* Comparison with null and undefined:
There’s a non-intuitive behavior when null or undefined are compared to other values.
For a strict equality check ===
These values are different, because each of them is a different type. */
alert(null === undefined); //

/* For a non-strict check (==):
 There’s a special rule. These two are a “sweet couple”: they equal each other
 (in the sense of ==), but not any other value. */
alert(null == undefined); // true

// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
// Strange result: null vs 0
// Let’s compare null with a zero:

alert(null > 0); // false, cuz 0>0 = false.
alert(null == 0); // (2) false, cuz null is only == undefined.
alert(null >= 0); // (3) true, cuz 0 >= 0.

// The value undefined shouldn’t be compared to other values:
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)

/* Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is
 a special numeric value which returns false for all comparisons.
The equality check (3) returns false because undefined only equals 
null, undefined, and no other value.*/

/* SUMMARY:
Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
*/

alert("2" > "12"); // true
/* Compare the first character of both strings:
"2" has a Unicode value of 50.
"1" has a Unicode value of 49.
Since 50 (Unicode of "2") is greater than 49 (Unicode of "1"), 
the comparison is resolved as true without needing to check further characters.*/

alert("apple > pineapple"); // false
/* "a" in "apple" has a Unicode value of 97.
"p" in "pineapple" has a Unicode value of 112.

Since 97 (Unicode of "a") is less than 112 (Unicode of "p"), 
the comparison stops here and evaluates to false. 
The subsequent characters are not considered
because the first character already determines the outcome. */
