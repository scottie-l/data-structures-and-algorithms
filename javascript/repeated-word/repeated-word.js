'use strict';

const hashtable = require('../hashtable/hashtable.js');
const HashTable = hashtable.HashTable;

const repeatedWord = (string) => {
  let originalString = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  let convertedString = originalString.toLowerCase();
  let stringArr = convertedString.split(' ');
  let recurArray= [];
  let stringHashTable = new HashTable(1024);

  for(let i = 0 ; i < stringArr.length ; i++) {
    stringHashTable.add(stringArr[i], i);
  }

  for(let j = 0 ; j < stringArr.length ; j++) {
    let checker = stringHashTable.get(stringArr[j]);
    if(checker[1]) {
      let wordObj = {
        index: checker[1],
        word: stringArr[j],
      };
      if(!recurArray.length || checker[1] > recurArray[0].index) {
        recurArray.push(wordObj);
      } else {
        recurArray.unshift(wordObj);
      }
    }
  }

  if(recurArray.length) {
    return recurArray[0].word;
  }
  return 'No duplicated words found';
};

module.exports = {
  repeatedWord: repeatedWord,
};
