/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an empty object name animal

var animal = {};
// add two proerties using dot and bracket notation to the object
animal.species = "dog";
animal['name'] = "Tyson";
// create an array protery in the object that contains noises key
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// create an empty array and call it noises
var noises = [];
// push into the object using array methods
noises[0] = "bark";
noises.push("woof");
noises.unshift("howl");
noises.push("owww");
// print the lenght of noise array, and the last item in it
console.log(animal.noises.length);
console.log(animal.noises.length-1);
console.log(animal.noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;

noises[animal.noises.length] ="rawwr";

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create an array of animamis 
var animals = [];
// create a duck object that has the name of duck, with keys of 
// species, name, noises
var duck = {
    species: "duck",
    name: 'Jerome',
    noises: ['quack', 'honk','sneeze', 'woosh']
};

// create two more animal objects with the same keys
var dog = {
    species:'dog',
    name:'GQ',
    noises: ['grawl', 'howl']
};

var horse ={
    species: 'mammal',
    name: "Mred",
    noises: ['naah',"woosh"]
};

animals.push(animal);
animals.push(duck);
animals.push(dog);
animals.push(horse);

// console.log(animals);

console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create an array data type to input the list of friends. Having the
// friends in an array, makes it easy to organize data, and sort throw 
// the list in order. 

var friends = [];

function getRandom (animals){
    for (var i = 0; i < animals.length; i++){
    return Math.floor(Math.random(animals.length));
   
}
}

friends.push(dog["name"]);
animals[getRandom(animals)].friends = friends;
console.log(friends);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
