// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations.
//  Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division)
//  on x using compound operators.

function compoundAssignmentOperations() {
  let x = 15;
  console.log(`Initial value of x: ${x}`);

  x += 5; 
  console.log(`After adding 5: ${x}`);

  x -= 2; 
  console.log(`After subtracting 2: ${x}`);

  x *= 4;
  console.log(`After multiplying by 4: ${x}`);

  x /= 2;
  console.log(`After dividing by 2: ${x}`);
}

compoundAssignmentOperations();
