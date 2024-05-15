// Question 132: Discuss the difference between default and named
// exports in JavaScript modules.

// Importing module which was exported using named export
import { sum } from "./export";
console.log(sum(3,5))

// Importing module which was exported using export default
import greet from "./default";
greet()
