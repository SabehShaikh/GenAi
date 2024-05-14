"use strict";
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
const StudentData = new Map();
StudentData.set("289", "Sabeh");
StudentData.set("292", "John");
StudentData.set("294", "Alex");
StudentData.forEach((name, id) => {
    console.log(`Student ID: ${id}, NAME: ${name}`);
});
/*KEY NOTES:
 In the forEach method for a Map, the callback function takes
  three arguments: value, key, and map.
 map.forEach((value, key, map)
 
name corresponds to the value (student name) in the map.
id corresponds to the key (student ID) in the map.
  */
