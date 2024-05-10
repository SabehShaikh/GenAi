// Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example,
// if provided with "Age: " and 30, it should give back "Age: 30".

function CombineStrAndNum(text: string, num: number): string {
  let convertedstr = num.toString();
  let combined = text + convertedstr;
  return combined;
}

console.log(CombineStrAndNum("Age: ", 30));
