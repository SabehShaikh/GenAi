// Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
//  Round the result to two decimal places.
function multiplyingDecimals(num1, num2) {
    var product = num1 * num2;
    var roundedProduct = product.toFixed(2);
    return roundedProduct;
}
console.log(multiplyingDecimals(3, 5));
// When it's mentioned to "round the result to two decimal places," it means that after
//  performing a calculation, such as multiplication, you should ensure that the result
//   (product, in this case) has only two digits after the decimal point.
// If the product is 12.3456, rounding it to two decimal places would result in 12.35.
