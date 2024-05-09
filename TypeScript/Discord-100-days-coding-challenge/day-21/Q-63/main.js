// Q63 - Shape Shifter: Write a program that can describe either a circle or a
// rectangle using a special type alias, including properties unique to each shape.
var circle = {
    kind: "circle",
    radius: 5,
};
console.log(circle);
var rectangle = {
    kind: "rectangle",
    width: 6,
    height: 6,
    calculateArea: function () {
        return this.width * this.height;
    },
};
console.log(rectangle);
console.log("Area is: ".concat(rectangle.calculateArea()));
