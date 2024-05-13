"use strict";
// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
// function currentDate() {
//     return new Date().toLocaleDateString()
// }
// console.log(currentDate())
function currentDate() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
    // Format date string as "DD-MM-YYYY"
    const formattedDate = `${date}-${month}-${year}`;
    return formattedDate;
}
console.log(currentDate());
