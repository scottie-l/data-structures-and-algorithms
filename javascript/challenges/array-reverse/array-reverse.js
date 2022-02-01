'use strict';

const reverseArray = (arr) => {
  const reversedOrder = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversedOrder.push(arr[i]);
  }
  return reversedOrder;
};

module.exports = reverseArray;
