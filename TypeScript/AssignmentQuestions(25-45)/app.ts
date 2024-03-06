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

