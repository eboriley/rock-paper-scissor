"use strict";
const items = ["🪨", "📃", "✂️"];
function randomItem(items) {
  const randomInt = Math.floor(Math.random() * 3);
  return items[randomInt];
}
let hand1 = randomItem(items);
let hand2 = randomItem(items);
let pair = [hand1, hand2];
console.log(pair);
pair = pair.sort();
//initialize all possible outcomes
const outcomes = [
  { winner: "🪨", combination: ["🪨", "✂️"] },
  { winner: "✂️", combination: ["📃", "✂️"] },
  { winner: "📃", combination: ["🪨", "📃"] },
];

outcomes.forEach((x) => {
  x.combination.sort();
  //checks if both hands are the same
  if (pair[0] === pair[1]) {
    console.log("Its a tie");
  }
  //gets the combination among the possible outcomes
  if (pair[0] === x.combination[0] && pair[1] === x.combination[1]) {
    pair.forEach((p) => {
    //checks which hand is the winner among the combition
      if (x.winner === p) {
        console.log(p + " won");
      }
    });
  }
});

// function announceWinner(outcome) {
//     if (outcome.winner === "🪨") {
//         if (hand1 === "🪨") {
//             console.log("hand one wins");
//         }
//         if (hand2 === "🪨")
//             console.log("hand two wins");
//     }
//     if (outcome.winner === "✂️") {
//         if (hand1 === "✂️") {
//             console.log("hand one wins");
//         }
//         if (hand2 === "✂️") {
//             console.log("hand two wins");
//         }
//     }
//     if (outcome.winner === "📃") {
//         if (hand1 === "📃") {
//             console.log("hand one wins");
//         }
//         if (hand2 === "📃") {
//             console.log("hand two wins");
//         }
//     }
// }
