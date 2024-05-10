// Question 70: Understanding let in Loops: Write a function that uses a loop with the let
//  to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

// LET:

function printLetInLoop() {
    for (let index = 1; index <= 5; index++) {
        console.log(index);
    }
    // index is not accessible here, outside the loop, because it's defined with let
    // console.log(index); will throw error
}

printLetInLoop()

// VAR:
function printVarInLoop() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    // i is not accessible here, outside the loop, because it's defined with var
    // After the loop completes (i becomes 6 after the last iteration), the console.log(i) outside the loop prints 6 
    // because i still exists and holds its value due to being declared with var.

    console.log(i);
}

printVarInLoop()
