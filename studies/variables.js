/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/** We can declare and assign a variable using three keywords
 * var, let, const 
 */
// Note: That we can delcare a variable using var, let and const.

// For example

var firstName; // varibales using var belong to the global scope if they are not created in a local scope. variables that are declare with var are hoisted to the top of code

let middleName; // When we delcare with let, let is confined to the local scope. The difference between var and let, is that let is initialized to a value only when assign.
               //  Accessing the variable before the initialization results in a ReferenceError

const lastName = "Brown"; //  Notice how const have to be declare and initialized at the same time
// That's because const can not be change/ re-assign or re-delcared. It is constant



//hoisting: Is var & function declarations being moved to top of the code. JavaScript only hoists declarations. 

hoisted = 10;
console.log(hoisted);
var hoisted;
// 3

// In the function, 
// var l will be hoisted to the top of the scope first. The function above(). Next var d will be hoistied, then function moon()
function above() {
   var l = 40;
   function moon() {
       
         var d = 80;
         console.log(l + d);
    }
   return moon;
}