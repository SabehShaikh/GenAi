// Question 71: Compare let and const: Create two examples where let allows reassignment but const
//  does not. Try to reassign a const-declared variable and catch the error.
function exampleOfLet() {
    var num = 5;
    console.log(num);
    num = 6; // reassigned value.
    console.log(num);
}
exampleOfLet();
function exampleOfConst() {
    var number = 12;
    console.log(number);
    // num = 6 Cannot assign to 'num' because it is a constant.
}
exampleOfConst();
