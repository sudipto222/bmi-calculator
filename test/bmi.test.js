const assert = require('assert');

const Data = require("./../controller");


describe('Get Overweight person in table', () => {
  it('should return total length 4', async function () {
    const records = await new Data().getDatasByCategory('O');
    assert.equal(records.length, 4);
  });
});

describe('Get Moderately obese person in table', () => {
  it('should return total length 12', async function () {
    const records = await new Data().getDatasByCategory('MO');
    assert.equal(records.length, 12);
  });
});

describe('Get Normal weight person in table', () => {
  it('should return total length 10', async function () {
    const records = await new Data().getDatasByCategory('NW');
    assert.equal(records.length, 10);
  });
});

describe('Get Severely obese person in table', () => {
  it('should return total length 0', async function () {
    const records = await new Data().getDatasByCategory('SO');
    assert.equal(records.length, 0);
  });
});