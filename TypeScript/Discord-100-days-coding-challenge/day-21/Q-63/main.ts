// Q63 - Shape Shifter: Write a program that can describe either a circle or a
// rectangle using a special type alias, including properties unique to each shape.

type Shape = {
  kind: "circle" | "rectangle";
  radius?: number; // Only for circles
  width?: number; // Only for rectangles
  height?: number; // Only for rectangles
  calculateArea?: () => number; // Only for rectangles
};

let circle: Shape = {
  kind: "circle",
  radius: 5,
};

console.log(circle);

let rectangle: Shape & {
  kind: "rectangle";
  width: number;
  height: number;
  calculateArea: () => number;
} = {
  kind: "rectangle",
  width: 6,
  height: 6,

  calculateArea: function () {
    return this.width * this.height;
  },
};
console.log(rectangle);
console.log(`Area is: ${rectangle.calculateArea()}`);
