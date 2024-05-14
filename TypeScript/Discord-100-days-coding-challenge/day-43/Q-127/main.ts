// Question 127: Convert a traditional function expression to an arrow function.

function greet(name: string): string{
    return `Hello ${name}`
}
console.log(greet('John'))

// In Arrow function:
const greet2 = (name: string): string=> {
    return `Hello ${name}`
}

console.log(greet2('Sabeh'))