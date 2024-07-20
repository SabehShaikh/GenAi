//overloads give us type-checked calls
//this is not part of the overload list,
//so it has only three overloads
function add(arg1, arg2) {
    return arg1 + arg2;
}
//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello", "World"));
console.log(add(true, false));
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
console.log(d1);
var d2 = makeDate(5, 5, 5);
console.log(d2);
function len(x) {
    return x.length;
}
var r1 = len("hello");
var r2 = len(["a ", "b", "c"]);
console.log(r1);
console.log(r2);
