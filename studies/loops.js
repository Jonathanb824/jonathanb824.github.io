/*Loops*/

/*Loops are used to to access the elements in containers
*It runs if it meet a specified condition.
* The types of loops are for loops, while loops, and for-in loops.
*/

//Explain while, for, and for-in loops
//Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
//Loop over an Array, forwards and backwards
//Loop over an Object



/*While Loop*/
//While the statement produces a loop which is executed while the condition is true. 
// Run as long as the condition is true. Only when the condition is wrong will it stop. 

/*While Loop example*/
var i = 10;
var total = 4;

while (i < 30) // while loops starts with the word while. next comes the condition
{ // after the condition comes the code block
total += i; // 
i++; // increment until the condition is met
}
console.log(total); //

/*For Loop*/
/* Can be used to access elements inside of an array or string*/
// Runs only if an condition is met, then performs an action in the block scope
/*For Loop example*/

var myArr = ["dog", "cat", "pizza"]

// a for loop starts off with the word for 
// next in parenthies comes ([initialExpression]; example var i = 0;
// next comes the condition [condition]; example, check if i is less than myArr.length
// [incrementExpression]) next we want to increment 1 until that i is no longer less than myArr.length
// statement: in our code block we can use the console.log to print the values of i

for (var i = 0; i < myArr.length; i++) {
    console.log(myArr[i]); // "dog", "cat", "pizza"
}





/*For-In Loops*/
/* The for-in loop are used with objects to access key/value pairs.
* loops through the properties of an object
*/

// syntax: for(key in object) {
    // Code to be executed
//}


// example

var obj = {
    title: "Can you Stand The Rain",
    artist: "New Edition",
    year : "1990"
};

// start with key word for, next ( var key in obj is the condition) {code block where we could print our values to the console}
for (var key in obj) {
    console.log(obj[key]); // 
}

// to just print the keys using a for in loop I would just console.log(key)

for (var key in obj) {
    console.log(key); // 
}

/* prints to the console:
*    "Can you stand the rain"
*    "New Edition"
*    "1990" */

// The counter is. "key" in the for-in loop. It is a string, not a number. 
// It contains the name of current properties in the object


//Looping over and array backwards//

for (var i = myArr.length - 1; i >=0 ; i--) {
    console.log(myArr[i]);
}
//outputs 5,4,3,2,1


