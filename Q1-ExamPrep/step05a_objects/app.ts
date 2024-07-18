let teacher = {
  name: "Zeeshan",
  experience: "10",
};

console.log(teacher.name); // dot notation
console.log(teacher["experience"]); // square notation

// Type Declaration
let student: {
  name: string;
  age: number;
};

student = {
  name: "Hira",
  age: 30,
};

console.log(student["name"]);
console.log(student.age);
