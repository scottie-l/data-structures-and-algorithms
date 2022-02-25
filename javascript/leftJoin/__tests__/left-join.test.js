'use strict';

const table = require('../../hashtable/hashtable.js');
const HashTable = table.HashTable;
const join = require('../leftJoin.js');
const leftJoin = join.leftJoin;

let synonyms = new HashTable(1024);

synonyms.add('fond', 'enamored');
synonyms.add('wrath', 'anger');
synonyms.add('diligent', 'employed');
synonyms.add('outfit', 'garb');
synonyms.add('guide', 'usher');

let antonyms = new HashTable(1024);

antonyms.add('fond', 'adverse');
antonyms.add('wrath', 'delight');
antonyms.add('diligent', 'idle');
antonyms.add('guide', 'follow');
antonyms.add('flow', 'jam');

let leases = new HashTable(1024);

leases.add('dad', 'February');
leases.add('mom', 'August');
leases.add('eldest', 'April');
leases.add('middle', 'April');
leases.add('youngest', 'December');
leases.add('pet', 'June');

let lePrats = new HashTable(1024);

lePrats.add('husband', 'December');
lePrats.add('wife', 'May');
lePrats.add('friend', 'August');
lePrats.add('friend', 'June');
lePrats.add('cat', 'July');
lePrats.add('dog', 'May' );

describe('Testing leftJoin function', () => {
  it('Should return all keys and values from map1 along with matching values or "null" appended in a new data structure', () => {
    const result = leftJoin(synonyms, antonyms);

    expect(result[0]).toEqual({ key: 'diligent', map1Value: 'employed', map2Value: 'idle' });
  });

  it('Should return all keys and values from map1 along with matching values or "null" appended in a new data structure', () => {
    const result = leftJoin(leases, lePrats);
    console.log(result);

    expect(result.length).toBeTruthy();
    expect(result[2]).toEqual({ key: 'pet', map1Value: 'June', map2Value: null });
  });
});

// Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
// LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
// If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row
