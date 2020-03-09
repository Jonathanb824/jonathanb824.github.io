/*STRING MANIPULATION*/

/* Manipulation of strings makes the work of strings simpler. Manipulation of operators and list methods of string methods can be used with string
* String methods are pure methods because there are no sideeffects which means when the input is changed there are no modifications to the output.
Several ways/methods exist to manipulate a string.
*/


/*You can Manipulate strings with operators*/

var name = "Super JB";
var about = "Hi my name is + name ";
console.log(about);

//  String -> concatenation with the += operator
var num1 = 21
num1 += 'fire' // "21fire"



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
*This method converts a string into an array making string into substrings 
*Example:
*/
var string1 = "Is it cold out?";
console.log(string1.split(" "));  // ["Is", "it", "cold", "out?"] //
//splits the string into an array of individual strings//


/*String.prototype.toLowerCase()
*The method force a string to retun in lowerCase.
*Example:
*/
var string2 = "Music make me lose control!";
console.log(string2.toLowerCase(" ")); // "music makes me lose control!" //


/*String.prototype.toUpperCase()
*This method force a string to uppercase.
*Example:
*/
var string3 = "grand rising!";
console.log(string3.toUpperCase(" ")); //"GRAND RISING!" //

/*String.trim()
*This method method removes whitespace from both sides of a string
*Example
*/
var string4 = "   Today is a good day!";
console.log(string4.trim()); // "Today is a good day!"" //