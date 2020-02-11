/*Control flow
**Control flow follows a streamline of conditions, that executes statements or
*run blocks of code only if conditional statements are met. 
Conditional Statements are a set of *instructions that are given and executed if a condition is true.
*/


/*Lets explore the conditional statements:
If
Else-if
Else
Switch.
*/

/*If statement*/
/* To start a if statement we must start with the Keyword if. 
The if keyword starts our conditional chain. 
We can only have one if keyword in a if statement. 
When we use the if keyword we can check a condition and runs only if a condition is true*/
/*Example of an If statement*/

function geekNerd(iQ){
    if (iQ > 90){
   return 'Nerd';
}
}
geekNerd(99); // --> returns 'Nerd' //




/*Else-If statement*/
/*The else if comes after the if statement and only runs if the first condition fails.
We can have as many else if statement we can desire. Checking as many conditions we can think of if we keep hitting false conditions

/*Else-If Example*/
function makeMoney(ballin){
if (ballin <= 1000000) {
  return "Balling!!!";
} else if (ballin <= 1000 && ballin >= 500) {
  return "Poket Change";
} else if (ballin <= 100 && ballin >= 50) {
  return "Pokets Hurt";
}else {
    return "Go get the Money!"
}
}
makeMoney(20000000); //returns --> "Balling!!!" //


/*Else Statement*/
/*The else statement is used as a default exit to a conditional statement
as we said in the previous example else if can go on for as long as we like, 
but what if none of our else if conditions results to true. 
The else statement returns our default statement 
/*Example of Else Statement:
*/
function makeMoney(ballin){
if (ballin <= 1000000) {
  return "Balling!!!";
} else if (ballin <= 1000 && ballin >= 500) {
  return "Poket Change";
} else if (ballin <= 100 && ballin >= 50) {
  return "Pokets Hurt";
}else {
    return "Go get the Money!"
}
}
makeMoney(30); //returns --> "Go get the Money" // because none of our condtions has been met

/*Switch statements */
/*Like if are used to check conditions. Using the keyword Switch, follow by a parenthesis with an input value to be checked(expression) 
Follow by the keyword Case along with the expression, just like else if we can have as many cases as we want. Default is the keyword we use to get out the code.
based on different conditions*/

/*Switch statment example*/
var love = "Marry Me";
var saySomething;
switch (love) {
    case "Marry Me":
        saySomething = 'Yes I will!!';
        break;
    case "Tacos":
        saySomething = 'Really!';
        break;
    case "You":
        saySomething = 'Love you too';
        break;
    case "music":
        saySomething = 'Me Too!';
        break;
    default:
        saySomething = 'I love everything about you';
}
console.log(saySomething); // "Yes I will"