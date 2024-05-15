"use strict";
// Question 144: Explain the use of the Promise.all() method with an example.
// Simulated asynchronous functions that return Promises
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 1");
        }, 1500);
    });
}
function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 2");
        }, 1000);
    });
}
function fetchData3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 3");
        }, 2000);
    });
}
// Using Promise.all() to fetch data from multiple APIs concurrently
Promise.all([fetchData1(), fetchData2(), fetchData3()])
    .then((results) => {
    console.log("All data fetched:", results);
})
    .catch((error) => {
    console.error("Error fetching data:", error);
});
/* KEY NOTES:

The Promise.all() static method takes an iterable of promises as
and returns a single Promise. This returned promise fulfills when all
of the input's promises fulfill (including when an empty iterable is
passed), with an array of the fulfillment values. It rejects when any
of the input's promises rejects, with this first rejection reason.

*/
