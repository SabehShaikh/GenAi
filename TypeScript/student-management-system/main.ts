import inquirer from "inquirer";

class Student {
  name: string;
  studentID: string;
  courses: Course[];
  balance: number;

  constructor(name: string, studentID: string, balance: number) {
    this.name = name;
    this.studentID = studentID;
    this.courses = [];
    this.balance = balance;
  }

  enrollCourse(course: Course) {
    if (!this.courses.includes(course)) {
      this.courses.push(course);
    } else {
      console.log(`Already enrolled in ${course.courseName}`);
    }
  }

  viewBalance() {
    console.log(
      `Balance for ${this.name} (${this.studentID}): $${this.balance}`
    );
  }

  payTuition(amount: number) {
    this.balance -= amount;
    console.log(
      `Payment of $${amount} received. New balance: $${this.balance}`
    );
  }

  showStatus() {
    console.log(`Student: ${this.name}`);
    console.log(`ID: ${this.studentID}`);
    console.log(
      `Courses Enrolled: ${this.courses
        .map((course) => course.courseName)
        .join(", ")}`
    );
    console.log(`Balance: $${this.balance}`);
  }
}

class Course {
  courseName: string;
  courseID: string;

  constructor(courseName: string, courseID: string) {
    this.courseName = courseName;
    this.courseID = courseID;
  }
}

class StudentManagementSystem {
  students: Student[];
  courses: Course[];

  constructor() {
    this.students = [];
    this.courses = [];
  }

  addStudent(name: string) {
    const studentID = this.generateStudentID();
    const newStudent = new Student(name, studentID, 0);
    this.students.push(newStudent);
    console.log(`Added student ${name} with ID ${studentID}`);
  }

  generateStudentID(): string {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  findStudent(studentID: string): Student | undefined {
    return this.students.find((student) => student.studentID === studentID);
  }

  enrollStudent(studentID: string, courseID: string) {
    const student = this.findStudent(studentID);
    const course = this.courses.find((course) => course.courseID === courseID);
    if (student && course) {
      student.enrollCourse(course);
    } else {
      console.log("Student or Course not found");
    }
  }

  listCourses() {
    console.log("Available Courses:");
    this.courses.forEach((course) => {
      console.log(`${course.courseID}: ${course.courseName}`);
    });
  }

  addCourse(courseName: string, courseID: string) {
    const newCourse = new Course(courseName, courseID);
    this.courses.push(newCourse);
    console.log(`Added course ${courseName} with ID ${courseID}`);
  }
}

const system = new StudentManagementSystem();

async function mainMenu() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Choose an action",
      choices: [
        "Add Student",
        "Enroll in Course",
        "View Balance",
        "Pay Tuition",
        "Show Status",
        "Exit",
      ],
    },
  ]);

  switch (answers.action) {
    case "Add Student":
      await addStudent();
      break;
    case "Enroll in Course":
      await enrollInCourse();
      break;
    case "View Balance":
      await viewBalance();
      break;
    case "Pay Tuition":
      await payTuition();
      break;
    case "Show Status":
      await showStatus();
      break;
    case "Exit":
      return;
  }

  await mainMenu(); // Loop back to the main menu
}

async function addStudent() {
  const answers = await inquirer.prompt([
    { name: "name", message: "Enter student name:" },
  ]);
  system.addStudent(answers.name);
}

async function enrollInCourse() {
  const studentID = await inquirer.prompt([
    { name: "studentID", message: "Enter student ID:" },
  ]);
  const courseID = await inquirer.prompt([
    { name: "courseID", message: "Enter course ID:" },
  ]);
  system.enrollStudent(studentID.studentID, courseID.courseID);
}

async function viewBalance() {
  const studentID = await inquirer.prompt([
    { name: "studentID", message: "Enter student ID:" },
  ]);
  const student = system.findStudent(studentID.studentID);
  if (student) {
    student.viewBalance();
  } else {
    console.log("Student not found");
  }
}

async function payTuition() {
  const studentID = await inquirer.prompt([
    { name: "studentID", message: "Enter student ID:" },
  ]);
  const amount = await inquirer.prompt([
    { name: "amount", message: "Enter amount to pay:" },
  ]);
  const student = system.findStudent(studentID.studentID);
  if (student) {
    student.payTuition(Number(amount.amount));
  } else {
    console.log("Student not found");
  }
}

async function showStatus() {
  const studentID = await inquirer.prompt([
    { name: "studentID", message: "Enter student ID:" },
  ]);
  const student = system.findStudent(studentID.studentID);
  if (student) {
    student.showStatus();
  } else {
    console.log("Student not found");
  }
}

// Start the program
mainMenu();
