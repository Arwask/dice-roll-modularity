'use strict';

process.title = 'Dice Roll';

const { argv: [, , ...args] } = process;

// if (typeof args[0] === 'NaN' || typeof args[1] === 'NaN') {
const { count, sides } = require('./parse-args')(args);

const { roll, toDiceNotation } = require('./dice');

const dice = toDiceNotation({ count, sides });

const total = roll(dice);
console.log(`Rolling a ${sides()} sided die ${count()} time`);
console.log("Here's the total of all the rolls:", total);
// } else {
//   console.log('Input has to be numbers only', typeof args[0]);
// }

//NOTES: check bin for the right path to the diceroll file.
// correct #! in diceroll executable file
// npm install -g for installing the file globally
