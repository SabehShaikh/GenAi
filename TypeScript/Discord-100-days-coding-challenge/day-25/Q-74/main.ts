// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables.
//  Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swapVariables() {
    let a = 5;
    console.log(`a: ${a}`);
    let b = 10;
    console.log(`b: ${b}`);

    let temp = a; // 5 assigned to temp
    a = b; // 10 assigned to a
    b = temp; // 5 assigned to b

    console.log(`values after swapping: a is ${a} , b is ${b}`);
}

swapVariables();
``