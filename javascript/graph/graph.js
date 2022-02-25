'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // add node - Arguments: value & Returns: The added node
  // Add a node to the graph
  addNode(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  // add edge - Arguments: 2 nodes to be connected by the edge, weight (optional) & Returns: nothing
  // Adds a new edge between two nodes in the graph. If specified, assign a weight to the edge 
  addEdge(startVertex, endVertex = null, weight = 0) {
    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');  // Both nodes should already be in the Graph
    }
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  // get nodes - Arguments: none & Returns all of the nodes in the graph as a collection (set, list, or similar)
  getNodes() {
    let tempArray = [];
    let tempSize = this.size();

    if(!tempSize) {
      return null;
    }
    const nodesInGraph = this.adjacencyList.keys();
    for(let i = 0; i < tempSize; i++) {
      let temp = (nodesInGraph.next().value.value);
      tempArray.push(temp);
    }
    return tempArray;
  }

  // size - Arguments: none & Returns the total number of nodes in the graph
  size() {
    return this.adjacencyList.size;
  }

  // get neighbors - Arguments: node & Returns a collection of edges connected to the given node
  // Include the weight of the connection in the returned collection
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      return null;
    }
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(vertex) {
    if(!this.size()) {
      return null;
    }

    const queue = [];
    const visited = new Set();
    const valueArray = [];

    queue.unshift(vertex);
    visited.add(vertex);
    valueArray.push(vertex.value);

    while (queue.length) {
      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)) {
          continue;
        } else {
          visited.add(neighborVertex);
          valueArray.push({ neighbor: neighborVertex.value, weight: neighbor.weight });
          queue.unshift(neighborVertex);
        }
      }
    }
    return valueArray;
  }
}

module.exports = {
  Graph: Graph,
  Edge: Edge,
  Vertex: Vertex,
};
