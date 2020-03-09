/* DATATYPES
* Are used to build data structures to run code. There are many diffent datatypes.
* Datatypes are not variables as variables are where the value is stored.
* Datatypes are just the type of data that is stored.
* There are 12 main datatypes.
Number
String
Boolean
Array
Object
Function
undefined
null
NaN
Infinity and -Infinity (Google them if you don’t know!)
What is the difference between primitive/simple and complex data types?
Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?


*/

/* 1. Number
 * Number is a numeric data type. Simply put just a number
* For example:
*/
var coins1 = 2; // without a decimal
var coins2 = 2.25; // with a decimal

/* 2. String
* A string is a textual datatype that character holda an index. A string can hold text inside quotes"" or nothing inside quotes. 
* How do we access characters in a string? By using charAt method, we cab access the character at the index we give it.
* How are values stored in a string? Variables are containers for storing data values using the var key word followed by the name we want to assign our value, 
* followed by the assigment operator then using single or double quoutes we place our text in between
*For example:
*/

var nameFirst = "Super JB"; // double quotes

 nameFirst.charAt(2);
 // I'll get back 'p', the character at index 2 of the String.

var nameLast = 'Brown'; // single quotes
var nothing = ""; //empty string

/* 3. Boolean
*Return only  true or false. Using compasion operators we can compare values, base on condition it will either return a boolean
*For example:
*/
var num1 = 10;
var num2 = 20;
var num3 = 3;
var num4 = "20"

num1 === num2; // false
num2 == num4; // true


/* 4. Array
*An array is a container that holds values in indexes. 
*A litteral array is created with []; square brackets
*For example:
*/
var burgerToppings = ["lettuce", "tomatoes", "cheese"];
//here in this array, "lettuce has the index of 0, tomatoes index is 1, and cheese index of 2."

/* 5. Object
*An object is atorage containcer that holds key/values pairs 
An object litteral is created with curly brackets
we can access an object using dot notation and bracket notation 

*For example: */
    var moodSong = {
    title: "Cheese and Dope",
    artist: "Project Pat",
    year : "2002"
};

console.log(moodSong.title) // prints to the console "Cheese and Dope"

/* 6. Function
* A function is a block of code we created to run an action {}
*To create a function we use the keyword function, follow by a name, follow by(place holder), follow by our code block inside curly braces {Code block}.
/* An example of a function:*/
 function timesByNum(a,b){
    return a * b;
}
timesByNum(10,20); //--> mulitply 10 * 20 which equals 200

/* 7. undefined
* Undefined appears when we have the correct sytax but no value assign to variable
*For example: */
var hot;
console.log(hot); // prints undefined to the console log

/* 8. null
* Null has only one value of null, it hold nothing else. 
* For example:
*/

var carDealer = { company: "GMC", type: "Big Body", color: "Tan"};
carDealer = null; // value is null but it is still an object

/* 9. NaN
*NaN means not-a-number , when checking datatypes we can see if a value is NaN
* It is also most likey to show NaN when Math functions fail
*For Example:
*/
isNaN("Hey"); // true

isNaN(14,15,16); // false

/* 10. Infinity and -Infinity (Google them if you don't know!)
* Infinity is a  number property that represents the positive Infinity value
* We can ues POSITIVE_INFINITY property to check an error condition that returns a finite never ending number.
*/

/* -Infinity is a number property that has a negative infinity value.
* -Infinity is displayed when a number exceeds the lower limit of the floating
* point numbers, which is -1.797693134862316E+308.
*/

/* 11. What is the difference between primitive/simple and complex data types?
// Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?

*Primitive data is static data that can't not be changed . There are 6 types of Primitive data type. 
Boolean, Null, Undefined, Number, String, Symbol. Primitve Data types are Immutable and can not be changed.
A primitive is not an object and has no methods of its own. When we assign primitives to the variable, we copy the value. 
If any changes are made to the variable copied, the original variable will not be affected by them.
They are only copy by value. 
* example 
*/
let workOut = "Weight Lifting"
let burnOut = workOut;

console.log(workOut, burnOut) // it will print "Weight Lifting", "Weight Lifting"// this is becuase work out has be copy by value

 burnOut = "Four Mile Run"; 
 
 console.log(workOut, burnOut) // it will print to "Weight Lifting", "Four Mile Run" // The original variable was not be affected by the change because it was only copied

/* 
*Complex data data that would be considered an object, array or function. When we work complex data we are working with the reference of the value not just a copy,
they are mutable because of it.
* example 
*/

let workOut2 = {
 compoundMovement : "Weight Lifting",
 cardio: "four mile run"
}

let workOut3 = workOut2;

console.log(workOut2.cardio, workOut3.cardio) // prints "four mile Run", "four mile run". 

workOut3.cardio = "100 meter swim"

console.log(workOut2.cardio, workOut3.cardio) // prints out "100 meter swim", "100 meter swim" // because we are working with original reference



