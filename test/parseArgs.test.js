const { assert } = require('chai');

const parseArgs = require('../lib/parse-args.js');

describe('parseArgs', () => {
  it('should be a function', () => {
    assert.isFunction(parseArgs);
  });

  it('should return an object', () => {
    assert.isObject(parseArgs([]));
  });

  it('should have two properties, count and sides, in the object it returns', () => {
    assert.hasAllKeys(parseArgs([]), ['count', 'sides']);
  });

  describe('count', () => {
    it('should be a function', () => {
      assert.isFunction(parseArgs([]).count);
    });

    it('should return 1 when no arguments are passed', () => {
      assert.equal(1, parseArgs([]).count());
      assert.equal(1, parseArgs([null, null]).count());
      assert.equal(1, parseArgs([undefined, undefined]).count());
      assert.equal(1, parseArgs([NaN, NaN]).count());
      assert.equal(1, parseArgs([0, 0]).count());
    });

    it('should return 1 when one argument passed', () => {
      assert.equal(1, parseArgs([2]).count());
      assert.equal(1, parseArgs([NaN]).count());
      assert.equal(1, parseArgs([undefined]).count());
      assert.equal(1, parseArgs([null]).count());
    });
  });

  describe('sides', () => {
    it('should be a function', () => {
      assert.isFunction(parseArgs([]).sides);
    });

    it('should return 6 if one or no argument is passed', () => {
      assert.equal(6, parseArgs([]).sides());
      assert.equal(6, parseArgs([NaN]).sides());
      assert.equal(6, parseArgs([undefined]).sides());
      assert.equal(6, parseArgs([null]).sides());
      assert.equal(6, parseArgs([2]).sides());
      assert.equal(6, parseArgs(['a']).sides());
    });

    it('should return 2nd argument if two are passed', () => {
      assert.equal(2, parseArgs([1, 2]).sides());
      assert.equal(4, parseArgs([0, 4]).sides());
      assert.equal(9, parseArgs([0, 9]).sides());
      assert.equal('b', parseArgs(['a', 'b']).sides());
    });
  });
});
