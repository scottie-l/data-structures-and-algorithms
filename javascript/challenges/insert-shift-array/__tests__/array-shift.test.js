'use strict';

const arrayShift = require('../array-shift.js');

describe('Testing the array-shift module', () => {
  it('Should return the supplied even array with the supplied value in the middle index', () => {
    const shiftedArray = arrayShift([2, 4, 6, 8], 5);
    expect(shiftedArray).toEqual([2, 4, 5, 6, 8]);
  });

  it('Should return the supplied odd array with the supplied value in the middle index', () => {
    const shiftedArray = arrayShift([4, 8, 15, 23, 42], 16);
    expect(shiftedArray).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
