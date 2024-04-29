// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a
// computer programmer knows, like coding languages, tools, and software frameworks.
// Find a way to get three specific skills from this list and show them.
var computer_programmer = {
    names: "Sabeh",
    age: "20",
    skills: {
        coding_languages: ["typescript", "javascript", "python"],
        tools: {
            toola: ["vs-code", "github"],
        },
        frameworks: {
            software_frameworks: "React JS",
        },
    },
};
var names = computer_programmer.names, _a = computer_programmer.skills, coding_languages = _a.coding_languages, toola = _a.tools.toola, software_frameworks = _a.frameworks.software_frameworks;
console.log("coding languages: ".concat(coding_languages));
console.log("tools: ".concat(toola.join(', ')));
console.log("frameworks: ".concat(software_frameworks));
// let { skills } = computer_programmer;
// console.log("skills are:", skills);
// DESTURCTURING OF OBJECT:
// let country = {
//     names: "Pakistan",
//     cities: {
//         biggest: "Karachi",
//         smallest: "Quetta",
//         mid: "Lahore",
//         capital: {
//             capital_city: "Islamabad",
//             old_capital: "OldKarachi"
//         }
//     },
//     provinces: {
//         biggest_province: "Punjab",
//         smallest_province: "Balochistan",
//     },
//     government: {
//         party: "PMLN",
//         Prime_minister: "Shehbaz",
//         party_details: {
//             charmain: "Mian Nawaz"
//         }
//     }
// }
// const {
//     names ,
//     cities: { biggest, smallest, capital: { capital_city, old_capital } },
//     provinces: { biggest_province, smallest_province },
//     government: { party, Prime_minister, party_details: { charmain } },
//   } = country;
//   console.log("Country Name:", names);
//   console.log("Biggest City:", biggest);
//   console.log("Capital City:", capital_city);
//   console.log("Biggest Province:", biggest_province);;
//   console.log("Prime Minister:", Prime_minister);
//   console.log("Party Chairman:", charmain);
