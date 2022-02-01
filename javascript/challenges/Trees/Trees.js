'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() { // per-order;
    if(this.root === null) {
      return 'Exception - Tree contains no values';
    }
    const array = [];

    const innerPreOrder = (node) => {
      array.push(node.value);
      if(node.left) { // L
        innerPreOrder(node.left);
      }
      if(node.right) { // R
        innerPreOrder(node.right);
      }
    };
    let current = this.root;
    innerPreOrder(current); // C
    return array;
  }

  inOrder() { // in order
    if(this.root === null) {
      return 'Exception - Tree contains no values';
    }
    const array = [];

    const innerInOrder = (node) => {
      if(node.left) { //L
        innerInOrder(node.left);
      }
      array.push(node.value);
      if(node.right) { //R
        innerInOrder(node.right);
      }
    };
    let current = this.root;
    innerInOrder(current); //C
    return array;
  }

  postOrder() { // post order
    if(this.root === null) {
      return 'Exception - Tree contains no values';
    }
    const array = [];

    const innerPostOrder = (node) => {
      if(node.left) { // L
        innerPostOrder(node.left);
      }
      if(node.right) { // R
        innerPostOrder(node.right);
      }
      array.push(node.value);
    };

    let current = this.root;
    innerPostOrder(current); // C
    return array;
  }
}

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
};
