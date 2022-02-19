const { it } = require('eslint/lib/rule-tester/rule-tester');
const dataStructure = require('../hashtable.js');
const HashTable = dataStructure.HashTable;


let table = new HashTable(1024);

table.add('Carissa', 'Best Wife');
table.add('Baxter', 'Best Dog');
table.add('Jacob', 'Instructor');
table.add('Jonas', 'Collision Target');


describe('Testing hash table behavior', () => {
  // Setting a key/value to your hashtable results in the value being in the data structure
  it('Should take in a key/value pair and successfully insert it into the hashtable using add()', () => {
    table.add('Scott', 'Student' );
    let result = table.contains('Scott');

    expect(result).toBeTruthy();
  });

  // Retrieving based on a key returns the value stored
  it('Should retrieve the associated stored value when provided a key using get()', () => {
    let result = table.get('Scott');

    expect(result).toEqual('Student');
  });

  // Successfully returns null for a key that does not exist in the hashtable
  it('Should return null when provided a non-existent key using get()', () => {
    let result = table.get('Jason');

    expect(result).toEqual(null);
  });

  // Successfully hash a key to an in-range value
  it('Should hash a key to an in-range value using hash()', () => {
    let result = table.hash('Jason');
    if(result >= 0 && result < 1024){
      result = true;
    } else {
      result = false;
    }

    expect(result).toEqual(true);
  });

  // Successfully handle a collision within the hashtable
  it('Should handle a collision within a hashtable by using a LinkedList in the bucket when using add()', () => {
    table.add('Jason', 'Collision Test');
    let bucketValue = table.buckets[589];

    expect(bucketValue.head).toBeTruthy();
  });

  // Successfully retrieve a value from a bucket within the hashtable that has a collision
  it('Should successfully retreive a value from a bucket in the hashtable that has a collision with get()', () => {
    let result = table.get('Jonas');

    expect(result).toEqual('Collision Target');
  });
});






