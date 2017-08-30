'use strict';

process.title = 'Dice Roll'

const { argv: [,, ...args] } = process
const { count, sides } = require('./parse-args')(args)
// console.log("count:", count());
// console.log("sides:", sides());
const { roll, toDiceNotation } = require('./dice')
const dice = toDiceNotation({count, sides})
// console.log(dice, "dice");
const total = roll(dice)
console.log(`Rolling a ${sides()} sided dice ${count()} time`);
console.log("Here's the total of all the rolls",total)