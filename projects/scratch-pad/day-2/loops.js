// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // looping to access the values in array
  for (var i = 0; i < array.length;  i++){
      // to print the values console.log array[i]
  console.log(array[i]);
  
  
  // YOUR CODE ABOVE HERE //
}
}
/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // to print values in reverse we have to access our array first, create a stoping condition, then deincrement
     for (var i = array.length - 1; i >= 0; i--) {
         // to print the values console.log array[i]
        console.log(array[i]);
       
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // to get object keys we can use object property Object.keys() this turns an Object into an array
    return Object.keys(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
   //loop over the Object and print its keys
  for (var key in object){
    console.log(key);
  }
 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // create a container to hold results
   let values = [];
   // loop of object using for in loop
   for (let key in object){
       // push object[key] in the container values
    values.push(object[key]);
}
return values;

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // use for in loop to access values in object
   for (var key in object){
       // print values to console
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // using .length we can access the length on Object.Keys()
   return Object.keys(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create an empty container to hold result
   var myArray = [];
   // use for in loop for object to gain access to it values
    for(var keys in object) {
        // push the values into the container we created
        myArray.push(object[keys]);
    }
    // to print values in reverse we have to access our array first, create a stoping condition, then deincrement
    for(var i = myArray.length-1; i >= 0; i--) {
        console.log(myArray[i]); // I changed this from keys[i]
    }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
