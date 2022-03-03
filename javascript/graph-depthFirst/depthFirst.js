'use strict';

const depthFirst = (graph, startVertex) => {
  if(!graph.size()) {
    return null;
  }

  const visitedNodes = [];
  const returnArr = [];

  const traverse = (current, visited) => {
    visited.push(current.vertex);
    if(!returnArr.includes(current.value)) {
      returnArr.push(current.value);
    }

    const neighbors = graph.getNeighbors(current);
    for(let neighbor of neighbors) {
      if(!visited.includes(neighbor.vertex)) {
        traverse(neighbor.vertex, visited);
      }
    }
  };

  traverse(startVertex, visitedNodes);
  return returnArr;
};

module.exports = {
  depthFirst: depthFirst,
};
