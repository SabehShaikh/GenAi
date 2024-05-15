// Question 131: Create two modules; one that exports a class,
// and another that imports the class and creates an instance.
import { Student } from "./class.js";
const myStudents = new Student("Shane", 267);
console.log(myStudents);
