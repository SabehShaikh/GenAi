// Question 90: Generating Random Numbers: Write a function that generates a random
//  number between 1 and 10, inclusive.

// "inclusive" in the context of generating a random number between 1 and 10 inclusive, it means that the
// random number can include both 1 and 10 as possible values

function RandomNum() {
  return Math.floor(Math.random() * 10 + 1); // +1 => this means now 1-10, *10=> 9
}

console.log(RandomNum());
