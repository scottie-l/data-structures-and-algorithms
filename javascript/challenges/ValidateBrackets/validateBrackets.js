'use strict';

const master = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
const Stack = master.StackGen;

const validateBracket = (input) => {

  const validator = new Stack();

  for (let i = 0 ; i < input.length ; i++) {
    let character = input.charAt(i);
    if(character === '(' || character === '[' || character === '{'){
      validator.push(character);
    } else {
      if(validator.isEmpty()){
        return false;
      }
      let comparison = validator.top.value;
      if (character === ')' && comparison === '(' || character === ']' && comparison === '[' || character === '}' && comparison === '{') {
        validator.pop();
      }
    }
  }
  return validator.isEmpty();
};

module.exports = {
  validator: validateBracket,
};

// characters: r(1) s[2] c{3} = true;

// Input	                    Output
// {3}	                        TRUE
// {3}(1){3}	                TRUE
// (1)[2[Extra Characters 2]]	TRUE
// (1){3}[2[2]]	                TRUE
// {3}{Code3}[Fellows2](1(1))	TRUE
// [2(!{3}]	                    FALSE
// (!]!(!	                    FALSE
// {(})	                        FALSE   error closing }. Doesn’t match opening (

// Input	Output	    Why
// {	    FALSE	    error unmatched opening { remaining.
// )	    FALSE	    error closing ) arrived without corresponding opening.
// [}	    FALSE	    error closing }. Doesn’t match opening (.
