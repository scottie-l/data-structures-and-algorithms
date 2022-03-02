'use strict';

const getEdge = (graph, array) => {
  if(!graph.size()) {
    return null;
  }
  let tripPossible;
  let tripCost = 0;

  for(let i = 0; i < array.length -1; i++) {
    let neighbors = graph.getNeighbors(array[i]);
    if(!neighbors) {
      tripPossible = false;
      return;
    }

    if(tripPossible !== false) {
      for(let neighbor of neighbors) {
        let neighborName = neighbor.vertex.value;
        let neighborCost = neighbor.weight;

        if(array[i+1].value === neighborName) {
          tripCost += neighborCost;
          tripPossible = true;
          break;
        } else {
          tripPossible = false;
        }
      }
    } else {
      tripCost = 0;
      break;
    }
  }
  if(!tripPossible){ tripCost = 0; }
  let tripObj = { possible: tripPossible, cost: `$${tripCost}`};
  return tripObj;
};

module.exports = {
  getEdge: getEdge,
};

// Input                                Output
// [Metroville, Pandora, ]	            True, $82
// [Arendelle, New Monstropolis, Naboo]	True, $115
// [Naboo, Pandora]                 	False, $0
// [Narnia, Arendelle, Naboo]	        False, $0
