// This parse-args file should export a single function to parse your command line arguments. The function should accept an array containing the arguments passed on the command line. Convert these arguments to an object with a count and sides property.

'use strict';

module.exports = (args) => {
    return {
        "count": () => {
        if(args[0] && args[1])
            return args[0];
        else
            return 1;
        },
        "sides": () => {
            if(args[1] && args[0])
                return args[1];
            else 
                return args[0] ? args[0] : 6;
        }
    }
}


// <--- Joe's way ----->

// "count" : args[1] ? args[0] : 1,
// "sides" : args[1] || 6