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


// 11- Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ['Sabeh', 'Ronaldo', 'Messi', 'Mbappe']

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
//  The text of each message should be the same, but each message should be personalized with the person’s name.

for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]} How are you?`);
}

// 13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ['motorcycle', 'car', 'bus', 'train'];

for (let i = 0; i < transportation.length; i++) {
    console.log(`I would like to own a ${transportation[i]}`);
}

// 14- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes
// at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ['Kohli', 'Shaheen', 'Shahdab', 'Babar Azam', 'Haris']

for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]}, Would you like to come for dinner tonight?`);

}


// 15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite.

let unavailable_Guest: string = 'Haris'
let new_Guest: string = 'Mohammad Rizwan'


guestList[4] = new_Guest

for (let i = 0; i < guestList.length; i++) {
    console.log(`Changed GuestList: ${guestList[i]}, Would you like to come for dinner tonight?`);

}

console.log(`${unavailable_Guest} will not be able to come.`)

// 16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.


console.log(`We found a bigger dinner table, now we can invite more guests.`)

guestList.unshift('Sarfraz') // added in the beginning
guestList.splice(2, 0, 'Amir')
guestList.push('Naseem')

for (let i = 0; i < guestList.length; i++) {
    console.log(`Big guestList: ${guestList[i]}, Would you like to come for dinner tonight?`);

}

// 17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

console.log(`Sad news, We can only invite two people for dinner`)

while (guestList.length > 2) {
    let removedGuest = guestList.pop()
    console.log(`Sorry, ${removedGuest} we cannot invite you for dinner.`)
}

for (let i = 0; i < guestList.length; i++) {
    console.log(`Big guestList: ${guestList[i]}, Would you still like to come for dinner tonight?`);

}
guestList.splice(0, 2)
console.log(guestList)