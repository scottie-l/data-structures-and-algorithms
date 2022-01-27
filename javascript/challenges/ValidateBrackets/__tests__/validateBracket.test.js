'use strict';

const validateBracket = require('../validateBrackets.js');
const validate = validateBracket.validator;

describe('Testing the validateBracket function', () => {
  it('Should return "true" if the string contains valid open and close paranthesis', () => {
    const validOne = validate('{[]}'); // 3 w/ 2
    const validTwo = validate('[(){[]}]()'); // characters closing inside characters
    const validThree = validate('{object[array(index)]}'); // 3, 2, 1, with strings

    expect(validOne).toEqual(true);
    expect(validTwo).toEqual(true);
    expect(validThree).toEqual(true);
  });

  it('Should return "false" if the string contains invalid open and close paranthesis', () => {
    const testOne = validate('[({}]'); // error closing ) doesn’t match opening (
    const testTwo = validate('[}'); // no corresponding brackets
    const testThree = validate('{It\'s} (Bracket) [Time!]}'); // no opening bracket

    expect(testOne).toEqual(false);
    expect(testTwo).toEqual(false);
    expect(testThree).toEqual(false);
  });
});

// characters: r(1) s[2] c{3} = true;

// Input                  	Output
// {}	                      TRUE
// {}(){}                 	TRUE
// ()[[Extra Characters]]	  TRUE
// (){}[[]]	                TRUE
// {}{Code}[Fellows](())  	TRUE

// [({}]                  	FALSE
// (](	                    FALSE
// {(})	                    FALSE

// Input	Output	          Why
// {	    FALSE	            error unmatched opening { remaining.
// )    	FALSE	            error closing ) arrived without corresponding opening.
// [}   	FALSE	            error closing }. Doesn’t match opening (.
