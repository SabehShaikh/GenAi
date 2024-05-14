// Question 116: Create a switch case that matches several cases
//  to the same code block, representing seasons.
function logSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("It's Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("It's Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("It's Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("It's Fall");
            break;
        default:
            console.log("Invalid month");
            break;
    }
}
logSeason(8);
