import inquirer from "inquirer";

let choice = await inquirer.prompt([
    {
        name: "choice1",
        type: "list",
        choices: ['rock', 'paper', 'scissor']
    },
    {
        name: "choice2",
        type: "list",
        choices: ['rock', 'paper', 'scissor']
    }
]);

let compare = function (choice1: string, choice2: string) {


    console.log(`Player 1 chose: ${choice1}`);
    console.log(`Player 2 chose: ${choice2}`);

    if (choice1 === choice2) {
        console.log("It's a tie!");
    } else if (choice1 === "rock") {
        if (choice2 === "scissor") {
            console.log("Rock wins!");
        } else {
            console.log("Paper wins!");
        }
    } else if (choice1 === "scissor") {
        if (choice2 === "paper") {
            console.log("Scissors wins!");
        } else {
            console.log("Rock wins!");
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("Paper wins!");
        } else {
            console.log("Scissors wins!");
        }
    }
};

compare(choice.choice1, choice.choice2);
