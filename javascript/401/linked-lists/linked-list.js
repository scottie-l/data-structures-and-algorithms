'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// create a linked list class
class LinkedList {
  constructor() {
  }

  insert(value) {
    let insertedNode = new Node(value);

    if(this.head === null){  // include head property (Upon instantiation, an empty Linked List should be created.)
      this.head = insertedNode;  // should contain the following methods: insert, includes, to string
      return this.head;
    } else {
      insertedNode.next = this.head;
      this.head = insertedNode;
    }
    return this.head;
  }

  includes(value) {
    let current = this.head;

    while(current) {
      if(current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let listString = '';

    while(current) {
      listString += `{${current.value}} -> `;
      current = current.next;
    }
    listString += `NULL`;
    return listString;
  }

  append(value) {
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

  insertBefore(value, newVal) {  // take a value and add it to our linked list
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

  insertAfter(value, newVal) {  // take a value and add it to our linked list
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

  nthFromEnd(n) {
    if(!this.head.next) {
      return `Only 1 value exists in the Linked List: ${this.head.value}`;
    }
    if(n < 1) {
      return 'Exception';
    }

    let marker = this.head;
    let current = this.head;

    for (let i = 0; i < n; i++) {
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


// let node  = new Node('Jacob');
// let list = new LinkedList();
// let node2 = new Node(13);
// let node3 = new Node(20);
// let node4 = new Node(33);

// list.head = node;
// list.head.next = node2;
// list.head.next.next = node3;
// list.head.next.nxet.next = node4;

// list.add('Jacob');
// list.add(13);
// list.add(20);
// list.add(33);

// describe('testing linked list', () => {
//   it('Should have Jacob as the head', () => {
//     expect(list.head.value).toEqual('Jacob');
//   });
// });
