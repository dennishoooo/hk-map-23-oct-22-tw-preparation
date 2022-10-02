function checkMarkSix(prizes, guesses) {
  let matches = 0;
  for (let guess of guesses) {
    if (prizes.includes(guess)) matches++;
  }
  return matches >= 2;
}

// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [20, 11]));

// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3])); // returns: true
// console.log(checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3])); // returns: false
// console.log(checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19])); // returns: true

// bonus 1

function generateGuess() {
  let guesses = new Set();

  while (guesses.size < 2) {
    let num = Math.floor(Math.random() * 20);
    guesses.add(num);
  }
  return Array.from(guesses);
}

function quickPicks(prizes, numOfGuesses) {
  console.log("the mark six result: ", prizes);
  let result = [];
  let interval = 1000;
  for (let i = 0; i < numOfGuesses; i++) {
    let guess = generateGuess();
    result.push({ bid: guess, win: checkMarkSix(prizes, guess) });
    setTimeout(() => {
      console.log("your pick:", guess);
      console.log(checkMarkSix(prizes, guess) ? "WIN" : "LOSE");
    }, interval);
    interval += 1000;
  }
  return result;
}

quickPicks([1, 3, 5, 7, 9, 11], 1); // returns: [{"bid": [1, 3], "win": true}]
quickPicks([1, 3, 5, 7, 9, 11], 3); // returns: [{"bid": [2, 4], "win": false}, {"bid": [2, 5], "win": false}, {"bid": [7, 9], "win": true}]

// quickPicks([1, 3, 5, 7, 9, 11], 1000);

// bonus 2 very easy
