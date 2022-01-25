'use strict';

const listZip = require('../linked-list-zip.js');
const master = require('../../../Data-Structures/linked-lists/linked-list.js');
const NodeGen = master.nodeGen;
const ListGen = master.listGen;

describe('Testing zipLists function', () => {
  it('Should return a combined list with alternating nodes from 2 lists', () => {
    const ll1 = new ListGen();
    ll1.head = new NodeGen(5);
    ll1.head.next = new NodeGen(10);
    ll1.head.next.next = new NodeGen(15);
    ll1.head.next.next.next = new NodeGen(20);
    ll1.head.next.next.next.next = new NodeGen(25);

    const ll2 = new ListGen();
    ll2.head = new NodeGen('A');
    ll2.head.next = new NodeGen('B');
    ll2.head.next.next = new NodeGen('C');
    ll2.head.next.next.next = new NodeGen('D');
    ll2.head.next.next.next.next = new NodeGen('E');

    const ll3 = listZip.zipLists(ll1, ll2);
    const ll3String = ll3.toString();

    expect(ll3String).toEqual('{5} -> {A} -> {10} -> {B} -> {15} -> {C} -> {20} -> {D} -> {25} -> {E} -> NULL');
  });

  it('Should return a combined list with alternating nodes from 2 lists of differing lengths', () => {
    const ll1 = new ListGen();
    ll1.head = new NodeGen(5);
    ll1.head.next = new NodeGen(10);
    ll1.head.next.next = new NodeGen(15);
    ll1.head.next.next.next = new NodeGen(20);
    ll1.head.next.next.next.next = new NodeGen(25);

    const ll2 = new ListGen();
    ll2.head = new NodeGen('A');
    ll2.head.next = new NodeGen('B');
    ll2.head.next.next = new NodeGen('C');

    const ll3 = listZip.zipLists(ll1, ll2);
    const ll3String = ll3.toString();

    expect(ll3String).toEqual('{5} -> {A} -> {10} -> {B} -> {15} -> {C} -> {20} -> {25} -> NULL');
  });
});
