"use strict";
// Question 132: Discuss the difference between default and named
// exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module which was exported using named export
var export_1 = require("./export");
console.log((0, export_1.sum)(3, 5));
// Importing module which was exported using export default
var default_1 = require("./default");
(0, default_1.default)();
