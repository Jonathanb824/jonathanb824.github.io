/*STRING MANIPULATION*/

/* Manipulation of strings makes the work of strings simpler. Manipulation of operators and list methods of string methods can be used with string
* String methods are pure methods because there are no sideeffects which means when the input is changed there are no modifications to the output.
Several ways/methods exist to manipulate a string.
*/


/*You can Manipulate strings with operators*/

var name = "Super JB";
var about = "Hi my name is + name ";
console.log(about);





/*Manipulating strings with methods.

*Here are just some methods used to manipulate strings:
*/


/*String.prototype.concat()
This method combines two strings together.
Example:
*/
var salute = 'Hi, ';
console.log(salute.concat('Super JB', '. Peace be to you.'));
// "Hi, Super JB. Peace be to you."//

/*String.prototype.slice()
*This method takes away parts from a string and retun the a string with the elements that was remove.
*Example:
*/
var str = "Grand Rising!";
console.log(str.slice(0, 4)); // Grand //

/*String.prototype.split()
*This method splits a String object into an array of strings by separating the
*string into substrings.
*Example:
*/
var str1 = "How is the weather?";
console.log(str1.split(" "));  // ["How", "is", "the", "weather?"] //
//splits the string into an array of individual strings//


/*String.prototype.toLowerCase()
*The method returns the string value converted to lower case.
*Example:
*/
var str2 = "Good Night!";
console.log(str2.toLowerCase(" ")); // "good night!" //


/*String.prototype.toUpperCase()
*This method returns the string value converted to uppercase.
*Example:
*/
var str3 = "good afternoon!";
console.log(str3.toUpperCase(" ")); //"GOOD AFTERNOON!" //

/*string.length()
*Tells us the length of the string.
*Example
*/
var str4 = "Hello World!";
console.log(str4.length); // 12 //