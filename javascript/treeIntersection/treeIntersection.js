'use strict';

const trees = require('../challenges/Trees/Trees.js');
const BinaryTree = trees.BinaryTree;

const treeIntersection = (tree1, tree2) => {
  const resultsArr = [];
  let valueList = tree1.preOrder();

  if(tree2.root === null) {
    return 'Exception - Tree contains no values';
  }

  const innerPreOrder = (node) => {
    if(valueList.includes(node.value)){
      resultsArr.push(node.value);
    }

    if(node.left) {
      innerPreOrder(node.left);
    }
    if(node.right) {
      innerPreOrder(node.right);
    }
  };

  let current = tree2.root;
  innerPreOrder(current);
  if(!resultsArr.length){
    return 'No values in common.';
  }
  return resultsArr;
};

module.exports = {
  treeIntersection: treeIntersection,
};
