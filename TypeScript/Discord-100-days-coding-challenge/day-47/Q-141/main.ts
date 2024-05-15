// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

// Simulated asynchronous function that returns a Promise
function fetchData() {
    return new Promise((resolve) => {
      // Simulating asynchronous operation (e.g., fetching data from a server)
      setTimeout(() => {
        resolve("Data fetched!"); // Resolving the Promise after timeout
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Async function to demonstrate the use of 'await'
  async function fetchDataAsync() {
    // 'await' pauses the execution until the Promise from fetchData() settles
    const data = await fetchData();
    console.log(data); // Prints: Data fetched!
    // Execution continues after the Promise is resolved
  }
  
  // Calling the async function
  fetchDataAsync(); // This line initiates the asynchronous operation
  
  console.log("After calling fetchDataAsync()"); // This line executes immediately
  