//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// create an empty array to hold object values 
var arr = [];
  // to access values in an object, we can use a for in loop;
  for (var key in object){
      // adding the values to our empty array by using.push method
      arr.push(object[key]);
  }
return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

// the method Object.keys() converts an object into an array. We can use the method.join on an array to turn it into an string
return Object.keys(object).join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create an empty array to hold object values 
    let arr = [];
    // to access values in an object, we can use a for in loop;
    for(let key in object){
        // once in the object we can check if object key have the === to string
        if(typeof object[key] === "string"){
            // push the values to new arr
        arr.push(object[key]);
    }
    }
    var str = arr.join(" ");
    return str;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // to check if an array isArray we can use the Array.isArray() method
    if (Array.isArray(collection)){
        // if collection is array we are going to retun the array
        return "array"
    } else{
        // else the collection is an object
        return 'object'
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // create a new string 
    var final = "";
    // we are going to concat final with the first index to string upperCase
    final += string[0].toUpperCase();
    // we are looping through the array with for loop to access each character in string
    for(var i = 1; i < string.length; i++){
        // we are adding the string indexes to the final string 
        final += string[i];
    }
    return final;
}

// function capitalizeWord(string) {
//     var capMe = string[0].toUpperCase();
//     return capMe += string.substring(1);
// }

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
// var capitalizedStrings = [];
// var capMe = string.split(" ");
// capMe.forEach(function (capMe) {
//     capitalizedStrings.push(capMe[0].toUpperCase());
// });
// return capitalizedStrings.join(" ");

// create an empty container
  var array1 = [];
  
  var array = string.split(" ");
  // loop through the array of characters from the string we just split into an array
  for(var i = 0; i < array.length; i++){
      // apply capitalizeWord function to an array
    array1.push(capitalizeWord(array[i]));
  }
  // retun array.join converting our array into an string
  var final = array1.join(" ");
  return final;
}



// function capitalizeAllWords(string) {
//     // empty array as place holder
//     var arr2 = [];
//     // create another array with string.split
//     var arr3 = string.split(" ");
//     // made a for loop to loop through the array with array.split
//     for(let i = 0; i < arr3.length; i++){
//     // push1 array1 with capitalizedword(array[i]))
//         arr2.push(capitalizeAllWords(arr2[i]));
//     }
//     // create a new var arr.split.join
//     var final = arr2.join(" ");
//     // retun final 
//     return final;
    
    
// }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

var string = "Welcome " + capitalizeWord(object.name) + "!";
  console.log(string);
  return string;


}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // apply the capitalizedWord function to object. name and capitalizedAllWords to object.species
    return capitalizeWord(object.name) + " is a " + capitalizeAllWords(object.species);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // using array or object method we can check if object.noises equal to array 
    // and if the length of object.noises is greater than 1
    if(arrayOrObject(object.noises) === "array" && object.noises.length > 1){
        // if so we can return the name of object.noises in a string 
        return object.noises.join(" ");
    }
      else {
          return "there are no noises";
      }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
 
 // the includes method can be used on a string, checking if the word in the parenthises is in the string
return string.includes(word); 


}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
// we can access an object using .dot notation and 
// we can add to an array in an object using.push
  object.friends.push(name);
  // retun the updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
// check if the friends key in object is undefine
   if(object.friends === undefined){
       // if that is true, returns false
        return false;
    }
    // loop over friends key to access the indexs
    for(var i = 0; i < object.friends.length; i++){
        // check if the there is a name in the array of friends 
        if(object.friends[i] === name){
            return true;
        }
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

var final1 = [];
//loop through given array
 //Extract all people name.
    for(var i = 0; i < array.length; i++) {
        //Find if the input name is a name in the list
        if(name !== array[i].name){
// if not that means all people are not friends.
            if(!array[i].friends.includes(name)){
                // push the not friends into new array
                final1.push(array[i].name);
            }
        }
    }
        return final1;
   

// var final2 = array.isFriend(function (list, person, index) {
                   
//               if(person.friends[index] !== name && person.name !== name){
                  
//                   console.log(person, "ALert!!!!!!")
//                 list.push(person.name);
//                 console.log(list, "Can you find me!")
//               }
//               return list;
// },[]);

//  return final2;



}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

// to add a key to object name value, we can use bracket notation. 
object[key] = value;
// return object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// access obect keys by using a for in loop
 for(var key in object){
     // check if the key is located in the array
        if(array.includes(key)){
            // if so delete object key
            delete object[key];
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
// create a new array to hold results 
var arr = [];
// loop through current array 
  for(var i = 0; i < array.length; i++){
      // copy elements from the array and push into the new array 
    if(!arr.includes(array[i])){
      arr.push(array[i]);
    }
  }
  return arr;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}