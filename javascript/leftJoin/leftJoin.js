'use strict';

const table = require('../hashtable/hashtable.js');
const HashTable = table.HashTable;

function leftJoin(map1, map2) {
  const output= [];
  let leftKey;
  let leftValue;
  let rightValue;
  let index = 0;

  for(let i = 0; i < map1.size; i++) {
    if(map1.buckets[i]) {
      let current = map1.buckets[i].head;
      let leftCounter = 0;
      let rightCounter = 0;

      // iterate through left hashmap and get key:values
      while(current) {
        for(let key in current.value) {
          leftKey = key;
          let leftTemp = map1.get(leftKey);
          if(Array.isArray(leftTemp)) {
            leftValue = leftTemp[leftCounter];
            leftCounter++;
          } else {
            leftValue = leftTemp;
            leftCounter = 0;
          }
          break;
        }

        // iterate through right hashmap using left's key and get all matching (left)key:values from right
        let rightTemp = map2.get(leftKey);
        if(Array.isArray(rightTemp)) {
          rightValue = rightTemp[rightCounter];
          rightCounter++;
        } else {
          rightValue = rightTemp;
          rightCounter = 0;
        }

        // Add left key and combine all values from both hashmaps to output
        let object = {
          key: leftKey,
          map1Value: leftValue,
          map2Value: rightValue,
        };
        output[index] = object;
        index++;
        current = current.next;
      }
    }
  }
  return output;
}

module.exports = {
  leftJoin: leftJoin,
};
