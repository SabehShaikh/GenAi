// Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make
// , model, year, and a method describe() that logs a sentence about the laptop.
var mylaptop = {
    make: "Lenovo",
    model: "ThinkPad X1 Carbon",
    year: 2023,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    }
};
mylaptop.describe();
