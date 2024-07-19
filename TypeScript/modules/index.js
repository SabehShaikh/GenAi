"use strict";
/* 3 types:
default export / import
named {} export / import
as alias export / import
import * as student --> get everything
*/
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const result = (0, student_1.getAllStudents)();
// console.log("result:", result);
const onsiteStudents = (0, student_1.getOnsiteStudents)();
// console.log("onsiteStudents:" , onsiteStudents)
const foundStudent = (0, student_1.getStudent)(2005);
if (foundStudent === undefined) {
    console.log("Student does not exists");
}
else {
    console.log("foundStudent:", foundStudent);
}
const isOnsiteAllowed = (0, student_1.isStudentOnSite)(2005);
console.log("isOnsiteAllowed:", isOnsiteAllowed);
const passedStudent = (0, student_1.entryTestPassed)();
console.log("Passed student:", passedStudent);
