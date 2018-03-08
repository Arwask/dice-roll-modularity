// This parse-args file should export a single function to parse your command line arguments. The function should accept an array containing the arguments passed on the command line. Convert these arguments to an object with a count and sides property.

'use strict';

module.exports = args => {
  let [c, s] = args;

  return {
    count: () => {
      if (c && s) return c;
      else return 1;
    },
    sides: () => {
      if (c && s) return s;
      else return s ? s : 6;
    }
  };
};

// <--- Joe's way ----->

// "count" : args[1] ? args[0] : 1,
// "sides" : args[1] || 6
