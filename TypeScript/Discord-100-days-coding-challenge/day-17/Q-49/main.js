// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies.
//  It should log each hobby with a statement saying you enjoy that hobby.
var myfunction = function () {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    console.log("i enjoy these hobbies", hobbies);
};
myfunction('Coding', 'Gaming', 'Reading');
//  it logs a separate message for each hobby because of forEach loop:
var my_function = function () {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log('i enjoy these hobbies:', hobby);
    });
};
my_function('Coding', 'Gaming', 'Reading');
