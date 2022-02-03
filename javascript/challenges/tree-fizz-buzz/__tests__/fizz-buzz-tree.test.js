'use strict';

const forest = require('../fizz-buzz-tree.js');
const KaryNode = forest.KaryNode;
const KaryTree = forest.KaryTree;
const fizzBuzzTree = forest.fizzBuzzTree;
const breadth = forest.breadthFirst;

const karyTree = new KaryTree(3);
const nonTree = new KaryTree(3);

beforeEach(() => {
  karyTree.root = new KaryNode(5, karyTree.k);
  karyTree.root.children[0] = new KaryNode(15, karyTree.k);
  karyTree.root.children[1] = new KaryNode(24, karyTree.k);
  karyTree.root.children[2] = new KaryNode(11, karyTree.k);
  karyTree.root.children[0].children[0] = new KaryNode(9, karyTree.k);
  karyTree.root.children[0].children[1] = new KaryNode(60, karyTree.k);
  karyTree.root.children[1].children[0] = new KaryNode(35, karyTree.k);
  karyTree.root.children[2].children[0] = new KaryNode(43, karyTree.k);
  karyTree.root.children[2].children[1] = new KaryNode(90, karyTree.k);
});

describe('Testing fizzBuzzTree function', () => {
  it('Should traverse K-ary tree and return new tree with numbers divisible by 3, 5 and both 3 & 5 replaced by the strings "Fizz", "Buzz" and "FizzBuzz" respectively. Numbers not meeting any of these requirements will be returned as strings', () => {
    const testTree = fizzBuzzTree(karyTree);

    expect(testTree.root.value).toEqual('Buzz');
    expect(testTree.root.children[1].value).toEqual('Fizz');
    expect(testTree.root.children[0].children[1].value).toEqual('FizzBuzz');
    expect(testTree.root.children[2].children[0].value).toEqual('43');
  });
  it('Should create a new tree with the same structure as the original', () => {
    const testTree = fizzBuzzTree(karyTree);
    const response = breadth(testTree);

    expect(response).toEqual(['Buzz', 'FizzBuzz', 'Fizz', '11', 'Fizz', 'FizzBuzz', 'Buzz', '43', 'FizzBuzz']);
  });
  it('Should return "Exception - Tree contains no values or non-numeric values" if function is called on an empty tree or a tree not comprised of numbers', () => {
    const response = fizzBuzzTree(nonTree);

    expect(response).toEqual('Exception - Tree contains no values or non-numeric values');
  });
});
