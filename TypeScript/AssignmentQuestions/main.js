// 2- Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person_name = 'Sabeh is a boy';
console.log("Hello ".concat(person_name, ", Would you like to learn some Python today?"));
// 3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log("In UpperCase ".concat(person_name.toUpperCase()));
console.log("In LowerCase ".concat(person_name.toLowerCase()));
// 4- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var quotation = "A person who never made a mistake never tried anything new.";
console.log("Albert Einstein once said, \"".concat(quotation, "\""));
// 5- Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.
var famous_person = 'Quaid e Azam';
var quote = 'With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve';
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);
