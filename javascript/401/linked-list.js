'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // take a value and add it to our linked list
  // efficiency: time 0(n) - linear time efficiency
  // space 0(1) - we're only adding 1 item, constant space effiecancy
  append(value) { //empty linked list {head: null}
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    //this traveres of our list(not using the .next below)
    while (currentNode.next) {
      currentNode = currentNode.next; // will continue until value = null
    }
    // currentNode === last Node
    currentNode = new LinkedList;
    // this.head = node;
  }
}

let node  = new Node('Jacob');
let list = new LinkedList();
// let node2 = new Node(13);
// let node3 = new Node(20);
// let node4 = new Node(33);

// list.head = node;
// list.head.next = node2;
// list.head.next.next = node3;
// list.head.next.nxet.next = node4;

list.add('Jacob');
list.add(13);
list.add(20);
list.add(33);

describe('testing linked list', () => {
  it('Should have Jacob as the head', () => {
    expect(list.head.value).toEqual('Jacob');
  });
});

console.log(JSON.stringify(list));
