'use strict';

const master = require('../pseudoQueue.js');
const Pseudo = master.PseudoQueue;

let testPseudo = new Pseudo();
let emptyPseudo = new Pseudo();

beforeEach(() => {
  for(let i = 0; i < 4 ; i++){
    testPseudo.enqueue(5*i);
  }
});

afterEach(() => {
  testPseudo = new Pseudo();
  emptyPseudo = new Pseudo();
});

describe('Testing PseudoQueue constructor/methods', () => {
  it('Should enqueue a supplied value to the rear of the PseudoQueue using enqueue', () => {
    testPseudo.enqueue(20);
    while(testPseudo.faceUp.top){
      let temp = testPseudo.faceUp.pop();
      testPseudo.faceDown.push(temp);
    }
    let rearValue = testPseudo.faceDown.peek();
    expect(rearValue).toEqual(20);
  });

  it('Should enqueue a supplied value to the rear/front of an empty PseudoQueue using enqueue', () => {
    emptyPseudo.enqueue(7);
    while(emptyPseudo.faceUp.top){
      let temp = emptyPseudo.faceUp.pop();
      emptyPseudo.faceDown.push(temp);
    }
    let onlyValue = emptyPseudo.faceDown.peek();
    expect(onlyValue).toEqual(7);
  });

  it('Should dequeue the value currently at the front of the PseudoQueue using dequeue', () => {
    let frontValue = testPseudo.dequeue();
    let newFrontValue = testPseudo.faceUp.peek();

    expect(frontValue).toEqual(0);
    expect(newFrontValue).toEqual(5);
  });

  it('Should return "Exception - Queue is empty" if dequeue is called on an empty PseudoQueue', () => {
    let response = emptyPseudo.dequeue();
    expect(response).toEqual('Exception - Queue is empty');
  });
});

// expected output:
// enqueue(value)
// Input	                Args    Output
// [10]->[15]->[20] 	    5       [5]->[10]->[15]->[20]
//                   	    5	    [5]
// dequeue()
// Input                    Output	Internal State
// [5]->[10]->[15]->[20]	20	    [5]->[10]->[15])
// [5]->[10]->[15]      	15      [5]->[10]
