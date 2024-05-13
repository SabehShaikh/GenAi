// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
var now = new Date();
var newYear = new Date("January 1, 2025");
var diffInMs = newYear.getTime() - now.getTime();
var days = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
console.log("Days left until New Year: ".concat(days));
/* KEY NOTES:
Breaking down (1000 * 60 * 60 * 24):
1000 milliseconds in 1 second.
60 seconds in 1 minute.
60 minutes in 1 hour.
24 hours in 1 day.
*/
