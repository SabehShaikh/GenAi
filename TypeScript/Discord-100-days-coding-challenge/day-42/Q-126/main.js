// // Question 126: Explain how the this keyword changes its value
// // when used inside a nested function within a method.
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property); // Works as expected, logs "Value"
        var innerMethod = function () {
            console.log(_this.property); // Still accesses myObject's 'property'
            // due to arrow function capturing 'this' from outer scope
        };
        innerMethod();
    },
};
myObject.outerMethod();
// This example shows that using an arrow function for the inner method preserves
//    the 'this' context from the outer method.
// /* EXPLANATION:
// The outerMethod is a regular function inside myObject, so its this refers to myObject.
// When innerMethod is an arrow function inside outerMethod, it inherits the this value 
// from its surrounding lexical scope, which is outerMethod in this case.
// Therefore, innerMethod keeps accessing myObject's property because 
// its this context is bound to the myObject context due to the arrow function behavior.
// */
// Using regular function instead of arrow function--throws an error:
// const myObject2 = {
//     property: "Value",
//     outerMethod: function () {
//       console.log(this.property); // Logs "Value" from myObject
//       const innerMethod = function() {
//         console.log(this.property); // Logs 'undefined' or throws an error in strict mode
//         // because 'this' in a regular function inside a method refers to the global object
//         // (window in browsers, global in Node.js) or is undefined in strict mode
//       };
//       innerMethod();
//     },
//   };
//   myObject2.outerMethod();
// To Fix the error in regular function , we can use bind:
// const myObject3 = {
//     property: "Value",
//     outerMethod: function () {
//       console.log(this.property); // Logs "Value" from myObject
//       const innerMethod = function() {
//         console.log(this.property);
//       }.bind(this)
//       innerMethod();
//     },
//   };
//   myObject3.outerMethod();
// Another way to solve is by using self reference:
var myObject4 = {
    property: "Value",
    outerMethod: function () {
        var self = this;
        console.log(this.property); // Logs "Value" from myObject
        var innerMethod = function () {
            console.log(self.property);
        };
        innerMethod();
    },
};
myObject4.outerMethod();
