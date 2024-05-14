// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
var currentTime = new Date().getHours();
console.log(currentTime);
if (currentTime < 12) {
    console.log("Good Morning");
}
else {
    console.log("Good Afternoon");
}
