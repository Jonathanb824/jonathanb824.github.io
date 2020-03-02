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
firstLetterCount(customers, 'D');

var friendFirstLetterCount = (array, customer, letter) => {
    //how many friends of a given customer have names that start with a given letter
    //output is a number, so seed is a number
    //access the names of friends in customer list
    //test to see if first letter is strictly equal to given letter
    //if true, then increment count by 1
    //loop through Customer object and access names of friends, add to friendsArray
    //create a friends Array
   
        let nameOfCustomer = customer;
       
//loop through the customer array and access the customer object, test to find given customer object
        let givenCustomer;
         _.each(array, customer => {
            if(customer.name === nameOfCustomer) {
                givenCustomer = customer;
            }
        });

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



var topThreeTags = function(array){
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
       

   
    var tagCount = _.reduce(array, (myObj, custObj) => {
        _.each(custObj.tags, function(tagStr){
             
            if(myObj[tagStr] === undefined){
                 
                myObj[tagStr] = 1;
           
            } else{
               
                myObj[tagStr]++;
            }
        });
        return myObj;
       
    }, {});
   var arrayofKeys = Object.keys(tagCount);
   var sortedArr = arrayofKeys.sort(function (a, b){
       return tagCount[b] - tagCount[a];
   }).slice(0,3);
       
   

return sortedArr;
 
};

var genderCount;

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
