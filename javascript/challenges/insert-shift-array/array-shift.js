'use strict';

const insertShiftArray = (arr, val) => {
  if(!val){return arr;}
  const newArray = [];
  let middleIndex = arr.length/2;
  let secondLoopStart = 0;

  for(let i = 0 ; i < middleIndex ; i++){
    newArray.push(arr[i]);
    secondLoopStart = i+1;
  }
  newArray.push(val);

  for(let i = secondLoopStart ; i < arr.length ; i++){
    newArray.push(arr[i]);
  }
  return newArray;
};

module.exports = insertShiftArray;
