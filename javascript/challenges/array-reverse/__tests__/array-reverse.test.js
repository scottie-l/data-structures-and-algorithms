'use strict';

const arrayReverse = require('../array-reverse.js');

describe('Testing the array-reverse module', () => {
  it('Should return the supplied array with its elements in reverse order', () => {
    const reversedArray = arrayReverse([1, 2, 3, 4, 5, 6]);

    expect(reversedArray).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
