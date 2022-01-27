'use strict';

class Node { // create the node
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create a linked list class
class LinkedList {
  constructor() {
  }

  insert(value) { // add a node
    let insertedNode = new Node(value);

    if(this.head === null){ // include head property (Upon instantiation, an empty Linked List should be created.)
      this.head = insertedNode; // should contain the following methods: insert, includes, to string
      return this.head;
    } else {
      insertedNode.next = this.head;
      this.head = insertedNode;
    }
    return this.head;
  }

  includes(value) { // traverse the nodes
    let current = this.head;

    while(current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() { // logs the values of nodes to console
    let current = this.head;
    let listString = '';

    while(current) {
      listString += `{${current.value}} -> `;
      current = current.next;
    }
    listString += `NULL`;
    return listString;
  }

  append(value) { // append a node with a value to list @ end
    let appendedNode = new Node(value);

    if(!this.head) {
      this.head = appendedNode;
      return this.head;
    }
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = appendedNode;
  }

  insertBefore(value, newVal) { // take a value and add it to our linked list before a node
    if(value === this.head.value) {
      this.insert(newVal);
      return this.head;
    }
    let newValNode = new Node(newVal);
    let current = this.head;
    while(current.next !== null) {
      if(current.next.value === value) {
        newValNode.next = current.next;
        current.next = newValNode;
        return this.head;
      }
      current = current.next;
    }
    return 'Exception';
  }

  insertAfter(value, newVal) { // take a value and add it to our linked list after a node
    let newValNode = new Node(newVal);
    let current = this.head;

    while(current) {
      if(current.value === value) {
        newValNode.next = current.next;
        current.next = newValNode;
        return this.head;
      }
      current = current.next;
    }
    return 'Exception';
  }

  kthFromEnd(k) { // take a value and add it inside the list
    if(!this.head.next) {
      return `Only 1 value exists in the Linked List: ${this.head.value}`;
    }
    if(k < 1) {
      return 'Exception';
    }
    let marker = this.head;
    let current = this.head;
    for (let i = 0; i < k; i++) {
      if(!marker) {
        return 'Exception';
      }
      marker = marker.next;
    }
    if (!marker) {
      return 'Exception';
    }
    while(marker.next) {
      current = current.next;
      marker = marker.next;
    }
    return current.value;
  }
}

module.exports = {
  listGen: LinkedList,
  nodeGen: Node,
};

// efficiency: time 0(n) - linear time efficiency
// space 0(1) - we're only adding 1 item, constant space effiecancy
