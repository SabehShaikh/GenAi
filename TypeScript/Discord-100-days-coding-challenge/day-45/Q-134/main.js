// Question 134: Take a JSON string and parse it into a JavaScript object.
var jsonString = '{"name": "John Doe", "age": 30, "city": "New York"}';
console.log("JSON: ".concat(jsonString));
var jsonObject = JSON.parse(jsonString);
console.log("Object:", jsonObject);
