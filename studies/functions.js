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
var express = function() {

};




/*Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
How do we specify inputs, and how do we specify outputs?
* We can specify inputs by counting parameters. You can
specify outputs by what we want the Function to return.
*/





/*Scope: Functions can see and modify variables in parent or global scopes.
The inverse is NOT true.
*A variable declared outside will be in the global scope,
*and is therefore accessible from anywhere in your code.
*Each function has its own scope, and any variable declared within that
*function is only accessible from that function and any nested functions. *
*/




/*Closures: Functions form closures around the data they house.
*If an object returned from the Function and is held in memory
*somewhere (referenced), that closure stays ALIVE, and data can continue to
*exist in these closures! (See: our meeting-room app for an example!)
*(ALSO, see: Understanding JavaScript Closures with Ease)
*When functions in JavaScript execute, they use the same scope chain
*that was in effect when they were created. This means that even after the outer
*function has returned, the inner function still has access to the outer
*function’s variables. Therefore, you can call the inner function
*later in your program.
* For example:
*/

function under() {
   var b = 40;
   function over() {
       
         var a = 80;
         console.log(a + b);
    }
   return over;
}