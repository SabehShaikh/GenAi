// Question 117: Implement a switch statement that evaluates an expression
// and uses the default case if none of the cases match.
function evaluateExpression(expression) {
    switch (expression) {
        case "win":
            console.log("Congratulations! You won the game.");
            break;
        case "lose":
            console.log("Better luck next time. You lost the game.");
            break;
        case "draw":
            console.log("It's a draw. The game ended in a tie.");
            break;
        default:
            console.log("Invalid expression. Please enter a valid game result.");
            break;
    }
}
evaluateExpression("win");
evaluateExpression("invalid");
