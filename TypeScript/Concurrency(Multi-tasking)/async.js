// console.log("one")
// setTimeout(()=> {
// console.log("Hello")
// }, 2000)
// console.log("two")
// function washing(callback: any) {
//   console.log("Washing started...");
//   setTimeout(() => {
//     console.log("Washing done!");
//     callback();
//   }, 5000);
// }
// function soaking(callback: any) {
//   console.log("Soaking started...");
//   setTimeout(() => {
//     console.log("Soaking done!");
//     callback();
//   }, 3000);
// }
// function drying() {
//   console.log("Drying started...");
//   setTimeout(() => {
//     console.log("Drying done!");
//   }, 2000);
// }
// console.log("folding laundry");
// washing(() => {
//   soaking(() => {
//     drying();
//   });
// });
// console.log("i am making biryani");
// with promises now:
function washing() {
    console.log("Washing started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Washing done!");
        }, 5000);
    });
}
function soaking() {
    console.log("Soaking started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Soaking done!");
        }, 3000);
    });
}
function drying() {
    console.log("Drying started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying done!");
        }, 2000);
    });
}
washing().then((value) => {
    console.log(value);
});
export {};
