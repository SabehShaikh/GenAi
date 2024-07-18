// const enum Color {
//   Red,
//   Green,
//   Blue,
// } //starts with 0
// var c: Color = Color.Green;
// const enum Color1 {
//   Red = 1,
//   Green,
//   Blue,
// }
// var colorName: string = Color[2]; //Not allowed with const enums
// console.log(colorName);
// const enum Color2 {
//   Red = 1,
//   Green = 2,
//   Blue = 4,
// } //can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //starts with 0
var c = Color.Green;
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 3] = "Blue";
})(Color1 || (Color1 = {}));
;
var colorName = Color1[2];
console.log(colorName);
