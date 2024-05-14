// Question 113: Write a function that checks if a Map contains a key for
// "Canada" and logs the capital if it exists.

const CountriesAndCapitals = new Map<string, string>();

CountriesAndCapitals.set("Pakistan", "Islamabad");
CountriesAndCapitals.set("France", "Paris");
CountriesAndCapitals.set("Canada", "Toronto");
console.log(CountriesAndCapitals);

if (CountriesAndCapitals.has("Canada")) {
  // Checks if a key exists in the map
  let capital = CountriesAndCapitals.get("Canada"); // gets-->retrieves value of key.
  console.log(`The capital of Canada is ${capital}`);
} else {
  console.log(`Canada does not exist in the Map`);
}
