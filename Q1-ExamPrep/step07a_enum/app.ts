enum Color {
  Red,
  Green,
  Blue,
} //starts with 0
var c: Color = Color.Green;
console.log(c);

enum Color1 {
  Red = 1,
  Green,
  Blue,
}
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
} //can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

enum Direction {
  Up = 10,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Right;
console.log(dir); // Output: 2

/* String Enums:
String enums are initialized with string values */
enum Direction {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

let direc: Direction = Direction.Up;
console.log(direc); // Output: "UP"


