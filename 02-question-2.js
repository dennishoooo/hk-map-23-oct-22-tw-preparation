let prompt = require("prompt-sync")();

const MAX = 10;

let min = 0;
let max = 10;

let answer = Math.floor(Math.random() * (MAX + 1));

let guess;
let times = 0;

console.log(answer);

while (guess != answer) {
  guess = parseInt(prompt(`please input a integer between ${min} and ${max} `));
  if (guess < answer) min = guess;
  else max = guess;
  times++;
  if (times > 2) {
    console.log("you lose, bye");
    return;
  }
}

console.log("ok, you win!");
