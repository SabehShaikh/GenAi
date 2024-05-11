// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts 
// it to uppercase, then to lowercase, and logs both.

function Converting(str: string){

    let upperCase = str.toUpperCase()
    console.log(`UpperCase: ${upperCase}`)

    let lowerCase = str.toLowerCase()
    console.log(`LowerCase: ${lowerCase}`)
}

Converting('We are Learning Typescript.')