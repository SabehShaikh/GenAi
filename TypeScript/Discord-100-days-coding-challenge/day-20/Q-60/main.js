// Q60 - Self-Running User Profile: Create a quick, self-setup profile for
//  a user that can tell you the user's name and age.
var Profile = (function () {
    var name = "Sabeh Shaikh";
    var age = 20;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        },
    };
})();
Profile.displayInfo();
