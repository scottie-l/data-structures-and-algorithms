'use strict';

const master = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
const StackGen = master.StackGen;

class AnimalShelter {
  constructor() {
    this.front = new StackGen();
    this.back = new StackGen();
  }

  enqueue(animal){
    if(animal.type !== 'cat' && animal.type !== 'dog'){
      return 'Sorry, we only accept cats or dogs';
    }
    while(this.front.top){
      let temp = this.front.pop();
      this.back.push(temp);
    }
    this.back.push(animal);
    while(this.back.top){
      let temp = this.back.pop();
      this.front.push(temp);
    }
  }

  dequeue(pref){
    if(!this.back.top && !this.front.top){
      return 'Sorry, the animal shelter is empty';
    }
    if(pref !== 'cat' && pref !== 'dog') {
      return this.front.pop();
    }
    while(this.front.top){
      let checker = this.front.peek();
      if(checker.type === pref) {
        let animalOut = this.front.pop();
        while(this.back.top){
          let temp = this.back.pop();
          this.front.push(temp);
        }
        return animalOut;
      }
      let temp = this.front.pop();
      this.back.push(temp);
    }
    while(this.back.top){
      let temp = this.back.pop();
      this.front.push(temp);
    }
    return `Sorry, we don't appear to have any ${pref}s at this time.`;
  }
}

module.exports = {
  AnimalShelter: AnimalShelter,
};
