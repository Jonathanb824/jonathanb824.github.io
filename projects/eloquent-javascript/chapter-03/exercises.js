////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a function that has two parameters
// output: the return minimum between the two parameters

function min(num1,num2) {
  // vheck if num1 is less than num2 
  if (num1 < num2) {
    // if its less, return num1
    return num1;
    // else it return num2
  } else {
    return num2;
  }
}

console.log(min(0, 20));
// → 0
console.log(min(0, -20));
// → -20

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// isEven function should take 0ne parameter
// 
// it should return a boolean
//



function isEven(num) {
// check using strict comparison if num is equal to 0
  if (num === 0) return true;
  // else if num is equal to 1 return false 
  else if (num === 1) return false;
  // else if num is greater that 0 return isEven minus num 1
  else if (num < 0) return isEven(-num);
  // else if  return isEven minus num 2
  else return isEven(num - 2);

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// countChar function should take two parameters 


function countChars(str, char) {
// make a varible that is equal to zero
  let counted = 0;
  // loop through the string to access each charater
  for (let i = 0; i < str.length; i++) {
    // check if any of the charaters in the string matches the charater
    if (str[i] == char) {
      // for every time a the character is there add one to the count
      counted += 1;
    }
  }
  return counted;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// countBs takes a string as its only  
// return a number that will be the number of uppercase “B” characters



function countBs(str) {
  // return counted characters 
    return countChars( str,"B");
}


console.log(countBs("BBKing")); // -> 2


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
