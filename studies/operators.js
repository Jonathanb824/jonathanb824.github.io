/*An operator can manipulate a certain value, or compare values. 
Operators are used to perform specific mathematical and logical calculations. 
*There are different types of operators in Javascript:
Assignment operators
Arithmetic operators
Comparison operators
Logical operators
Unary operators (!, typeOf, -)
Ternary operator (a ? b : c)


/* Assignment Operators 
* Variable values are assigned or changed by these operators. 
* List of Operator Assignments:
=    
+=    
-=
*=
/=
%=

*Example
*/

// The equal = assignment Operator is the basic assigment operator that we can used to assign (or re-assign) values to a variable. 
// There are many variations on the assignment operators, that all build off of the basic assignment operator.


/* String Operators
*String operators such as + and += can be used to add strings or concatenate.
*Example
*/
var name = "Super JB";
console.log(name); // returns "Super JB" because using the basic assigment operator we just assigned JB to the variable "name"

/*The plus equal += operator is the addition assignment operator. It adds or concat to the value of the variable. Addition or concatenation is possible with this asigment. */
//Example

// Assuming the following variables
//  var spark = 'fire'
//  var num1 = 21


// Number + Number -> addition
num1 += 2 // 23

// Number + String -> concatenation
num1 += 'fire' // "21fire"

/*The minus equal -= operator is the subtraction assignment operator. It takes away from the value of the variable. */
//Example

//  num1 = 10

num1 -= 2     // 8


/*The multiplication equal *= operator is the multiplication assignment operator. It multiplys to the value of the variable. */
//Example

//  num1 = 10

num1 *= 2     // 20

/*The division equal /= operator is the division assignment operator. It diveds the value of the variable. */
//Example

//  num1 = 10

num1 /= 2     // 5

/*The remainder equal %= operator is the remainder assignment operator. It divides a variable and assign to value the remainder of it.*/
//Example

//  num1 = 10

num1 %= 3     // 1



/*Arithmetic Operators
*These Operators perform arithemtic between variables and/or values.
*List of Arithmetic Operators:
+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Division Remainder
++  Increment
--  Decrement


*Example of Arithmetic Operators:
*/

/*The plus + operator is the addition assignment operator. Also can be use to add or concat strings together */
//Example

var colorEyes = "brown";
var contactLensInfo = "You new contact lens just arrived and they are " + colorEyes;
console.log(contactLensInfo); //adding the two strings together//
//output would return "My name is Kandice. I am 34 years old."//

  5 + 6;  // -> addition

 // returns 11 
 
 
 
 /*The subtraction - operator is the subtraction operator.*/
//Example

var subtractNum = 84 -19;
 
// returns 65

 /*The muiltipy * operator is the multiplication operator.*/
//Example

function multiply(num1, num2){
    num1 * num2;
}
multiply(6,9) // returns 54

/* The Divison / operator is the divdes operator.*/
//Example

function divides(num1, num2){
    num1 / num2;
}
divides(10,5) // returns 2

/* The increment ++ operator is the operator that adds one to the value.*/
//Example

if (a > b) {
    for (var i = 0; i < 10; i++ ){
        //console.log [i] prints 10
    }
}

/* The increment -- operator is the operator that subtracts one from the value.*/
//Example

if (a > b) {
    for (var i = 10; i > 0; i-- ){
        //console.log [i] prints 0
    }
}


/* Comparison Operators
* Compare the difference between vaules giving you a result of true or false. 
* * Here are the list of Comparison operators:
*    ==  Equal to
*    === Strictly equal to
*    !=  Not equal
*    !== Not striclty equal to
*    >   Greater than
*    <   Less than
*    >=  Greater than or equal to
*    <=  Less than or equal to

*/  
// The equal to ==  losely compares two values without considering type. 
// example

var j = 10, b = 12, d = "10";
var q = j;

j == d; // returns true because The equal to ==  losely compares two values without considering type

j === d; // returns false because The strictly equal to ===  does a strict comparison of two values with considering the type of object

j != b; // returns true because the not equals checks if two values are not equal to each other, j does not equal to b, so it is a true statement 

j > b; // returns false becuase the greater than operator checks if the value to the left is greater than the value to the left. 

j < b; // returns true because the less than operator checks if the values to the left is less than the value to the right. 

j >= b; // returns false because the greater than or equal to operator compare if the value to the left is greater than or equal to the value to the right

j <= b; // returns true because the less than or equal to operator comapres if the value to the left is less than the value to the right 




/*Logical Operators*/
/*Logical operators are used to check to are more logic between variables or values in a conditonal statement 
*Here is a list of Comparison operators:
&&  And
||  Or
!   Not
*/

/*Example using the And && operator:
*/

var j = 10, d = 12;

(j != d) && (j < d); // returns true because the && checks if j is not equal != to d AND j is less than d, this is a true statement both have to be true to return true

(j > d) || (j == d); // returns false because the OR checks if any conditon is true if j is greater than d OR j is losely equal to d, neither is correct, returns false

!(j > d); // returns true beause the ! not operator checks to see if the value to the left or right is not equal to one another


/* Unary operators */
/* A unary operator is one operator that have one arugment that performs an action
* It can go either before or after the arugment.
* Some unary operators:
*

* Decrement (--)  takes away by one from its value
* typeof          Returns a string which is the type of the object

* Example of unary opreators
*/

// Unary plus (+)  Tries to convert the value into a number, can chang a oprend from a string to number

+'-10'                                // returns -10

//Unary negation (-)  Tries to convert the NaN into a numbers then returns the opposit

-'10'                            // returns 10

// Logical Not (!)  Converts to true or false, not false becomes true

!false        // returns true


// Increment (++)  Adds one more to the value

if (a > b) {
    for (var i = 0; i < 10; i++ ){
        //console.log [i] prints 10
    }
}

// Decrement
if (a > b) {
    for (var i = 10; i > 0; i-- ){
        //console.log [i] prints 0
    }
}




/* Ternary operators
*Is another way of prefroming if/else if statement. It shortens code block and it also assigns a value to a variable based on a condition.
* Example:
*/

var num3 = 88, num4 = 4;

var num5 = num3 > num4? num3 : num4; // Syntax is saying if num3 is greater than num4 ?, return num3 else : retun num4. value of num5 is now 88 
var num6 = num3 > num4? b : a; // Syntax is saying if num3 is greater than num4 ? , return num4 else : retun num3. value of num6 is now 4