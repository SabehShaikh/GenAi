import students from "./data";

export const getAllStudents = () => {
  return students;
};

export const getOnsiteStudents = () => {
  const result = students.filter((student) => student.isOnsiteAllowed);
  return result;
};

export const getStudent = (rollNo: number) => {
  const foundUser = students.find((student) => student.rollNo === rollNo);
  return foundUser;
};

export const isStudentOnSite = (rollNo: number) => {
  const foundUser = students.find(
    (student) => student.rollNo === rollNo && student.isOnsiteAllowed
  );
  if (foundUser) {
    return true;
  } else {
    return false;
  }
};

export const entryTestPassed = () => {
  const passedStudent = students.filter(
    (student) => student.entryTest.isPassed === true
  );
  return passedStudent;
};
