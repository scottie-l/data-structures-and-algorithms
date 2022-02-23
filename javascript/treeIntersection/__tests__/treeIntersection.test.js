'use strict';

const trees = require('../../challenges/Trees/Trees.js');
const BinaryTree = trees.BinaryTree;
const Node = trees.Node;
const treeUtil = require('../treeIntersection.js');
const treeIntersection = treeUtil.treeIntersection;

const t1 = new BinaryTree();
const t2 = new BinaryTree();
const t3 = new BinaryTree();

// tree 1 [150, 100, 75, 160, 125, 175, 250, 200, 350, 300, 500]
t1.root = new Node(150);
t1.root.left = new Node(100);
t1.root.right = new Node(250);
t1.root.left.left = new Node(75);
t1.root.left.right = new Node(160);
t1.root.right.left = new Node(200);
t1.root.right.right = new Node(350);
t1.root.left.right.left = new Node(125);
t1.root.left.right.right = new Node(175);
t1.root.right.right.left = new Node(300);
t1.root.right.right.right = new Node(500);

// tree 2 [42, 100, 15, 160, 125, 175, 600, 200, 350, 4, 500]
t2.root = new Node(42);
t2.root.left = new Node(100);
t2.root.right = new Node(600);
t2.root.left.left = new Node(15);
t2.root.left.right = new Node(160);
t2.root.right.left = new Node(200);
t2.root.right.right = new Node(350);
t2.root.left.right.left = new Node(125);
t2.root.left.right.right = new Node(175);
t2.root.right.right.left = new Node(4);
t2.root.right.right.right = new Node(500);

// tree 3, [1, 51, 69, 420, 318] results = no matches
t3.root = new Node(1);
t3.root.left = new Node(51);
t3.root.right = new Node(69);
t3.root.left.left = new Node(420);
t3.root.left.right = new Node(318);

describe('Testing tree intersection function', () => {
  it('Should return an array of all matching values in two different binary trees', () => {
    const result = treeIntersection(t1, t2);

    expect(result).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });

  it('Should return "No values in common." if there are no matching values in two different binary trees', () => {
    const result = treeIntersection(t1, t3);

    expect(result).toEqual('No values in common.');
  });
});
