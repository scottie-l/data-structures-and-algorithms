'use strict';

const master = require('../stacks-and-queues.js');
const StackGen = master.StackGen;
const QueueGen = master.QueueGen;

let testStack = new StackGen();
let testQueue = new QueueGen();

beforeEach(() => {
  for(let i = 0; i < 3 ; i++){
    testStack.push(i);
    testQueue.enqueue(6 - i);
  }
});

afterEach(() => {
  testStack = new StackGen();
  testQueue = new QueueGen();
});

describe('Testing stack functions', () => {
  it('Should successfully push one value onto a stack using .push(val)', () => {
    testStack.push('A');

    expect(testStack.top.value).toEqual('A');
  });

  it('Should successfully push multiple values onto a stack using .push(val)', () => {
    testStack.push('A');
    testStack.push('B');
    testStack.push('C');

    expect(testStack.peek()).toEqual('C');
    expect(testStack.top.next.value).toEqual('B');
  });

  it('Should successfully pop one value off of a stack using .pop()', () => {
    let testValue = testStack.pop();

    expect(testValue).toEqual(2);
  });

  it('Should recieve the top value of stack when using .peek()', () => {
    let peekValue = testStack.peek();

    expect(peekValue).toEqual(2);
  });

  it('Should insantiate an empty stack', () => {
    const nullStack = new StackGen();
    const emptyStack = nullStack.isEmpty();

    expect(emptyStack).toBeTruthy();
  });

  it('Should raise an exception when using .pop or .peek on an empty stack', () => {
    const nullStack = new StackGen();
    const emptyPeek = nullStack.peek();
    const emptyPop = nullStack.pop();

    expect(emptyPeek).toEqual('Exception - Stack is empty');
    expect(emptyPop).toEqual('Exception - Stack is empty');
  });

  it('Should successfully enqueue one value into a queue using .enqueue(val)', () => {
    testQueue.enqueue('A');

    expect(testQueue.rear.value).toEqual('A');
  });

  it('Should successfully enqueue multiple values into a queue using .enqueue(val)', () => {
    testQueue.enqueue('A');
    testQueue.enqueue('B');
    let tempRear = testQueue.rear.value;
    testQueue.enqueue('C');

    expect(testQueue.rear.value).toEqual('C');
    expect(tempRear).toEqual('B');
  });

  it('Should successfully remove one value out of a queue using .dequeue()', () => {
    let testValue = testQueue.dequeue();

    expect(testValue).toEqual(6);
  });

  it('Should recieve the front value of queue when using .peek()', () => {
    let peekValue = testQueue.peek();

    expect(peekValue).toEqual(testQueue.front.value);
  });

  it('Should insantiate an empty queue', () => {
    const nullQueue = new QueueGen();
    const emptyQueue = nullQueue.isEmpty();

    expect(emptyQueue).toBeTruthy();
  });

  it('Should raise an exception when using .pop or .peek on an empty queue', () => {
    const nullQueue = new QueueGen();
    const emptyPeek = nullQueue.peek();
    const emptyPop = nullQueue.dequeue();

    expect(emptyPeek).toEqual('Exception - Queue is empty');
    expect(emptyPop).toEqual('Exception - Queue is empty');
  });
});
