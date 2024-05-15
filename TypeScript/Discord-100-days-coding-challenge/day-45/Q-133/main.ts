// Question 133: Write a JavaScript object and convert it into a JSON string.

let myObj = {
    name: "Ronaldo",
    age: 39,
    country: "Portugal",
    clubs: ["Manchester United", "Real Madrid", "Juventus", "Al Nassr"]
};

console.log(myObj)

const jsonString = JSON.stringify(myObj)
console.log(jsonString)