// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and
// logs all of its properties and values.
function logObjectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObjectProperties({
    make: "Ford",
    model: "Mustang",
    year: 2022,
    color: "red",
});
