// Question 147: Explain how to handle errors in a callback pattern.
function fetchData(callback) {
    var randomNum = Math.floor(Math.random() * 6 + 1);
    if (randomNum) {
        var data = "Fetched data successfully";
        callback(null, data);
    }
    else {
        var error = new Error("Failed to fetch data");
        callback(error);
    }
}
// inline callback function (also known as an anonymous callback function):
// fetchData((error, data) => {
//   if (error) {
//     console.error(error.message);
//   } else {
//     console.log(data);
//   }
// });
// Define the callback function to handle errors and success
function handleData(error, data) {
    if (error) {
        console.error("Error fetching data:", error.message);
    }
    else {
        console.log("Fetched data:", data);
    }
}
// Using the fetchData function with error handling in the callback
fetchData(handleData);
/* KEY NOTES:

Error handling in a callback means managing errors that may occur during asynchronous operations, such as fetching
 data from a server, reading files, or executing any time-consuming task
 */
