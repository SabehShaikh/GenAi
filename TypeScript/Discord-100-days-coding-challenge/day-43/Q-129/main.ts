// Question 129: Explain how this behaves differently in arrow functions
//  compared to traditional functions.


const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
    },
    arrowFunction: () => {
        console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the
        //   scope in which traditionalVsArrow was defined
    },
};

traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
// This code snippet illustrates the difference in how 'this' is determined in traditional functions versus arrow functions.


/* KEY POINTS :
In the previous example, the arrow function innerMethod is defined within the
 method outerMethod of the myObject object. This means innerMethod has access
  to the this context of its surrounding method, which is myObject.
  
In the current code, the arrow function arrowFunction is defined within an
 object literal (traditionalVsArrow). The scope in which it is defined
  affects how this is interpreted. In this case, it likely refers to the 
  global object, leading to undefined for this.value because the global object
   (window in browsers) doesn't have a value property set to "traditionalVsArrow value."
*/