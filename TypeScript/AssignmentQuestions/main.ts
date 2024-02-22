// 2- Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let person_name: string = 'Sabeh is a boy'; // Added type annotation
console.log(`Hello ${person_name}, Would you like to learn some Python today?`);

// 3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(`In UpperCase ${person_name.toUpperCase()}`);
console.log(`In LowerCase ${person_name.toLowerCase()}`);

// 4- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quotation: string = "A person who never made a mistake never tried anything new.";
console.log(`Albert Einstein once said, "${quotation}"`);

// 5- Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.

let famous_person: string = 'Quaid e Azam';
let quote: string = 'With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve';
let message: string = `${famous_person} once said, "${quote}"`;
console.log(message);

//6- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after striping the white spaces

let whitespace_name: string = '\t Sabeh \n';
console.log(`Whitespace character: ${whitespace_name}`);
let striped_name: string = whitespace_name.trim();
console.log(`Name after striping: ${striped_name}`);

// 7- Number Eight: Write addition, subtraction, multiplication, and division operations that each result
//  in the number 8. Be sure to enclose your operations in print statements to see the results.

let add_numone: number = 5;
let add_numtwo: number = 3;
let add_result: number = add_numone + add_numtwo;
console.log(`Addition of ${add_numone} + ${add_numtwo} is ${add_result}`);

let sub_numone: number = 11;
let sub_numtwo: number = 3;
let sub_result: number = sub_numone - sub_numtwo;
console.log(`Subtraction of ${sub_numone} - ${sub_numtwo} is ${sub_result}`);

let mul_one: number = 2;
let mul_two: number = 4;
let mul_result: number = mul_one * mul_two;
console.log(`Multiplication of ${mul_one} * ${mul_two} is ${mul_result}`);

let div_one: number = 16;
let div_two: number = 2;
let div_result: number = div_one / div_two;
console.log(`Division of ${div_one} / ${div_two} is ${div_result}`);

// 9- Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message

let fave_num: number = 15;
console.log(`Favorite number: ${fave_num}`);

// 10-Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, just add 
// name and the current date at the top of each program file. Then write one sentence describing what the program does.

let reclength: number = 5;
let width: number = 3;
let area: number = reclength * width;

console.log(`The area of the rectangle with length ${reclength} and width ${width} is ${area}.`);
