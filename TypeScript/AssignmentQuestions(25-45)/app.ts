// 25-Alien Colors #1: Imagine an alien was just shot down in a game. 
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color: string = 'green'
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == 'green') {
    console.log(`Player just earned 5 points.`)
}
// • Write one version of this program that passes the if test and another that fails. 
// (The version that fails will have no output.)
if (alien_color == 'yellow') {
    console.log(`You just earned 5 points.`)
}

// 26- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color == 'green') {
    console.log(`Player just earned 5 points for shooting the alien.`)
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else {
    console.log(`Player just earned 10 points.`)
}
// • Write one version of this program that runs the if block and another that runs the else block.
alien_color = 'red'
if (alien_color == 'green') {
    console.log(`Player just earned 5 points for shooting the alien.`)
} else {
    console.log(`Player just earned 10 points.`)
}

// 27-Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// • If the alien is green, print a message that the player earned 5 points.
let aliencolor: string = 'green'
if (aliencolor == 'green') {
    console.log(`Player earned 5 points.`)
}
else if (aliencolor == 'yellow') {
    console.log(`Player earned 10 points.`)
}
else if (aliencolor == 'red') {
    console.log(`Player earned 15 points.`)
}
else {
    console.log(`wrong color selected.`)
}

// version two: 
// • If the alien is red, print a message that the player earned 15 points.
aliencolor = 'red'
if (aliencolor == 'green') {
    console.log(`Player earned 5 points.`)
}
else if (aliencolor == 'yellow') {
    console.log(`Player earned 10 points.`)
}
else if (aliencolor == 'red') {
    console.log(`Player earned 15 points.`)
}

// version three:
// • If the alien is yellow, print a message that the player earned 10 points.
aliencolor = 'yellow'
if (aliencolor == 'green') {
    console.log(`Player earned 5 points.`)
}
else if (aliencolor == 'yellow') {
    console.log(`Player earned 10 points.`)
}
else if (aliencolor == 'red') {
    console.log(`Player earned 15 points.`)
}

// 28- Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let age: number = 20
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log(`person is a baby.`)
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log(`person is a toddler.`)
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log(`person is a kid.`)
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log(`person is a teenager.`)
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log(`person is an adult.`);
}
// • If the person is age 65 or older, print a message that the person is an elder.
// else {
//     console.log(`person is an elder.`)
// }
// Another way
else if (age >= 65) {
    console.log(`person is an elder.`)
}

// 29-Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: string[] = ['mango', 'orange', 'strawberry']

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.includes('mango')) {
    console.log(`I really like mango!`)
}
if (favorite_fruits.includes('orange')) {
    console.log(`I really like orange!`)
}
if (favorite_fruits.includes('strawberry')) {
    console.log(`I really like strawberry!`)
}
if (favorite_fruits.includes('banana')) {
    console.log(`I really like banana!`)
}
if (favorite_fruits.includes('kiwi')) {
    console.log(`I really like kiwi`)
}

// 30-Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

let usernames: string[] = ['admin', 'RonaldoFan7', 'MessiMagic10', 'NeymarJr11', 'MbappeSpeed', 'Beckham23'];
// for (let i = 0; i < usernames.length; i++) {
//     // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
//     if (usernames[i] === 'admin') {
//         console.log(`Hello admin, would you like to see status report?`);

//     }
//     // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
//     else {
//         console.log(`Hello  ${usernames[i]} , thank you for logging in again.`)
//     }
// }
// Another way -- ForEach() Loop:
usernames.forEach(username => {
    if (username === 'admin') {
        console.log(`Hello admin, would you like to see status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
// Another way -- For of() Loop:
// for (const username of usernames) {
//     if (username === 'admin') {
//         console.log(`Hello admin, would you like to see status report?`);
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }


// 31-No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

// let usernames: string[] = ['admin', 'RonaldoFan7', 'MessiMagic10', 'NeymarJr11', 'MbappeSpeed', 'Beckham23'];
if (usernames.length === 0) {
    console.log(`We need to find some users!`);
} else {
    usernames = [];
    console.log(`All users removed: [${usernames}] , ${usernames.length}`);
}

//32-Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
let current_users: string[] = ['mustAfa', 'aLi', 'raMeez', 'bilAl', 'sHan'];

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users: string[] = ['hasNain', 'bilAl', 'jiBran', 'AmmAr', 'sHan'];

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
//  If a username has not been used, print a message saying that the username is available.
new_users.forEach(newUsername => {
    let lowerCase: string = newUsername.toLowerCase();

    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`${newUsername} is not available, enter a new username.`);
    } else {
        console.log(`Username ${newUsername} is available.`);
    }
});


// 33-Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// Store the numbers 1 through 9 in a array.
let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array.
// Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
myNumbers.forEach((num) => {
    let ordinalNumber: string;
    if (num == 1) {
        ordinalNumber = 'st';
    }
    else if (num == 2) {
        ordinalNumber = 'nd';
    }
    else if (num == 3) {
        ordinalNumber = 'rd';
    }
    else {
        ordinalNumber = 'th';
    }
    console.log(`${num}${ordinalNumber}`);
});

// Another way- For of loop:
// for (let i of myNumbers) {
//     let ordinalNumber: string;
//     if (i == 1) {
//         ordinalNumber = 'st'
//     }
//     else if (i == 2) {
//         ordinalNumber = 'nd'
//     }
//     else if (i == 3) {
//         ordinalNumber = 'rd'
//     }
//     else {
//         ordinalNumber = 'th'
//     }
//     console.log(`${i}${ordinalNumber}`);
// }


