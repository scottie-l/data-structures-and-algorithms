'use strict';

const BinarySearch = require('../array-binary-search.js');

describe('Testing the BinarySearch module', () => {
  it('Should return the index with a value that matches the search key', () => {
    const indexOfValue = BinarySearch([4, 8, 15, 16, 23, 42], 15);

    expect(indexOfValue).toEqual(2);
  });

  it('Should return a value of -1 if the search key is not present in array', () => {
    const indexOfValue = BinarySearch([11, 22, 33, 44, 55, 66, 77], 90);

    expect(indexOfValue).toEqual(-1);
  });
});
