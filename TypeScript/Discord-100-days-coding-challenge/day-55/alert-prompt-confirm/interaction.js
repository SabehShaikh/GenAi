// As we’ll be using the browser as our demo environment, let’s see a couple of functions to interact
//  with the user: alert, prompt and confirm.

// ALERT:
// This one we’ve seen already. It shows a message and waits for the user to press “OK”.
// For example:
alert("Hello");

// The mini-window with the message is called a modal window. The word “modal” means that the
//  visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”

// PROMPT:
// The function prompt accepts two arguments:
// result = prompt(title, [default]);

// title:
// The text to show the visitor.
// default:
// An optional second parameter, the initial value for the input field.

// The call to prompt returns the text from the input field or null if the input was canceled.
let age = prompt("How old are you?", 100);
alert(`You are ${age} years old!`); // You are 100 years old!


// CONFIRM:
// The syntax:
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.
// For example:
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed
