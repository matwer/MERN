// Original 
Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
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
console.log(`Original took ${performance.now() - start} milliseconds to run`);

// Tweaked
Number.prototype.tIsPrime = function() {
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
    if( tNum.tIsPrime() ) {
        tPrimeCount++;
    }
    tNum++;
}
console.log(`Tweaked: the 10,000th prime number is ${tNum-1}`);
console.log(`Tweaked took ${performance.now() - tStart} milliseconds to run`);

// RESUlTS: 
// Original took 42682.418399989605 miliiseconds to run
// Tweaked took 278.4641000032425 miliiseconds to run


// WHICH IS FASTER - i'm thinking iterative is faster
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.time("recursive fib ");
rFib(20);
console.timeEnd("recursive fib ");

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.time("recursive fib ");
iFib(20);
console.timeEnd("iterative fib ");

// RESUlTS: 
// iterative fib : 1.104ms
// iterative fib : 0.06ms

// REVERSING A STRING
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
console.time("reversing a string with splt(), reverse(), join() ");
const reversed = story.split("").reverse().join("");
console.timeEnd("reversing a string with splt(), reverse(), join() ");

// reversing a string with a for loop
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function reverseString(str) {
        let rvsStr = "";

        for (let i = str.length -1; i >=0; i--) {
                rvsStr += str[i];
        }
        return rvsStr;
}

console.time("reversing a string with a for loop ");
const reversed2 = reverseString(story);
console.timeEnd("reversing a string with a for loop ");

// reversing a string with recursion
// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
function recRvsStr(str) {
        return (str === '') ? '' : recRvsStr(str.substr(1)) + str.charAt(0);
}

console.time("reversing a string with recursion ");
const reversed3 = recRvsStr(story);
console.timeEnd("reversing a string with recursion ");

// RESUlTS: 
// reversing a string with splt(), reverse(), join() : 0.06ms
// reversing a string with a for loop : 0.06ms
// reversing a string with recursion : 0.107ms
