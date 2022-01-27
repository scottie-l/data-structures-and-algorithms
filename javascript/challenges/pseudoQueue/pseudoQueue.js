'use strict';

const master = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
const StackGen = master.StackGen;

class PseudoQueue{
  constructor() {
    this.faceUp = new StackGen();
    this.faceDown = new StackGen();
  }

  enqueue(val){
    while(this.faceUp.top){
      let temp = this.faceUp.pop();
      this.faceDown.push(temp);
    }
    this.faceUp.push(val);
    while(this.faceDown.top){
      let temp = this.faceDown.pop();
      this.faceUp.push(temp);
    }
  }

  dequeue(){
    if(!this.faceDown.top && !this.faceUp.top){
      return 'Exception - Queue is empty';
    }
    return this.faceUp.pop();
  }
}

module.exports = {
  PseudoQueue: PseudoQueue,
};

// enqueue Arg: value
// inserts value into pseudo queue, using FIFO

// dequeue Arg: none
// extractsd a value from the pseudo queue using FIFO
