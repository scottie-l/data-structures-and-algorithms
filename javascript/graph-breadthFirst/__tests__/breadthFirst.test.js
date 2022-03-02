'use strict';

const breadth = require('../breadthFirst.js');
const Graph = breadth.Graph;
const Vertex = breadth.Vertex;

let test = new Graph();
let one = new Vertex('one');
let two = new Vertex('two');
let three = new Vertex('three');
let four = new Vertex('four');
let five = new Vertex('five');
let six = new Vertex('six');
let hundred = new Vertex('hundred'); // not connected island node

test.addNode(one);
test.addNode(two);
test.addNode(three);
test.addNode(four);
test.addNode(five);
test.addNode(six);

test.addEdge(one, three);
test.addEdge(two, four);
test.addEdge(one, four);
test.addEdge(four, two);
test.addEdge(four, five);
test.addEdge(two, six);

let test2 = new Graph();

describe('Testing breadthFirst method of the Graph', () => {
  it('Should return values of nodes in a breadth-first order when using breadthFirst()', () => {
    const result = test.breadthFirst(one);
    const result2 = test.breadthFirst(six);

    expect(result).toEqual(['one', 'three', 'four', 'two', 'five', 'six']);
    expect(result2).toEqual(['six']);
  });

  it('Should return null when there are no nodes in the graph using breadthFirst()', () => {
    const result = test2.breadthFirst(one);

    expect(result).toEqual(null);
  });

  it('Should return null when there is node supplied that is not in the graph using breadthFirst()', () => {
    const result = test.breadthFirst(hundred);

    expect(result).toEqual(null);
  });
});
