'use strict';

const mergeSort = (arr) => {
  let n = arr.length;

  if(n > 1) {
    // Declare vars to split
    let mid = (n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // sort left side
    mergeSort(left);
    // sort right side
    mergeSort(right);
    // merge left and right sides together
    merge(left, right, arr);
  }
  return arr;
};

const merge = (left, right, arr) => {
  // Declare vars
  let i = 0; // index left
  let j = 0; // index right
  let k = 0; // new array index

  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) { // compare if left is less than right
      arr[k] = left[i]; // if true insert left side
      i++; // increment i +1
    } else {
      arr[k] = right[j]; // if false insert right side
      j++; // increment j +1
    }
    k++; // increment k +1
  }

  while(i < left.length) { // iterate through entire left side
    arr[k] = left[i];
    i++;
    k++;
  }

  while(j < right.length) { // iterate through entire right side
    arr[k] = right[j];
    j++;
    k++;
  }
};

module.exports = {
  mergeSort: mergeSort,
  merge: merge,
};
