// Question 135: Explain how you can format a JSON string with proper
//  indentation for readability.
// Reusing the person object from Question 133
var person = {
    name: "Vinicius Junior",
    age: 23,
    club: "Real Madrid",
};
// Converts the object into a JSON string with indentation
var jsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonString);
/* Outputs:
{
  name: "Vinicius Junior",
  age: 23,
  club: "Real Madrid",
}
*/
