/* Function expressions:

The syntax that we used before is called a Function Declaration: */

function sayHi() {
    alert("Hello");
}

/* There is another syntax for creating a function that is called a Function Expression.
It allows us to create a new function in the middle of any expression.
For example: */

let sayHi = function () {
    alert("Hello");
};
// Here we can see a variable sayHi getting a value, the new function,
// created as function() { alert("Hello"); }.

/* Function is a value:
Let’s reiterate: no matter how the function is created, a function is a value. 
Both examples above store a function in the sayHi variable.*/

// We can even print out that value using alert:

function sayHi() {
    alert("Hello");
}

alert(sayHi); // shows the function code
/* Please note that the last line does not run the function, because there are no parentheses
 after sayHi. There are programming languages where any mention of a function name
  causes its execution, but JavaScript is not like that. */


//   We can copy a function to another variable:

  function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  var func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)
  
//   We could also have used a Function Expression to declare sayHi, in the first line:

  let sayHi = function() { // (1) create
    alert( "Hello" );
  };
  
  var func = sayHi;
//   Everything would work the same.


/* Callback functions:
We’ll write a function ask(question, yes, no) with three parameters:

question
Text of the question
yes
Function to run if the answer is “Yes”
no
Function to run if the answer is “No”
The function should ask the question and, depending on the user’s answer, call yes() or no(): */

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
   
/* The arguments showOk and showCancel of ask are called callback functions or just callbacks.
The idea is that we pass a function and expect it to be “called back” later if necessary.
 In our case, showOk becomes the callback for “yes” answer, and showCancel for “no” answer. */  


 /* Function Expression vs Function Declaration:
 Let’s formulate the key differences between Function Declarations and Expressions. */
 
//  Function Declaration: a function, declared as a separate statement:
 function sum(a, b) {
   return a + b;
 }


//  Function Expression: a function, created inside an expression or inside another syntax construct.
//  Here, the function is created on the right side of the “assignment expression” =:
 let sum = function(a, b) {
   return a + b;
 }; 