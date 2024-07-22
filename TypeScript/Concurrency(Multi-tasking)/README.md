# Multi Tasking

Concurrency allows us to manage multiple tasks at once, improving the efficiency and performance of applications, especially for I/O-bound tasks like reading files, making network requests, or interacting with databases.

## Table of Contents
1. [Callback Functions](#callback-functions)
2. [Promises](#promises)
3. [Async/Await](#async-await)

## Callback Functions

Callback functions are functions passed as arguments to other functions. They allow code to be executed after an asynchronous operation has completed.

```typescript
function parentFunction(callback: () => void) {
  console.log("I am parent function");
  callback();
}

parentFunction(() => {
  console.log("I am callback function");
});

