'use strict';

// tests should include:
// - Can successfully instantiate an empty linked list
// - Can properly insert into the linked list
// - The head property will properly point to the first node in the linked list
// - Can properly insert multiple nodes into the linked list
// - Will return true when finding a value within the linked list that exists
// - Will return false when searching for a value in the linked list that does not exist
// - Can properly return a collection of all the values that exist in the linked list

const master = require('./linked-list.js');
const NodeGen = master.nodeGen;
const ListGen = master.listGen;

describe('Testing Linked List functionality', () => {
  it('Should create an empty linked list', () => {
    const testList = new ListGen();

    expect(testList.head).toBeFalsy();
  });

  it('Should properly insert a node at head of list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(1);
    testList.head.next = new NodeGen(2);
    testList.insert(3);

    expect(testList.head.value).toEqual(3);
  });

  it('The head should point to first node in the linked list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen('1st node');
    testList.head.next = new NodeGen('2nd node');
    testList.head.next.next = new NodeGen('3rd node');

    expect(testList.head.value).toEqual('1st node');
  });

  it('Should properly insert multiple nodes into the list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen('a');
    testList.head.next = new NodeGen('b');
    testList.head.next.next = new NodeGen('c');
    testList.insert('x');
    testList.insert('y');
    testList.insert('z');
    const listString = testList.toString();

    expect(listString).toEqual('{z} -> {y} -> {x} -> {a} -> {b} -> {c} -> NULL');
  });

  it('Should return true when finding a value that exists inside list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(5);
    testList.head.next = new NodeGen(10);
    testList.head.next.next = new NodeGen(15);
    const valueExists = testList.includes(10);

    expect(valueExists).toEqual(true);
  });

  it('Should return flase when searching for a value that does not exist in the list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(5);
    testList.head.next = new NodeGen(10);
    testList.head.next.next = new NodeGen(15);
    const valueExists = testList.includes(20);

    expect(valueExists).toEqual(false);
  });

  it('Should properly return a collection of all values in the list', () => {
    const testList = new ListGen();
    testList.head = new NodeGen('four');
    testList.head.next = new NodeGen(5);
    testList.head.next.next = new NodeGen('Six');
    testList.insert(3);
    testList.insert('two');
    testList.insert(1);
    const listString = testList.toString();

    expect(listString).toEqual('{1} -> {two} -> {3} -> {four} -> {5} -> {Six} -> NULL');
  });

  it('Should add a node at end of list using the append() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.append(4);
    const listString = testList.toString();

    expect(listString).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> NULL');
  });

  it('Should add multiple nodes to end of list using the append() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.append(4);
    testList.append(5);
    testList.append(6);
    const listString = testList.toString();

    expect(listString).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> {5} -> {6} -> NULL');
  });

  it('Should insert a node before another node with a given value in the list using the insertBefore() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.insertBefore(3, 10);
    const listString = testList.toString();
    const response = testList.insertBefore(100, 7);

    expect(listString).toEqual('{0} -> {1} -> {2} -> {10} -> {3} -> NULL');
    expect(response).toEqual('Exception');
  });

  it('Should insert a node before the first node in the list using the insertBefore() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.insertBefore(0, 20);
    const listString = testList.toString();

    expect(listString).toEqual('{20} -> {0} -> {1} -> {2} -> {3} -> NULL');
  });

  it('Should insert a node after a node with a given value in the list using the insertAfter() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.insertAfter(1, 'a');
    const listString = testList.toString();
    const response = testList.insertAfter(100, 7);


    expect(listString).toEqual('{0} -> {1} -> {a} -> {2} -> {3} -> NULL');
    expect(response).toEqual('Exception');
  });

  it('Should insert a node after last node in list using the insertAfter() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    testList.insertAfter(3, 'b');
    const listString = testList.toString();

    expect(listString).toEqual('{0} -> {1} -> {2} -> {3} -> {b} -> NULL');
  });

  it('Should return the value of node that is "n" nodes from end using the nthFromEnd() method', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    const returnValue = testList.nthFromEnd(2);

    expect(returnValue).toEqual(1);
  });

  it('Should return "Exception" if "n" is greater than length of Linked List', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    const returnValue = testList.nthFromEnd(7);

    expect(returnValue).toEqual('Exception');
  });

  it('Should return "Exception" if "k" equals the length of the Linked List', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    const returnValue = testList.nthFromEnd(4);

    expect(returnValue).toEqual('Exception');
  });

  it('Should return "Exception" if the Linked List is a size of 1', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    const returnValue = testList.nthFromEnd(0);

    expect(returnValue).toEqual('Only 1 value exists in the Linked List: 0');
  });

  it('Should return "Exception" if "n" is not positive when calling nthFromEnd', () => {
    const testList = new ListGen();
    testList.head = new NodeGen(0);
    testList.head.next = new NodeGen(1);
    testList.head.next.next = new NodeGen(2);
    testList.head.next.next.next = new NodeGen(3);
    const returnValue = testList.nthFromEnd(-3);

    expect(returnValue).toEqual('Exception');
  });
});
