// ARRAY OF OBJECTS:
var data = [
    {
        name: "sabeh",
        age: 20,
    },
    {
        name: "ibrahim",
        age: 20,
    },
];
// TO CONVERT FROM JSON TO OBJECT:
// JSON.parse()
// TO CONVERT FROM OBJECT TO JSON:
// JSON.stringify()
var detail = {
    name: "Vipin",
    age: 21,
};
// accessing JSON object
console.log(detail.name); // Vipin
// We can also use square bracket syntax [] to access JSON data.
var value = {
    name: "Vipin",
    age: 21,
};
console.log(value["age"]); //21
