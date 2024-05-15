// Question 134: Take a JSON string and parse it into a JavaScript object.

const jsonString = '{"name": "John Doe", "age": 30, "city": "New York"}'; 
console.log(`JSON: ${jsonString}`);

const jsonObject = JSON.parse(jsonString);
console.log("Object:", jsonObject);

