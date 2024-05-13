// Question 99: Generate a date object representing your next birthday and log it to the console.

let now = new Date();

let birthdate = new Date("February 15, 2004");
let nextBirthdate = new Date("February 15, 2025");

if (nextBirthdate < now) {
  nextBirthdate.setFullYear(now.getFullYear() + 1);
}
console.log("Next Birthday:", nextBirthdate.toLocaleString());
