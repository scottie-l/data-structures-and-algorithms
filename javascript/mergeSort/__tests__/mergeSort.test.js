'use strict';

const sorter = require('../mergeSort.js');
const mergeSort = sorter.mergeSort;

const inputArray = [8, 4, 23, 42, 16, 15];
const reverseSorted = [20, 18, 12, 8, 5, -2];
const fewUniques = [5, 12, 7, 5, 5, 7];
const nearlySorted = [2, 3, 5, 7, 13, 11];

describe('Testing insertion sort function', () => {
  it('Should return the inputArray correctly sorted when inputArray is passed into the mergeSort() function', () => {
    const sortedArray = mergeSort(inputArray);

    expect(sortedArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('Should return the reverseSorted array correctly sorted when inputArray is passed into the mergeSort() function', () => {
    const sortedArray = mergeSort(reverseSorted);

    expect(sortedArray).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('Should return the fewUniques array correctly sorted when inputArray is passed into the mergeSort() function', () => {
    const sortedArray = mergeSort(fewUniques);

    expect(sortedArray).toEqual([5, 5, 5, 7, 7, 12]);
  });

  it('Should return the nearlySorted array correctly sorted when inputArray is passed into the mergeSort() function', () => {
    const sortedArray = mergeSort(nearlySorted);

    expect(sortedArray).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
