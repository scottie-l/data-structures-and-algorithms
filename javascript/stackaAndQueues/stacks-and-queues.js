'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  isEmpty(){
    return this.top === null;
  }

  push(value){
    let pushNode = new Node(value);
    if(this.isEmpty()){
      this.top = pushNode;
    } else {
      pushNode.next = this.top;
      this.top = pushNode;
    }
  }

  pop(){
    if(this.isEmpty()){
      return 'Exception - the stack is empty';
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.isEmpty()){
      return 'Exception - the stack is empty';
    }
    return this.top.value;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  isEmpty(){
    return this.front === null;
  }

  enqueue(value){
    let enqueueNode = new Node(value);
    if(this.isEmpty()){
      this.front = enqueueNode;
      this.rear = enqueueNode;
      return;
    } else {
      this.rear.next = enqueueNode;
      this.rear = enqueueNode;
    }
  }

  dequeue(){
    if(this.isEmpty()){
      return 'Exception - the queue is empty';
    }
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.isEmpty()){
      return 'Exception - the queue is empty';
    }
    return this.front.value;
  }

}

module.exports = {
  StackGen: Stack,
  QueueGen: Queue,
  nodeGen: Node,
};

