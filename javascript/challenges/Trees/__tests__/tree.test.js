'use strict';

const forest = require('../Trees.js');
const Node = forest.Node;
const BinaryTree = forest.BinaryTree;
// const BST = forest.BST;

const tree = new BinaryTree();
const emptyTree = new BinaryTree();

beforeEach(() => {
  tree.root = new Node(5);
  tree.root.left = new Node(10);
  tree.root.left.left = new Node(0);
  tree.root.left.right = new Node(20);
  tree.root.right = new Node(15);
  tree.root.right.right = new Node(25);
});

describe('Testing BinaryTree class constructor as methods', () => {
  it('Should instantiate an empty tree successfully', () => {
    const testTree = new BinaryTree();

    expect(testTree.root).toBeFalsy();
  });

  it('Should instantiate a BinaryTree with a single root node', () => {
    const testTree = new BinaryTree();
    testTree.root = new Node(5);

    expect(testTree.root.value).toEqual(5);
  });

  it('Should add a left child and a right child to a single root node', () => {
    const testTree = new BinaryTree();
    testTree.root = new Node(5);
    testTree.root.left = new Node(10);
    testTree.root.right = new Node(25);

    expect(testTree.root.value).toEqual(5);
    expect(testTree.root.left.value).toEqual(10);
    expect(testTree.root.right.value).toEqual(25);
  });

  it('Should successfully return a collection from preOrder() traversal', () => {
    const response = tree.preOrder();

    expect(response).toEqual([ 5, 10, 0, 20, 15, 25 ]);
  });

  it('Should successfully return a collection from inOrder() traversal', () => {
    const response = tree.inOrder();

    expect(response).toEqual([ 0, 10, 20, 5, 15, 25 ]);
  });

  it('Should successfully return a collection from postOrder() traversal', () => {
    const response = tree.postOrder();

    expect(response).toEqual([ 0, 20, 10, 25, 15, 5 ]);
  });

  it('Should return the maximum value within a BinaryTree with findMaxValue()', () => {
    const maxTree = new BinaryTree();
    maxTree.root = new Node(24);
    maxTree.root.left = new Node(36);
    maxTree.root.left.left = new Node(30);
    maxTree.root.left.right = new Node(6);
    maxTree.root.right = new Node(60);
    maxTree.root.right.left = new Node(42);
    const returnValue = maxTree.findMaxValue();

    expect(returnValue).toEqual(60);
  });

  it('Should return "Exception - Tree contains no numeric values" if BinaryTree has no values or the root is not a number when calling findMaxValue()', () => {
    const testOneBST = new BinaryTree();
    const testTwoBST = new BinaryTree();
    testTwoBST.root = new Node('Not a Number');
    const firstCase = testOneBST.findMaxValue();
    const secondCase = testTwoBST.findMaxValue();

    expect(firstCase).toEqual('Exception - Tree contains no numeric values');
    expect(secondCase).toEqual('Exception - Tree contains no numeric values');
  });


  it('Should successfully return an array in correct order using breadthFirst()', () => {
    const response = tree.breadthFirst();

    expect(response).toEqual([5, 10, 15, 0, 20, 25]);
  });

  it('Should return "Exception - Tree contains no values" if BinaryTree contains no values when breadthFirst() is called', () => {
    const response = emptyTree.breadthFirst();

    expect(response).toEqual('Exception - Tree contains no values');
  });
});
