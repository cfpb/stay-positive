'use strict';

var stayPositive = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.stayPositive = {
  setUp: function(done) {
    done();
  },
  'ints': function(test) {
    test.expect(3);
    test.strictEqual(stayPositive(-1234), 0, 'Negative num should be zero.');
    test.strictEqual(stayPositive(1234), 1234, 'Positive num should stay the same.');
    test.strictEqual(stayPositive(0), 0, 'Zero is zero.');
    test.done();
  },
  'floats': function(test) {
    test.expect(2);
    test.strictEqual(stayPositive(-1234.5678), 0, 'Negative float should be zero.');
    test.strictEqual(stayPositive(1234.5678), 1234.5678, 'Positive float should stay the same.');
    test.done();
  },
  'math constants': function(test) {
    test.expect(4);
    test.strictEqual(stayPositive(Math.PI), Math.PI, 'Pi should be pi.');
    test.strictEqual(stayPositive(Math.SQRT2), Math.SQRT2, 'Square root of 2 should be the square root of 2.');
    test.strictEqual(stayPositive(Math.LOG2E), Math.LOG2E, 'Natural logarithm of 2.');
    test.strictEqual(stayPositive(Math.LN2), Math.LN2, 'Pi should be pi.');
    test.done();
  },
  'strings': function(test) {
    test.expect(1);
    test.strictEqual(stayPositive('Party time, yo.'), 'Party time, yo.', 'Strings should stay the same.');
    test.done();
  },
  'objects': function(test) {
    test.expect(1);
    var obj = {one:1,two:2};
    test.strictEqual(stayPositive(obj), obj, 'Objects should stay the same.');
    test.done();
  },
  'functions': function(test) {
    test.expect(1);
    var func = function(){return 1234;};
    test.strictEqual(stayPositive(func), func, 'Functions should stay the same.');
    test.done();
  },
  'absolutes': function(test) {
    test.expect(5);
    test.equal(stayPositive(-1234, {abs: true}), 1234, 'Flip the sign.');
    test.equal(stayPositive(-1234.5678, {abs: true}), 1234.5678, 'Flip the sign.');
    test.equal(stayPositive(1234, {abs: true}), 1234, 'Keep the sign');
    test.equal(stayPositive(0, {abs: true}), 0, 'Zero is zero.');
    test.equal(stayPositive('Party time, yo.', {abs: true}), 'Party time, yo.', 'Strings should stay the same.');
    test.done();
  },
  'negative zero': function(test) {
    test.expect(1);
    test.equal(1 / stayPositive(0), Infinity, 'Negative 0 should return positive 0.');
    test.done();
  },
};
