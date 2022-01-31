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


// Contains
// Argument: value
// Return

// Create a Binary Search Tree class
class BinarySearchTree extends BinaryTree {

  // Adds a new node with that value in the correct location in the binary search tree.
  add(value) {
    let newNode = new Node(value);

    if(this.root === null) {
      this.root = newNode;
      return;
    }

    const addNode = (current) => {

      if(value < current.value) {
        if(current.left) {
          current = current.left;
          addNode(current);
        } else { 
          current.left = newNode;
          return;
        }
      }

      if(value > current.value) {
        if(current.right) {
          current = current.right;
          addNode(current);
        } else {
          current.left = newNode;
          return;
        }
      }
    };
    let current = this.root;
    addNode(current); // Add
  }

  contains(value) {
    if(this.root === null) { // Arguments: value // Return: nothing
      return 'Exception - Tree contains no values';
    }
    let isInTree = false;

    const checker = (current) => {

      if(value === current.value) {
        isInTree = true;
      }

      if(value < current.value) {
        if(current.left) {
          current = current.left;
          return checker(current);
        } else {
          isInTree = false;
        }
      } else if(value > current.value) {
        if(current.right) {
          current = current.right;
          return checker(current);
        } else {
          isInTree = false;
        }
      }
    };
    let current = this.root;
    checker(current);
    return isInTree;
  }
}

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BST: BinarySearchTree,
};
