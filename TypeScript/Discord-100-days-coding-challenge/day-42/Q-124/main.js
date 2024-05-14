// Question 124: Create a function inside an object that returns the
// object's own name property using the this keyword.
var obj = {
    name: "Alex",
    age: "21",
    details: function () {
        return "".concat(this.name, " ").concat(this.age);
    },
};
console.log(obj.details());
