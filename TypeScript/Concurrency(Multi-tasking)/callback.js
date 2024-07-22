function parentFunction(func) {
    console.log("I am parent function");
    func();
}
function childFunction() {
    console.log("I am child function");
}
parentFunction(childFunction);
export {};
