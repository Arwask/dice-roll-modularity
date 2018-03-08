// The dice file should export an object with at least two methods called roll and toDiceNotation. The toDiceNotation method should accept an object with a sides and count property and convert it to a String with the dice notation i.e. "1d6" or "2d40". The roll method should accept a dice notation String and produce a random Number which is the result of the dice roll.
'use strict';
const { randomInt } = require('./math.js');

module.exports = {
  roll: dice => {
    dice = dice.split('d');
    // console.log("dice",dice);
    let lowerBound = dice[0];
    let upperBound = dice[1] * lowerBound;
    return randomInt(lowerBound, upperBound);
  },
  toDiceNotation: diceObj => {
    return `${diceObj.count()}d${diceObj.sides()}`;
    // console.log('string', diceNotation);
  }
};
