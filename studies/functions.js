/*Functions*/

/*
Functions perform a certain action on our code. 
*Using the key word function, giving it a function name, parenthesis, curly braces where we put in our code
* A funtion must have a return statement to give an out put
* To invoke a function we must call the function name 
*/



/*The two phases to using functions: First we must use Key word function to create a function
* give it paramater/paramters, located in parenthesis(), give it an action to preform in the code block {code block}
Then call the function/ invoke funtion.
*/




/*What’s the difference between a function’s parameters and arguments PASSED
to a function?
*Parameters are can be anyname they are just place holders inside the parthenesis.
*Arguments go inside the parenthesis when calling the function.Can be the values from the variables that were declared or
they be literal data.

*/



/*What’s the syntax for a NAMED function?*/
function timesByNum(a,b){
    return a * b;
}
timesByNum() (10,12); // returns 120//



/*How do we assign a function to a variable? Yes it is also known as Function Expression”*/
// We can assign a function to a variable using the keyword var. Creating a function expression
var express = function() {

};




/*Functions, have place holders call paramsers that can and OPTIONALLY be used. It also can OPTIONALLY return a single value.
How do we specify inputs, and how do we specify outputs?
* We can specify inputs by counting parameters. You can
specify outputs by what we want the Function to return.
*/





/*Scope: Functions create local scopes that that parameters and variables defined in it
can only be used within that function, and are not visible to Global Scope.

*Variables that are declared in the global scope can be access within the local scope.
*and is accessible from anywhere in your code.
*
*/
// example 

var weather = 70;
function newDay(sunny){
    if (sunny < weather){
        console.log("stay inside!"); // "Stay inside" prints. As we see we are using a global var inside our local scope with out local parameter
    }
}

console.log(sunny)// we will get undifined becuase sunny is inside the local scope and can not be access outside it


/*Closures: Functions that protects data. Or another way of saying it.
Closures are used frequently for object data privacy.
A closure can be look at as nested combonation of functions, (enclosed) with references to its surrounding form.  
*If an object returned from the Function and is held in memory
*somewhere (referenced), that closure stays ALIVE, and data can continue to
*exist in these closures!

* For example:
*/

function above() {
   var l = 40;
   function moon() {
       
         var d = 80;
         console.log(l + d);
    }
   return moon;
}