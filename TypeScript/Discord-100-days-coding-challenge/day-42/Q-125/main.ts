// Question 125: Modify a method in an object to use the this keyword
//  to access another property in the same object.

let obj = {
  name: "Alex",

  details: function () {
    return `${this.name}`;
  },
  modify: function () {
    return this.details();
  },
};

console.log(obj.modify());
