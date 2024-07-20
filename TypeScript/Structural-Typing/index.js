// These two interfaces are completely
// transferrable in a structural type system:
var ball = { diameter: 10 };
var sphere = { diameter: 20 };
sphere = ball;
var tube = { diameter: 12, length: 3 };
ball = tube;
console.log(ball);
