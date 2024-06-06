const mocha = require('mocha');
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('round the first argument', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.2, 0), 1);
    assert.equal(calculateNumber(1.6, 0), 2);
  });

  it('round the second argument', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 2.3), 2);
    assert.equal(calculateNumber(0, 2.7), 3);
  });

  it('should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.7), 3);
    assert.equal(calculateNumber(1.6, 1.9), 4);
  });
  it('number of params', () => {
    assert(isNaN(calculateNumber()));
    assert(isNaN(calculateNumber(0)));
    assert(isNaN(calculateNumber(0)));
  });
});
