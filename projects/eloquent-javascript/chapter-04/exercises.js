////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


// create a function called range that takes two parameters (start, end)
// the function will return an array
// the array will contain all the numbers from start to the end and also include
// the end

function range(start, end, step) {
 
 // create an array that will hold the resuluts
  var rangeArray = [];
 
      // check if start is strick equal to end
  if(start === end){
    // if so return the new array
  return rangeArray;
  // check all if strat is less than or equal to end and step
  } else if(start <= end && step > 1) {
  // if so lets through the end 
  for(var i = start; i <= end; i = i + step ){
    // push the index to the new array
    rangeArray.push(i);
  } } else if(start >= end && step < 1){
    // if start is greater than or equal to end and step
  for(var j = end; j >= start; j = j + step){
    // psuh the index to the new array
    rangeArray.push(i);
   } }else if (start <= end && step === undefined || step === 1){
     for( i = start; i <=end; i++){
       rangeArray.push(i);
     }
   }
   return rangeArray;

  }



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

  //returns the sum of numbers numbers from an array of numbers


function sum(arr) {
// create a var that will hold our count
  let total = 0;
  // loop through the array of the numbers 
  for (let value of arr) {
    // add the total plus value
    total += value;
  }
  // return total
  return total;


}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//takes an array as argument and produces a new array that has the same
//elements in the inverse order.

function reverseArray(array) {
// create a new array that will hold values from loop
  let reverseArr = [];
  // loop through array backwards
  for (let i = array.length - 1; i >= 0; i--) {
    // push the index from loop to the new array
    reverseArr.push(array[i]);
  }// retun the array
  return reverseArr;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////



function reverseArrayInPlace(arr) {
  // loop through the array
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  // hold the array indexes in a new array
    let old = arr[i];
    
    arr[i] = arr[arr.length - 1 - i];
    // assign the arr to the new array, that has the values in reverse 
    arr[arr.length - 1 - i] = old;
  }
  return arr;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
// create a null 
  let list = null;
  // loop through the array backwards
  for (let i = array.length - 1; i >= 0; i--) {
    
    list = {value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // create an array
  let array = [];
  // loop through our object list
  for (let node = list; node; node = node.rest) {
    // push the results to the array
    array.push(node.value);
  }
  return array;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  // retun list
  return {value, rest: list};

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // check if is not a list, return undefine
  if (!list) return undefined;
  // else if n is loosely equal to 0, return object value
  else if (n == 0) return list.value;
  // else return nth(list.rest, n - 1)
  else return nth(list.rest, n - 1);

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a,b) {
  // compare values
  if (a === b) return true;
 
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;
// loop through object
  for (let key of keysA) {
    // compare values
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
