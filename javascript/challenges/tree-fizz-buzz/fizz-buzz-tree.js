'use strict';

class KaryNode {
  constructor(value, size) {
    this.value = value;
    this.children = new Array(size);
  }
}

class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }
}

function fizzBuzzTree(kAryTree) {
  if(kAryTree.root === null || isNaN(kAryTree.root.value)) {
    return 'Exception - Tree contains no values or non-numeric values';
  }
  let transfer = JSON.stringify(kAryTree);
  const returnTree = JSON.parse(transfer);

  let current;
  let queue = [];

  queue.unshift(returnTree.root);
  while(queue.length) {
    current = queue.pop();
    if(current.value % 15 === 0) {
      current.value = 'FizzBuzz';
    } else if(current.value % 5 === 0) {
      current.value = 'Buzz';
    } else if(current.value % 3 === 0) {
      current.value = 'Fizz';
    } else {
      current.value = `${current.value}`;
    }
    for (let i = 0; i < current.children.length; i++) {
      if(current.children[i]) {
        queue.unshift(current.children[i]);
      }
    }
  }
  return returnTree;
}

function breadthFirst(tree) {
  let current = null;
  let queue = [];
  let array = [];

  queue.unshift(tree.root);
  while (queue.length) {
    current = queue.pop();
    array.push(current.value);
    for (let i = 0; i < current.children.length; i++) {
      if (current.children[i]) {
        queue.unshift(current.children[i]);
      }
    }
  }
  return array;
}

module.exports = {
  KaryNode: KaryNode,
  KaryTree: KaryTree,
  fizzBuzzTree: fizzBuzzTree,
  breadthFirst: breadthFirst,
};
