const { assert } = require('chai');

const { randomInt } = require('../lib/math.js');

describe('randomInt', () => {

    it('should be a function', () => {
        assert.isFunction(randomInt);
    });

    it('should return NAN', () => {
        let result = randomInt();
        assert.isNaN(result);
    });

    it('should take two values', () => {
        assert.isNaN
    });

    it('should take two numbers and return a number', () => {       
        assert.isFinite(randomInt(2,4));
        assert.isFinite(randomInt(2, null)); // wtf??
    });
    
    it('should take two not numbers and return NaN', () => {
        assert.isNaN(randomInt('z','x'));
        assert.isNaN(randomInt(-2,'+'));
        assert.isNaN(randomInt("hey", "you"));
    })
});