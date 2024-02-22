// 2- Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person_name = 'Sabeh is a boy'; // Added type annotation
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
//6- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after striping the white spaces
var whitespace_name = '\t Sabeh \n';
console.log("Whitespace character: ".concat(whitespace_name));
var striped_name = whitespace_name.trim();
console.log("Name after striping: ".concat(striped_name));
// 7- Number Eight: Write addition, subtraction, multiplication, and division operations that each result
//  in the number 8. Be sure to enclose your operations in print statements to see the results.
var add_numone = 5;
var add_numtwo = 3;
var add_result = add_numone + add_numtwo;
console.log("Addition of ".concat(add_numone, " + ").concat(add_numtwo, " is ").concat(add_result));
var sub_numone = 11;
var sub_numtwo = 3;
var sub_result = sub_numone - sub_numtwo;
console.log("Subtraction of ".concat(sub_numone, " - ").concat(sub_numtwo, " is ").concat(sub_result));
var mul_one = 2;
var mul_two = 4;
var mul_result = mul_one * mul_two;
console.log("Multiplication of ".concat(mul_one, " * ").concat(mul_two, " is ").concat(mul_result));
var div_one = 16;
var div_two = 2;
var div_result = div_one / div_two;
console.log("Division of ".concat(div_one, " / ").concat(div_two, " is ").concat(div_result));
// 9- Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message
var fave_num = 15;
console.log("Favorite number: ".concat(fave_num));
// 10-Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, just add 
// name and the current date at the top of each program file. Then write one sentence describing what the program does.
var reclength = 5;
var width = 3;
var area = reclength * width;
console.log("The area of the rectangle with length ".concat(reclength, " and width ").concat(width, " is ").concat(area, "."));
