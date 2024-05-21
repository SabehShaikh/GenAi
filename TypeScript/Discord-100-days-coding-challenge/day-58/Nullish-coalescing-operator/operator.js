/* The nullish coalescing operator is written as two question marks ??.

As it treats null and undefined similarly, we’ll use a special term here, in this article.
 For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

The result of a ?? b is:

if a is defined, then a,
if a isn’t defined, then b.
In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one. 
It’s just a nice syntax to get the first “defined” value of the two.

We can rewrite result = a ?? b using the operators that we already know, like this:
*/

result = a !== null && a !== undefined ? a : b; //means, if a is not equal to null and undefined returns a otherwise b.

/* The common use case for ?? is to provide a default value.
here we show user if its value isn’t null/undefined, otherwise Anonymous: */

var user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

// Here’s the example with user assigned to a name:
let user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)

/* Let’s say we have a user’s data in variables firstName, lastName or nickName.
 All of them may be not defined, if the user decided not to fill in the corresponding values.
We’d like to display the user name using one of these variables,
 or show “Anonymous” if all of them are null/undefined.
Let’s use the ?? operator for that: */

var firstName = null;
var lastName = null;
var nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

/* Comparison with ||:
The OR || operator can be used in the same way as ??, as it was described in the previous chapter.

For example, in the code above we could replace ?? with || and still get the same result: */

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first truthy value:
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder

/* The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value. 

In other words, || doesn’t distinguish between false, 0, an empty string "" 
and null/undefined. They are all the same – falsy values. If any of these is the 
first argument of ||, then we’ll get the second argument as the result.
*/

let height = 0;

alert(height || 100); // 100 , cuz in || (OR) zero is falsy value, so it returns 2nd argument.
alert(height ?? 100); // 0 ,checks height for being null/undefined, and it’s not, so returns result.

/* Summary:

The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.
It’s used to assign default values to variables:

set height=100, if height is null or undefined */
height = height ?? 100;

// The operator ?? has a very low precedence, only a bit higher than ? and =,
//  so consider adding parentheses when using it in an expression.

// It’s forbidden to use it with || or && without explicit parentheses.
