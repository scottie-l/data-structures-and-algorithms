const graph = require('../../graph/graph.js');
const depth = require('../depthFirst.js');
const Graph = graph.Graph;
const Vertex = graph.Vertex;
const depthFirst = depth.depthFirst;

let test = new Graph();
let one = new Vertex('A');
let two = new Vertex('B');
let three = new Vertex('C');
let four = new Vertex('D');
let five = new Vertex('E');
let six = new Vertex('F');
let seven = new Vertex('G');
let eight = new Vertex('H');

test.addNode(one);
test.addNode(two);
test.addNode(three);
test.addNode(four);
test.addNode(five);
test.addNode(six);
test.addNode(seven);
test.addNode(eight);

test.addEdge(one, two);
test.addEdge(one, four);
test.addEdge(two, three);
test.addEdge(two, four);
test.addEdge(three, seven);
test.addEdge(four, five);
test.addEdge(four, eight);
test.addEdge(four, six);
test.addEdge(eight, six);

let test2 = new Graph();

describe('Testing the depthFirst function', () => {
  it('Should return collection of nodes in pre-order, depth-first order when using depthFirst()', () => {
    const result = depthFirst(test, one);

    expect(result).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F']);
  });

  it('Should return only nodes starting with the first node and "deeper" nodes when using depthFirst()', () => {
    const result = depthFirst(test, four);
    const result2 = depthFirst(test, six);

    expect(result).toEqual(['D', 'E', 'H', 'F']);
    expect(result2).toEqual(['F']);
  });

  it('Should return null if there are no vertices in the graph using depthFirst()', () => {
    const result = depthFirst(test2, one);

    expect(result).toEqual(null);
  });
});

// Output: A, B, C, G, D, E, H, F
