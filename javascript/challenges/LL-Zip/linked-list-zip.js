'use strict';

const master = require('../../Data-Structures/linked-lists/linked-list.js');
const NodeGen = master.nodeGen;
const ListGen = master.listGen;

function zipLists(list1, list2) {
  let ll3 = new ListGen();
  let curr1 = list1.head;
  let curr2 = list2.head;

  while(curr1 && curr2) {

    if(curr1) {
      let tempValue = curr1.value;
      ll3.append(tempValue);
    }

    if(curr2) {
      let tempValue = curr2.value;
      ll3.append(tempValue);
    }

    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  while(curr1) {
    let tempValue = curr1.value;
    ll3.append(tempValue);
    curr1 = curr1.next;
  }

  while(curr2) {
    let tempValue = curr2.value;
    ll3.append(tempValue);
    curr2= curr2.next;
  }
  return ll3;
}

module.exports = {
  zipLists: zipLists,
};
