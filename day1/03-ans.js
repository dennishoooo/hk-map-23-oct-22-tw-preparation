let star = "*";
let times = 5;

for (let i = 0; i < 5; i++) {
  console.log(star);
  star += "*";
}

let pattern = "+-+-+-+";
// add space to the beginning,
// chop out first last index of the pattern

let start = 0;

let end = pattern.length;
let space = "";
while (end > start) {
  console.log(space + pattern.slice(start, end));
  start++;
  end--;
  space += " ";
}

let prompt = require("prompt-sync")();

let numList = prompt("enter list of number");

let list = numList.split(", ");

let total = 0;

for (let num of list) {
  total += parseInt(num);
}

let new_total = list.reduce((previousValue, currentValue) => {
  let thisValue = parseInt(previousValue) + parseInt(currentValue);
  console.log({ thisValue, previousValue, currentValue });
  return thisValue;
}, 0);

console.log(list);
console.log(typeof list[0]);
console.log("the sum of the number is: ", new_total);

let answer;
let q4_total = 0;
while (answer != 0) {
  answer = parseInt(prompt("Enter a number (enter 0 to stop): "));
  q4_total += answer;
}

console.log("the sum is: ", q4_total);
