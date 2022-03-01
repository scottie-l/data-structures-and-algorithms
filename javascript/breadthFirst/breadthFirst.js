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
    this.adjList = new Map();
  }

  addNode(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(startVertex, endVertex = null, weight = 0) {
    if (!this.adjList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }
    const adjacencies = this.adjList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  size() {
    return this.adjList.size;
  }

  getNeighbors(vertex) {
    if (!this.adjList.has(vertex)) {
      throw new Error(`No neighbors found for ${vertex}`);
    }
    return [...this.adjList.get(vertex)];
  }

  breadthFirst(vertex) {
    if(!this.adjList.has(vertex) || !this.size()) {
      return null;
    }

    const queue = [];
    const visited = new Set();
    const valueArr = [];

    queue.unshift(vertex);
    visited.add(vertex);
    valueArr.push(vertex.value);

    while (queue.length) {
      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {
        const neighborVertex = neighbor.vertex;

        if (visited.has(neighborVertex)) {
          continue;
        } else {
          visited.add(neighborVertex);
          valueArr.push(neighborVertex.value);
          queue.unshift(neighborVertex);
        }
      }
    }
    return valueArr;
  }
}

module.exports = {
  Graph: Graph,
  Edge: Edge,
  Vertex: Vertex,
};

// Return: A collection of nodes in the order they were visited.
// Display the collection
