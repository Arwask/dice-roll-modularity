const { assert } = require('chai');
const { roll, toDiceNotation } = require('../lib/dice.js');

let obj = {count: () => {return 2}, sides: () => {return 4}};
describe('Test for roll function', () => {

    it('should be a function', () => {
        assert.isFunction(roll);
    })
})

describe('Test for toDiceNotation function', () => {

    it('should be a function', () => {
        assert.isFunction(toDiceNotation);
    })

    it('should take an object as parameter', () => {
        assert.isObject(obj);
    })

    it('should take object with two properties', () => {
        assert.hasAnyKeys(obj, ['count', 'sides']);
    })

    it('should return a string', () => {
        assert.isString(toDiceNotation(obj));
    })

})