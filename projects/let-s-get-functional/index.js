// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jonathanb");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // I: an array
    // O: number
    // C: use _.filter
    
    // get access to each customer obj and filter out the males 
    
  return  _.filter(array, function(customerObj, index, array){
        // checking to see if my customer is a male using the gender key
        return customerObj.gender === "male";
    }).length // chain on .length to get number of male customers

};

var femaleCount = function(array){
//- **Objective**: Find the number of female customers
// - **Input**: `Array`
// - **Output**: `Number`
 //- **Constraints**: use `reduce`
 
 return _.reduce(array, function(previousResult, ladyCount){
     if (ladyCount.gender === "female") {
         return previousResult +1;
     }
     return previousResult;
 },0);
 
 
 
 
 
};

//### 3: `oldestCustomer`
// - **Objective**: Find the oldest customer's name
// - **Input**: `Array`
// - **Output**: `String`
// - **Constraints**:

var oldestCustomer = function(array){
    
  var elderName = _.reduce(array,function(oldPerson, currentCustomer){
      // check if the previous age is greater than the current age
        if(oldPerson.age <= currentCustomer.age){
            
             return currentCustomer;
        }
        return oldPerson;
    });
    
    return elderName.name; 
};


var youngestCustomer = function(array){
    
     var youngster = _.reduce(array,function(youngPerson, currentCustomer){
      // check if the previous age is greater than the current age
        if(youngPerson.age >= currentCustomer.age){
            
             return currentCustomer;
        }
        return youngPerson;
    });
    
    return youngster.name; 
};


//### 5: `averageBalance`
// - **Objective**: Find the average balance of all customers
// - **Input**: `Array`
// - **Output**: `Number`
// - **Constraints**:
var averageBalance = function(array){
    
//     var  total = _.reduce(array, function(previousCount, currerntCount) {
//         previousCount + currerntCount;
    
//   return total / array.length;
// },0);

var total = _.reduce(array,(acc, c) => acc + c.balance.replace(/\$|,/g, '') * 100, 0);
console.log(total, "Holla at cha king");

  var newToal = total / array.length;
  
  return newToal / 100;
  
};


// ### 6: `firstLetterCount`
// - **Objective**: Find how many customer's names begin with a given letter
// - **Input**: `Array`, `Letter`
// - **Output**: `Number`
// - **Constraints**:

var firstLetterCount = function(array, letter){
//Find how many customer's names begin with a given letter  
//use map function
//push elements of the customer at a particular index by name into the declared variable array
//use the map function
 
   var firstLetterArray = [];
    var count = 0;


    _.map(array, function(element, index, array){
        firstLetterArray.push(customers[index].name);
    });
_.map(firstLetterArray, function(element, index, array){
   if (firstLetterArray[index][0].toUpperCase() === letter.toUpperCase()){
count++;

   }
});
return count;
};


// - **Objective**: Find how many friends of a given customer have names that start with a given letter
// - **Input**: `Array`, `Customer`, `Letter`
// - **Output**: `Number`
//- **Constraints**:

var friendFirstLetterCount = function(array, customer, letter){
    // using reduce we can return a number 
return _.reduce(array, function(previous, current, index){
    // check if the current name is equal to the customer 
        if(current.name.toLowerCase() === customer.toLowerCase()){
            // if so reduce the current friends, loop through that array, and compame the names again
            return _.reduce(current.friends, function(previous, current, index){
                if(current.name[0].toLowerCase() === letter.toLowerCase()){
                    ++ previous;
                } else {
                    return previous;
                }
                    return previous; 
            }, 0);
        } else{
            return previous;
        }
    }, 0);
};

var friendsCount = function(array, name){
//Find the customers' names that have a given customer's name in their friends list    
// create two variables
// set one variable to an empty array
//set second variable to _.reduce function
// loop through arrary and set condition
// return customer's name with same friend

    var customersWithSameFriend = [];
    var customerCount = _.reduce(array,function(seed, element, index){
       
        for(var j = 0; j < element.friends.length; j++){
           

                if(name === element.friends[j].name){
                 
                  seed = element.name;
                customersWithSameFriend.push(seed);  
        }
        }
    } ); return customersWithSameFriend;
};



//Find the three most common tags among all customers' associated tags
//{output}: need a number of occurences
//three tags that are 'strings'. what can we use with reduce to give you a string and numbers?
// can't use just a string or a number
// use an object
//_.each doesn't return anything. but reduce does
//create a variable using the reduce function to reduce on the data that you want to reduce
// create an array of keys from the reduce object
//  create a variable to put the sorted keys.
// Where a, b sorts from high to low where b is high, keep the first 3 and slice the rest
       
var topThreeTags = function(array){
    let allTags = [];
    let newTags =  _.reduce(array,function(prev,curr,i){
      if(curr.tags !== undefined){
          allTags.push(curr.tags);
      }
      return  [].concat(...allTags);
    });
    let tags = _.reduce(newTags,function(prev,curr){
          if(prev[curr] === undefined){
              prev[curr] = 1;
          } else {
              prev[curr]++;
          } return prev;
    },{});
    let countArray = [];
    _.each(tags,function(count, word, object){
        countArray.push([word, count]);
    });
        countArray.sort(function(a,b){
        return b[1] - a[1];
    });
    let topThree = [];
    for(var i = 0; i < 3; i++){
        topThree.push(countArray[i][0]);
    } 
    return topThree;
};
   

var genderCount = function(array){
//Create a summary of genders
// create a variable using the reduce function
// set condition to separate genders into (male, female, transgender)
// return an object containing a count of each gender
   
    var genderObject = _.reduce(array, (genderLikeObject, customerElement) => {
        if(customerElement.gender === "male") {
           
            genderLikeObject.male ++;
           
        } else if(customerElement.gender === "female") {
            genderLikeObject.female ++;
        } else {
            genderLikeObject["non-binary"] ++;
        }
        return genderLikeObject;
    }, { male: 0,
    female: 0,
    "non-binary": 0});

   
return genderObject;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
