// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
//  It should log each hobby with a statement saying you enjoy that hobby.

const myfunction = (...hobbies: string[]) => {
    console.log("i enjoy these hobbies", hobbies);
}

myfunction('Coding', 'Gaming', 'Reading');


//  it logs a separate message for each hobby because of forEach loop:
const my_function = (...hobbies: string[]) => {

    hobbies.forEach((hobby) => {
        console.log('i enjoy these hobbies:', hobby)
    })
}
my_function('Coding', 'Gaming', 'Reading')