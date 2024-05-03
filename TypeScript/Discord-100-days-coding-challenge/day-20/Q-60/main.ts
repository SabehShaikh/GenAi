// Q60 - Self-Running User Profile: Create a quick, self-setup profile for
//  a user that can tell you the user's name and age.

let Profile = (() => {
    let name = "Sabeh Shaikh";
    let age = 20;

    return {
        displayInfo: () => {
            console.log(`Name: ${name}, Age: ${age}`);
        },
    };
})();

Profile.displayInfo();
