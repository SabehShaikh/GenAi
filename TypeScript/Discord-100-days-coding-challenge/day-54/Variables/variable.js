let message;

// Now, we can put some data into it by using the assignment operator =:
message = "Hello";

// The string is now saved into the memory area associated with the variable.
// We can access it using the variable name:
alert(message);

// To be concise, we can combine the variable declaration and assignment into a single line:

let message_two = "World";
alert(message_two);

// We can also declare multiple variables in one line with single let keyword:
let user = "John",
  age = 25,
  gender = "Male";

// That might seem shorter, but we don’t recommend it. For the sake of better readability,
//  please use a single line per variable.
// The multiline variant is a bit longer, but easier to read:
let user_two = "Alex";
let age_two = 25;
let gender_two = "Male";

// Some people also define multiple variables in this multiline style:
let user_three = "John",
  age_three = 25,
  message_three = "Hello";

//   …Or even in the “comma-first” style:
let name = "Yums",
  id = 296,
  major = "BSCS";

//  Technically, all these variants do the same thing.
//  So, it’s a matter of personal taste and aesthetics.
// For the sake of better readability, please use a single line per variable.

// We can also change value it as many times as we want:
let city = "Karachi";
city = "Lahore"; // the value is changed
alert(city);

// We can also declare two variables and copy data from one into the other.
let hello = "Hello world!";
let greet;

// copy 'Hello world' from hello into greet
greet = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(greet); // Hello world!

// Declaring twice triggers an error
// A variable should be declared only once.
// A repeated declaration of the same variable is an error:
// let message = "This";

// repeated 'let' leads to an error
// let message = "That"; // SyntaxError: 'message' has already been declared
// So, we should declare a variable once and then refer to it without let.

// Variable naming:
// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.
// Examples of valid names:
let userName; // This is camelCase and preffered.
let test123;

// What’s interesting – the dollar sign '$' and the underscore '_' can also
//  be used in names. They are regular symbols, just like letters, without any special meaning.
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// Examples of incorrect variable names:
// let 1a; // cannot start with a digit

// let my-name; // hyphens '-' aren't allowed in the name, use underscore instead.

// Reserved names
// There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

// For example: let, class, return, and function are reserved.

// The code below gives a syntax error:
// let let = 5; // can't name a variable "let", error!
// let return = 5; // also can't name it "return", error!

// An assignment without use strict
// Normally, we need to define a variable before using it. But in the old times,
//  it was technically possible to create a variable without using let.
//  This still works now if we don’t put use strict in our scripts to maintain
//   compatibility with old scripts.

// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5

// This is a bad practice and would cause an error in strict mode:
// "use strict";

// num = 5; // error: num is not defined
// alert(num)


// Constants:
// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = '15.02.2004';

// Variables declared using const are called “constants”. They cannot be reassigned.
//  An attempt to do so would cause an error:
// myBirthday = '01.01.2001'; // error, can't reassign the constant!

// When a programmer is sure that a variable will never change,
// they can declare it with const to guarantee and communicate that fact to everyone.

