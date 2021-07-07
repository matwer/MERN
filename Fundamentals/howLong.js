// Original 
Number.prototype.isPrime = function() {
    for( let i=2; i < this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}

console.log(`Original: the 10,000th prime number is ${num-1}`);
console.log(`Original took ${performance.now() - start} ms to run`);

// Tweaked
Number.prototype.tweakedPrime = function() {
    for( let i=2; i <= Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

const tStart = performance.now();
let tPrimeCount = 0;
let tNum = 2; // for math reasons, 1 is considered prime
while( tPrimeCount < 1e4 ) {
    if( tNum.tweakedPrime() ) {
        tPrimeCount++;
    }
    tNum++;
}
console.log(`Tweaked: the 10,000th prime number is ${tNum-1}`);
console.log(`Tweaked took ${performance.now() - tStart} ms to run`);

// RESUlTS: 
// The 10,000th prime number is 104729
// Original took 46575 miliiseconds to run
// Tweaked took 293 miliiseconds to run

const hunStart = performance.now();
let hunPrimeCount = 0;
let hunNum = 2; // for math reasons, 1 is considered prime
while( hunPrimeCount < 1e5 ) {
    if( hunNum.tweakedPrime() ) {
        hunPrimeCount++;
    }
    hunNum++;
}
console.log(`Tweaked: the 100,000th prime number is ${hunNum-1}`);
console.log(`Tweaked took ${performance.now() - hunStart} milliseconds to run`);

// RESUlTS: 
// The 100,000th prime number is 1,299,709
// Tweaked took 9057 ms to run

const milStart = performance.now();
let milPrimeCount = 0;
let milNum = 2; // for math reasons, 1 is considered prime
while( milPrimeCount < 1e6 ) {
    if( milNum.tweakedPrime() ) {
        milPrimeCount++;
    }
    milNum++;
}
console.log(`Tweaked: the 1,000,000th prime number is ${milNum-1}`);
console.log(`Tweaked took ${performance.now() - milStart} milliseconds to run`);

// RESUlTS: 
// The 1,000,000th prime number is 15.485,863
// Tweaked took 308492 ms to run

//********************************************************************************

// WHICH IS FASTER - i'm thinking iterative is faster
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.time("recursive fibonacci took");
console.log("20th fibonacci is " + rFib(20));
console.timeEnd("recursive fibonacci took");

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.time("iterative fibonacci took");
console.log("20th fibonacci is " + iFib(20));
console.timeEnd("iterative fibonacci took");

// RESUlTS: 
// 20th fibonacci is 6765
// recursive fibonacci took 1.452 ms
// iterative fibonacci took 0.127 ms

//********************************************************************************

// REVERSING A STRING
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
console.time("reversing a string with splt(), reverse(), join() took");
const reversed = story.split("").reverse().join("");
console.timeEnd("reversing a string with splt(), reverse(), join() took");

// reversing a string with a for loop
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function reverseString(str) {
        let rvsStr = "";

        for (let i = str.length -1; i >=0; i--) {
                rvsStr += str[i];
        }
        return rvsStr;
}

console.time("reversing a string with a for loop took");
const reversed2 = reverseString(story);
console.timeEnd("reversing a string with a for loop took");

// reversing a string with recursion
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function recRvsStr(str) {
        return (str === '') ? '' : recRvsStr(str.substr(1)) + str.charAt(0);
}

console.time("reversing a string with recursion took");
const reversed3 = recRvsStr(story);
console.timeEnd("reversing a string with recursion took");

// RESUlTS: 
// reversing a string with splt(), reverse(), join() : 0.07ms
// reversing a string with a for loop : 0.137ms
// reversing a string with recursion : 0.23ms
