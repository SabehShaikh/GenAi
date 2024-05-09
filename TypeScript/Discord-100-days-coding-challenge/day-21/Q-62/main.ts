// Q62 - Making a Student Template: Create a blueprint for student information, including their
// name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// class Student {
//   name: string;
//   age: number;
// }
//   classes: string[];

interface Student {
  name: string;
  age: number;
  classes: string[];
}

let myStudent: Student = {
  name: "Sabeh Shaikh",
  age: 20,
  classes: ["DSA", "COMPUTER ARCHITECTURE", "DIFFERENTIAL EQUATIONS"],
};

console.log(myStudent);
