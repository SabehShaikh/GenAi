// Question 112: Create a Map that stores the names of countries as
// keys and their capitals as values. Add three countries to the Map.

const CountriesAndCapitals = new Map<string, string>();

CountriesAndCapitals.set("Pakistan", "Islamabad");
CountriesAndCapitals.set("Germany", "Berlin");
CountriesAndCapitals.set("England", "London");
console.log(CountriesAndCapitals);

/* MORE ABOUT MAP:
Methods:

set(key, value): Adds a new key-value pair to the map or updates an existing key's value.
get(key): Retrieves the value associated with a specified key.
has(key): Checks if a key exists in the map and returns a boolean.
delete(key): Removes a key and its associated value from the map.
clear(): Removes all key-value pairs from the map.
size: Property that returns the number of key-value pairs in the map.
keys(): Returns an iterable of all keys in the map.
values(): Returns an iterable of all values in the map.
entries(): Returns an iterable of key-value pairs in the map.
*/
