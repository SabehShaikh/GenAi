// Question 125: Modify a method in an object to use the this keyword
//  to access another property in the same object.
var obj = {
    name: "Alex",
    details: function () {
        return "".concat(this.name);
    },
    modify: function () {
        return this.details();
    },
};
console.log(obj.modify());
