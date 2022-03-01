**Day 29:** Graph

Implement a simplified LEFT JOIN for 2 Hashmaps.

We write a function called left join that takes in 2 parameters. The first is a hashmap that has word strings as keys, and a synonym of the key as its value. The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values. The returned data structure holds the key:value pairs from the first hashmap and the values of those keys from the second. Null is used if no value is in the second hashmap.

Implement our own Graph. Graph should be represented as an adjacency list, and should include the following methods:

-  
  - Add a node to the graph: Arguments: value & Returns: The added node
  - add edge Arguments: 2 nodes to be connected by the edge, weight (optional) & Returns: nothing
  - Adds a new edge between two nodes in the graph. If specified, assign a weight to the edge. Both nodes should already be in the Graph
  - get nodes Arguments: none & Returns all of the nodes in the graph as a collection (set, list, or similar)
  - get neighbors Arguments: node & Returns a collection of edges connected to the given node. Include the weight of the connection in the returned collection
  - size Arguments: none & Returns the total number of nodes in the graph

  <u>*Big O:*</u>

- V: vertices
- E: edges

Time: 0(V + E)

Space: 0(V + E)

- [Graph Whiteboard](../assets/graphs.png)
- [Graph Solution](./graph.js)

---
[Back](../README.md)

---
