// var exampleFunction = function(message){
//     console.log(message);
// };

// exampleFunction( "Hello from exampleFunction" );

// function parentFunction (callback) {
//     callback( "information from the parent function" );
// } 

// parentFunction (function(message) { 
//     console.log( message );
// });

// parentFunction (exampleFunction);

const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it 
console.log(arr);


const arr2 = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`
console.log(arr2);

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

console.log(groceryList);
console.log("\nadd thyme to the list");
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
console.log(needThyme);
// const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];
console.log("\ngot thyme ");
console.log(gotTheThyme);

// use slice to remove celery from the list
const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
console.log("\nremove the celery");
console.log(notNeceCelery);

// using a callback fcn to sort the list of ingredients by name
console.log("\nusing a callback function to sort the list of ingredients");
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );
console.log(sortedGroceries);

// sort() maniopulates the original array, so it won't work on a frozen object
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); // this will throw an error 

// but we can use the spread operator to make a copy and sort the copy
const sortedItems = [...items].sort();
console.log("\nSorting a frozen object...\noriginal list...");
console.log(items);
console.log("sorted list...");
console.log(sortedItems);

// sorting #'s in JS
const points = [40, 100, 1, 5, 25, 10];
console.log("\nSorting numbers...\npoints...");
console.log(points);
console.log("sorting...");
console.log(points.sort(function(a, b){return a-b}));

// currying queries
function ninjaBelt(ninja, beltColor){
    console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
};
ninjaBelt('Eileen', 'black');

function ninjaBeltCurried(ninja){
    return function belt(beltColor){ //note the closure here!
        console.log("\nCurried: Ninja "+ ninja + " has earned a " + beltColor +" belt.");
    }
}

ninjaBeltCurried('Eileen')('black'); //note the double invocation here

// closures
// here we have a function called "Outer"
function outer() {
    let count = 0; // this is a count variable that is scoped to the function
    // there is an inner function that increments count and then console logs it
    function inner() {
        count++;
        console.log(count);
    }
    // we're returning the inner function
    return inner;
}

const counter = outer();   // counter is the function that we returned from calling the outer function
counter();                 // this will console.log "1"
counter();                 // this will console.log "2"
counter();                 // this will console.log "3"
counter();                 // this will console.log "4"

// so that means that the count variable still exists! 
// and it is being changed even though we aren't inside of the Outer function!
// can we access count out here?
// console.log(count); // doesn't work!







