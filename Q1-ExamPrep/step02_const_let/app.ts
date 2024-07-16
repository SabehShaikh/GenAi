//use const where variable values do not change
const a = 5;
const b: number = 33;
const c = "best";

//I suggest use let instead of var everywhere,
//because let has blocked scope
if (true) {
  let z = 4;
  console.log(z);
} else {
  let z = "string";
}
console.log("let: " + z); // Error: z is not defined in this scope
