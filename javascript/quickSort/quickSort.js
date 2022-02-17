'use strict';

const quickSort = (arr, left = 0, right = undefined) => {

  if(left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
  return arr;
};

const partition = (arr, left, right) => {
  if(arr === undefined) {
    return;
  }
  let pivot = arr[right];
  let low = left - 1;

  for(let i = left ; i < right ; i++) {
    if(arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
};

const swap = (arr, i, low) => {
  if(arr === undefined) {
    return;
  }
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
};

module.exports = {
  quickSort: quickSort,
  partition: partition,
  swap: swap,
};
