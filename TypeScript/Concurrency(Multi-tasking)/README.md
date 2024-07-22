# Multi Tasking

Concurrency allows us to manage multiple tasks at once, improving the efficiency and performance of applications, especially for I/O-bound tasks like reading files, making network requests, or interacting with databases.

## Table of Contents

1. [Callback Functions](#callback-functions)
2. [Promises](#promises)
3. [Async/Await](#asyncawait)
4. [Call Stack](#call-stack)
5. [Event Loop](#event-loop)
6. [Callback Queue](#callback-queue)
7. [Microtasks and Macrotasks](#microtasks-and-macrotasks)

## Callback Functions:

Callback functions are functions passed as arguments to other functions. They allow code to be executed after an asynchronous operation has completed.

```typescript
function parentFunction(callback: () => void) {
  console.log("I am parent function");
  callback();
}

parentFunction(() => {
  console.log("I am callback function");
});
```

## Promise:

Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a way to handle asynchronous results without nesting callbacks.

Resolve: Indicates that the asynchronous operation was successful and returns a result.
Reject: Indicates that the asynchronous operation failed and returns an error.
.then: Used to handle the result of a Promise when it is resolved.
.catch: Used to handle errors when a Promise is rejected.

```typescript
function asyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Operation complete");
    }, 1000);
  });
}

asyncOperation()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## Async/Await:

Async/Await is a feature that makes working with Promises simpler. It lets you write asynchronous code that looks like synchronous code using async functions and await expressions.

async: Declares a function as asynchronous, allowing it to use await inside.
await: Pauses execution until a Promise is resolved or rejected.

```typescript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

async function performTask() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

performTask();
```

## Call Stack:

The Call Stack is a data structure that stores information about the active functions and their execution context. It follows the Last In, First Out (LIFO) principle. Each time a function is called, it's pushed onto the stack, and when it returns, it's popped off.

Push: Adding a function call to the stack.
Pop: Removing a function call from the stack once it's completed.

## Event Loop:

The Event Loop is responsible for executing code, handling events, and executing queued tasks. It continuously checks the Call Stack and the Callback Queue to execute tasks. If the Call Stack is empty, it processes the tasks in the Callback Queue.

Main Thread: Where synchronous code runs and where the Call Stack is managed.
Event Queue: Holds asynchronous tasks to be executed when the Call Stack is clear.

## Callback Queue:

The Callback Queue (or Task Queue) holds tasks that are ready to be executed once the Call Stack is empty. These tasks are usually the result of asynchronous operations, like timers or network requests.

* Task: Represents a function that will be executed after the Call Stack is empty.
* Processing: The Event Loop picks tasks from the Callback Queue and pushes them to the Call Stack for execution.

## Microtasks and Macrotasks
The Event Loop divides tasks into Microtasks and Macrotasks (or Tasks). These queues help manage and prioritize tasks.

* Microtasks:

Microtasks are used for operations that need to be performed immediately after the current script has finished executing but before any other I/O tasks or rendering. Microtasks include Promise callbacks and MutationObserver callbacks.

Queue: The Microtask Queue is processed before the Macrotask Queue.

* Macrotasks

Macrotasks include tasks such as I/O operations, timers (setTimeout, setInterval), and user interactions. They are processed after the Microtasks Queue is cleared.

Execution: Macrotasks are executed after all Microtasks in the queue have been processed.
Queue: The Macrotask Queue is processed in the order tasks are added.
