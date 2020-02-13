/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// input two params animals[], name ""
// output return an animals Object or Null is no animal exist

// create a a function called `search`
function search(animals, name){
      return animals.reduce((final, animal) => {
          console.log(animal);
    
    // // to access the elements in array we have to loop through the indexes
    // for (var i = 0; i < animals.length; i++){
        // check if our string of name is equal to any index in animals
        console.log(name, "HEY I AM HERE");
        console.log(animal.name, "Right HERE"); 
        if (name.toLowerCase() !== animal.name.toLowerCase()){
        // if name exist, we will return that object     
            return final;
        }
      // if not we are returning null 
       return animal;
    } 
 ,null);
}  
    
    
    
    
   
 

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function name repalace 
// input: three params, taking in an array, and two strings
// output: the array with the replament string inside it
function replace (animals, name, replacement){
    // loop through the array to get to the indexes
     for (var i = 0; i < animals.length; i++){
         // check if the name is in the array of objects
         if(name === animals[i].name){
             return animals.splice(i,1,replacement);
         }
   
}
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function name remove
//input: two params an Array, and a string 
// output return an animals Object or Null is no animal exist

function remove(animals, name){
    // create a for loop to look through the array of animals 
      for (let i = 0; i < animals.length; i++){
          //check if animal name using strick comparison is in the animals index
         if(name === animals[i].name){
             
             return animals.shift(i,1);
         }
   
}
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
   //checking if aninmal.name has a lenght greater than 0
   // && if the anim
 
   if (animal.name.length > 0 && animal.species.length > 0) {
      if (!search(animals, animal.name)) {
          animals.push(animal);
      }

   }
}



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
