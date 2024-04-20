// 2- Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let person_name: string = 'Sabeh is a boy'; // Added type annotation
console.log(`Hello ${person_name}, Would you like to learn some Python today?`);

// 3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(`In UpperCase ${person_name.toUpperCase()}`);
console.log(`In LowerCase ${person_name.toLowerCase()}`);
console.log(`In TitleCase ${person_name.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}`);



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

// Sabeh, this program determines area of the rectangle:

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

guestList[guestList.indexOf(unavailable_Guest)] = new_Guest

// guestList[4] = new_Guest

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

// 19-Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`Number of people invited to dinner are: ${guestList.length}`)


// 18-Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let five_stadiums: string[] = ['Emirates Stadium', 'Santiago Bernabéu', 'Allianz Arena', 'King Fahd Stadium', 'Old Trafford'];

// Print your array in its original order.
console.log(`Original order: ${five_stadiums}`);

// • Print your array in alphabetical order without modifying the actual list.
console.log(`Alphabetical order without modifying list: ${[...five_stadiums].sort()}`); // made copy without modifying actual array

// • Show that your array is still in its original order by printing it.
console.log(`Still In Original order: ${five_stadiums}`);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse alphabetical order: ${[...five_stadiums].sort().reverse()}`);

// • Show that your array is still in its original order by printing it again.
console.log(`Still In Original order: ${five_stadiums}`);

// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Reverse order: ${five_stadiums.reverse()}`);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Back to original order: ${five_stadiums.reverse()}`);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`Alphabetical order with modifying list: ${five_stadiums.sort()}`);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`Reverse alphabetical order again: ${[...five_stadiums].sort().reverse()}`);


// 20- Think of something you could store in a array. For example, you could make a list of
//  mountains, rivers, countries, cities, languages, or anything else you’d like.
//  Write a program that creates a list containing these items.

const mountains: string[] = ["Mount Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
const rivers: string[] = ["Nile", "Amazon", "Yangtze", "Mississippi", "Danube"];
const countries: string[] = ["Japan", "Palestine", "Germany", "Australia", "Russia"];
const cities: string[] = ["Tokyo", "Jerusalem", "Berlin", "Sydney", "Moscow"];
const languages: string[] = ["English", "Mandarin Chinese", "Spanish", "Urdu", "Arabic"];

console.log("Mountains:", mountains);
console.log("Rivers:", rivers);
console.log("Countries:", countries);
console.log("Cities:", cities);
console.log("Languages:", languages);


// 21-They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface FootballPlayer {
    name: string;
    position: string;
    nationality: string;
    age: number;
    club: string;
}

let footballer: FootballPlayer = {
    name: 'Cristiano Ronaldo',
    position: 'Forward',
    nationality: 'Portuguese',
    age: 39,
    club: 'Al-Nassr'
};
console.log(footballer);

// 22-Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.

let myArr: string[] = ['One', 'Two', 'Three', 'Four']
// Accessing an index that doesn't exist, will print undefined
console.log(myArr[5])
//Make sure you correct the error before closing the program.
console.log(myArr)


// 23-Conditional Tests:
//  Write a series of conditional tests.
let car: string = 'subaru';

// test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True
// test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False
// test 3
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // True
// test 4
console.log("Is car === 'toyota'? I predict True.");
console.log(car === 'toyota'); // false
// test 5
console.log("Is car.charAt(0) == 's'? I predict True.");
console.log(car.charAt(0) == 's'); // True
// test 6
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False
// test 7
console.log("Is car.length == 6? I predict True.");
console.log(car.length == 6); // True
// test 8
console.log("Is car.length == 5? I predict True.");
console.log(car.length == 5); // false
// test 9
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU'); // True
// test 10
console.log("Is car == 'Tesla'? I predict False.");
console.log(car == 'Tesla'); // False


// 24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try 
// more comparisons, write more tests. Have at least one True and one False result for each of the following:

let fave_club: string = 'Real Madrid'
console.log(fave_club);

// • Tests for equality  with strings
console.log(`Is fave club == 'Real Madrid?'`)
console.log(`${fave_club == 'Real Madrid'}`);
// • Tests for inequality  with strings
console.log(`Is fave club != 'Real Madrid?'`)
console.log(`${fave_club != 'Real Madrid'}`);

// • Tests using the lower case function
console.log(`Is ${fave_club.toLowerCase()} == 'real madrid'?`)
console.log(`${fave_club.toLowerCase() == 'real madrid'}`);

// • Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to (== , != , > , < , >= , <=)

let number: number = 15;
// involving equality
console.log(`Is ${number} == 15`)
console.log(`${number == 15} `);
// inequality
console.log(`Is ${number} != 15`)
console.log(`${number != 15} `);
// greater than
console.log(`Is ${number} > 20`)
console.log(`${number > 20} `);
// less than
console.log(`Is ${number} < 12`)
console.log(`${number < 12} `);
// greater than or equal to
console.log(`Is ${number} >= 15`)
console.log(`${number >= 15} `);
// less than or equal to
console.log(`Is ${number} <= 25`)
console.log(`${number <= 25} `);

// • Tests using "and" operators
console.log(`Is ${number} > 12 && ${number} < 15`);
console.log(`${number > 12 && number < 15} `);
// • Tests using "or" operators
console.log(`Is ${number} > 20 || ${number} < 16`);
console.log(`${number > 20 || number < 16} `);

let squad_players: string[] = ['Vinicius', 'Saka', 'Odegaard', 'Bellingham']
// • Test whether an item is in a array
console.log(`Is 'Saka' in the array?`);
console.log(squad_players.includes('Saka'));
// Test whether an item is not in an array
console.log(`Is 'Benzema' in the array?`);
console.log(squad_players.includes('Benzema'));






