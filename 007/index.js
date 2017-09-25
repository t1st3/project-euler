/*
 * https://projecteuler.net/problem=7
 */

'use strict';

let primeArray = [2, 3, 5, 7, 11, 13];
const maxPrime = 10001;
let thePrime = 13;

function isDivisible (num, divisor) {
  return (num % divisor === 0);
}

function isPrime (n) {
  let count = 0;
  primeArray.forEach(function (e) {
    if (isDivisible(n, e) === false) {
      count += 1;
    }
  });
  if (count === primeArray.length) {
    return true;
  }
  return false;
}

let i = 13
while (i < 10000000000) {
  if (isPrime(i) === true) {
    thePrime = i;
    primeArray.push(i);
    if (primeArray.length === maxPrime) {
      break;
    }
  }
  i++;
}

console.log(thePrime);
