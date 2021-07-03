console.log(example);
let example = "I'm the example!";    
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle is assigned the string haystack
// test() is undefined
// function test() won't rung because it was run before it was declared

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan is assigned the value super cool
// print function is hoited
// brendan is a global variable and gets assigned to'only okay' within print()
// console log prints 'super cool' - the print() function is never called

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food is hoisted and assigned the value chicken
// 'food' is printed to the console: WRONG - it never prints becuase eat()
// is called before it's declared resulting in a syntax error
// eat() is undefined sicne it was called before it was decared

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// undefined - mean() is called before it's declared resulting in a syntax error

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// console.log(genre) is undefined

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo isn't declared properly reuslting in a syntax error: WRONG - JS is loosely
// typed so it assigns the string "san jose" to dojo and prints san jose to the screen
// then it prints undefined since learn() is called before it's declared

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// undefined - makeDojo is called before it's defined
