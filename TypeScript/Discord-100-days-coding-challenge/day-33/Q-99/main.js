// Question 99: Generate a date object representing your next birthday and log it to the console.
var now = new Date();
var birthdate = new Date("February 15, 2004");
var nextBirthdate = new Date("February 15, 2025");
if (nextBirthdate < now) {
    console.log(nextBirthdate);
}
console.log("Next Birthday:", nextBirthdate.toLocaleString());
