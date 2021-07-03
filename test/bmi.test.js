const assert = require('assert');

const getByCategory = require('../index.js');


describe('Get Overweight person in table', () => {
  it('should return total length 4', () => {
    setTimeout(() => {
      const result = getByCategory('Overweight');
      assert.equal(result, 4);
    }, 1000)
  });
});

describe('Get Moderately obese person in table', () => {
  it('should return total length 12', () => {
    setTimeout(() => {
      const result = getByCategory('Moderately obese');
      assert.equal(result, 12);
    }, 1000)
  });
});

describe('Get Normal weight person in table', () => {
  it('should return total length 10', () => {
    setTimeout(() => {
      const result = getByCategory('Normal weight');
      assert.equal(result, 10);
    }, 1000)
  });
});

describe('Get Severely obese person in table', () => {
  it('should return total length 0', () => {
    setTimeout(() => {
      const result = getByCategory('Severely obese');
      assert.equal(result, 0);
    }, 1000);
  });
});
