"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryTestPassed = exports.isStudentOnSite = exports.getStudent = exports.getOnsiteStudents = exports.getAllStudents = void 0;
const data_1 = __importDefault(require("./data"));
const getAllStudents = () => {
    return data_1.default;
};
exports.getAllStudents = getAllStudents;
const getOnsiteStudents = () => {
    const result = data_1.default.filter((student) => student.isOnsiteAllowed);
    return result;
};
exports.getOnsiteStudents = getOnsiteStudents;
const getStudent = (rollNo) => {
    const foundUser = data_1.default.find((student) => student.rollNo === rollNo);
    return foundUser;
};
exports.getStudent = getStudent;
const isStudentOnSite = (rollNo) => {
    const foundUser = data_1.default.find((student) => student.rollNo === rollNo && student.isOnsiteAllowed);
    if (foundUser) {
        return true;
    }
    else {
        return false;
    }
};
exports.isStudentOnSite = isStudentOnSite;
const entryTestPassed = () => {
    const passedStudent = data_1.default.filter((student) => student.entryTest.isPassed === true);
    return passedStudent;
};
exports.entryTestPassed = entryTestPassed;
