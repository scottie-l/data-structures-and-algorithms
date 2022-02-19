'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let appendedNode = new Node(value);

    if(!this.head) {
      this.head = appendedNode;
      return this.head;
    }
    let current = this.head;

    while(current.next !== null) {
      current = current.next;
    }
    current.next = appendedNode;
  }

  includes(key) {
    let current = this.head;
    let valueArray = [];

    while(current) {
      if(current.value){
        let objectKey = Object.keys(current.value);
        if(key === objectKey[0]) {
          valueArray.push(current.value[objectKey[0]]);
        }
      }
      current = current.next;
    }

    if(valueArray.length > 1) {
      return valueArray;
    } else if (valueArray.length === 1) {
      return valueArray[0];
    }
    return null;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let asciiSum = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return (asciiSum * 599) % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);

    if(!this.buckets[hash]){
      this.buckets[hash] = new LinkedList();
    }
    let data = { [key]: value };
    this.buckets[hash].append(data);
  }

  contains(key) {
    let hash = this.hash(key);

    if(this.buckets[hash]) {
      return true;
    } else {
      return false;
    }
  }

  get(key) {
    let hash = this.hash(key);

    if(this.buckets[hash]) {
      let keyValue = this.buckets[hash].includes(key);
      return keyValue;
    } else {
      return null;
    }
  }
}

module.exports = {
  HashTable: HashTable,
  LinkedList: LinkedList,
  Node: Node,
};
