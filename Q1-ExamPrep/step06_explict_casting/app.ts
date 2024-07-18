let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16


let x: unknown = 'hello';
console.log((x as string).length);

