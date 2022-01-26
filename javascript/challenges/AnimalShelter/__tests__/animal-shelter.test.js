'use strict';

const master = require('../animal-shelter.js');
const Shelter = master.AnimalShelter;

let emptyShelter = new Shelter();
let testShelter = new Shelter();

const catsAndDogs = [
  {type: 'cat', name: 'Kitty'},
  {type: 'cat', name: 'Fluff'},
  {type: 'dog', name: 'DeeOhGee'},
  {type: 'cat', name: 'Spot'},
  {type: 'dog', name: 'Lady'},
  {type: 'dog', name: 'Tramp'},
  {type: 'cat', name: 'Caesar'},
];

beforeEach(() => {
  for(let i = 0; i < catsAndDogs.length ; i++){
    testShelter.enqueue(catsAndDogs[i]);
  }
});

afterEach(() => {
  emptyShelter = new Shelter();
  testShelter = new Shelter();
});

describe('Testing AnimalShelter constructor/methods', () => {
  it('Should enqueue a new cat/dog to the rear of the AnimalShelter using enqueue', () => {
    testShelter.enqueue({type: 'dog', name: 'Baxter'});
    while(testShelter.front.top){
      let temp = testShelter.front.pop();
      testShelter.back.push(temp);
    }
    let rearValue = testShelter.back.peek();

    expect(rearValue.name).toEqual('Baxter');
  });

  it('Should enqueue a new cat/dog to the rear/front of an empty AnimalShelter using enqueue', () => {
    emptyShelter.enqueue({type: 'cat', name: 'Random'});
    while(emptyShelter.front.top){
      let temp = emptyShelter.front.pop();
      emptyShelter.back.push(temp);
    }
    let onlyValue = emptyShelter.back.peek();

    expect(onlyValue.name).toEqual('Random');
  });

  it(`Should return "Sorry, we only accept cats or dogs" when using enqueueing a bird`, () => {
    const response = testShelter.enqueue({type: 'bird', name: 'Tweety'});

    expect(response).toEqual('Sorry, we only accept cats or dogs');
  });

  it(`Should dequeue the dog closest to the front of the AnimalShelter using dequeue('dog')`, () => {
    let frontValue = testShelter.dequeue('dog');
    let newFrontValue = testShelter.front.peek();

    expect(frontValue.name).toEqual('DeeOhGee');
    expect(newFrontValue.name).toEqual('Kitty');
  });

  it(`Should dequeue the cat closest to the front of the AnimalShelter using dequeue('cat')`, () => {
    let frontValue = testShelter.dequeue('cat');
    let newFrontValue = testShelter.front.peek();

    expect(frontValue.name).toEqual('Kitty');
    expect(newFrontValue.name).toEqual('Fluff');
  });

  it(`Should dequeue the animal closest to the front of the AnimalShelter using dequeue('bird')`, () => {
    let frontValue = testShelter.dequeue('bird');
    let newFrontValue = testShelter.front.peek();

    expect(frontValue.name).toEqual('Kitty');
    expect(newFrontValue.name).toEqual('Fluff');
  });

  it('Should return "Sorry, the animal shelter is empty" if dequeue is called on an empty pseudoqueue', () => {
    let response = emptyShelter.dequeue('cat');

    expect(response).toEqual('Sorry, the animal shelter is empty');
  });
});
