// These two interfaces are completely
// transferrable in a structural type system:

interface Ball {
  diameter: number;
}

interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
//   ball = sphere;

// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.

interface Tube {
  diameter: number;
  length: number;
}
// fresh
let tube: Tube = { diameter: 12, length: 3 };
// stale
ball = tube;
console.log(ball);

// Because a ball does not have a length, then it cannot be
// assigned to the tube variable. However, all of the members
// of Ball are inside tube, and so it can be assigned.

// TypeScript is comparing each member in the type against
// each other to verify their equality.

// Now lets do it Case By Case
let myType = { name: "Zia", id: 1 };

//Case 1
myType = { id: 2, name: "Tom" }; //Case 1: can only assign a type which has the the same properties

//Case 2a
myType = { id: 2, name: "Tom" }; //Case 2a: Error, renamed or missing property

let x: { id: number; [x: string]: any }; //Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fullname: "Zia" }; // Ok, `fullname` matched by index signature

let person = { age: 20, fullName: "Osama" };

let personTwo = { age: 35, fullName: "Zoha" };

personTwo = person;
