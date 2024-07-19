/* 3 types:
default export / import
named {} export / import
as alias export / import 
import * as student --> get everything
*/

import {
  getAllStudents,
  getOnsiteStudents,
  getStudent,
  isStudentOnSite,
  entryTestPassed
} from "./student";

const result = getAllStudents();
// console.log("result:", result);

const onsiteStudents = getOnsiteStudents();
// console.log("onsiteStudents:" , onsiteStudents)

const foundStudent = getStudent(2005);
if (foundStudent === undefined) {
  console.log("Student does not exists");
} else {
  console.log("foundStudent:", foundStudent);
}

const isOnsiteAllowed = isStudentOnSite(2005);
console.log("isOnsiteAllowed:", isOnsiteAllowed);

const passedStudent = entryTestPassed();
console.log("Passed student:" , passedStudent)