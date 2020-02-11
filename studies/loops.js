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
while (i < 30)
{
total += i;
i++;
}
console.log(total); //

/*For Loop*/
/* Can be used to access elements inside of an array or string*/
// Runs only if an condition is met, then performs an action in the block scope
/*For Loop example*/

var myArr = ["dog", "cat", "pizza"]

for (var i = 0; i < myArr.length; i++) {
    console.log(myArr[i]); // "dog", "cat", "pizza"
}





/*For-In Loops*/
/* The for-in loop are used with objects to access key/value pairs.*/
/*Object:
*/
//
var obj = {
    title: "Can you Stand The Rain",
    artist: "New Edition",
    year : "1990"
};

for (var key in obj) {
    console.log(obj[key]);
}
/* prints to the console:
*    "Can you stand the rain"
*    "New Edition"
*    "1990" */




//Looping over and array backwards//

for (var i = myArr.length - 1; i >=0 ; i--) {
    console.log(myArr[i]);
}
//outputs 5,4,3,2,1


