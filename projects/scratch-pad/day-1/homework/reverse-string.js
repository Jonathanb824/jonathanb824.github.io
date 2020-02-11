// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    /**
     * The split() method splits a String object into an array of string by separating the string into sub strings.
The reverse() method reverses an array in place. The join() method joins all elements of an array into a string.
     */
    
  //   var collect = [];
    // combaine all three methods split, reverse and join when returning the param input 
     return input.split("").reverse().join("");
    
   
//   let newString = "";
   
//     for (let i = input.length - 1; i >= 0; i--) {
//         newString += input[i];
//     }
//     return newString;
  
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}