// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using
//  let and assign an initial value. Then, update its value within the same function and log both the
//   initial and updated values.
function assignAndupdateVar() {
    var value = 'abc';
    console.log("Initial value ".concat(value));
    value = 'xyz';
    console.log("Updated value ".concat(value));
}
assignAndupdateVar();
