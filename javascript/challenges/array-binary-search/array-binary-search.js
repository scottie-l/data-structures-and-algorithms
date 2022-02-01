'use strict';

const BinarySearch = (array, key) => {
  let lowIndex = 0;
  let highIndex = array.length-1;
  let midIndex = Math.floor((highIndex + lowIndex)/2);
  let currValue = array[midIndex];

  while(key !== currValue && midIndex !== highIndex) {
    if(key < currValue) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
    midIndex = Math.floor((highIndex + lowIndex)/2);
    currValue = array[midIndex];
  }
  if(key === currValue){
    return midIndex;
  } else {
    return -1;
  }
};

module.exports = BinarySearch;
