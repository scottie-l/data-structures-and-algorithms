'use strict';

const words = require('../repeated-word.js');
const repeatedWord = words.repeatedWord;

describe('Testing repeated word function', () => {
  // "Once upon a time, there was a brave princess who..."    output = "a"
  it('Should return the first repeated word from a given string using repeatedWord()', () => {
    const result = repeatedWord('Once upon a time, there was a brave princess who...');

    expect(result).toEqual('a');
  });

  it('Should return the first repeated word from a long string using repeatedWord()', () => {
    // "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only..."    output = "it"
    const result = repeatedWord('It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...');

    expect(result).toEqual('it');
  });

  it('Should return the first repeated word from a given string, regardless of punctuation, using repeatedWord()', () => {
    // "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."  output = "summer"
    const result = repeatedWord('It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...');

    expect(result).toEqual('summer');
  });

  it('Should return "No duplicated words found" when there are no repeated words in a given string using repeatedWord()', () => {
    const result = repeatedWord('No repeated words this time around');

    expect(result).toEqual('No duplicated words found');
  });
});
