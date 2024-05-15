// Question 135: Explain how you can format a JSON string with proper
//  indentation for readability.

const person = {
  name: "Vinicius Junior",
  age: 23,
  club: "Real Madrid",
};

// Converts the object into a JSON string with indentation
const jsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space

// null is used as the replacer function (if needed,
//  you can provide a function to manipulate the serialization process).

console.log(jsonString);
/* Outputs:
  {
    name: "Vinicius Junior",
    age: 23,
    club: "Real Madrid",
  }
  */
