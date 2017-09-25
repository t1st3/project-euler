/*
 * https://projecteuler.net/problem=3
 */

'use strict';

let prime;

function getNextPrime(actualPrime, val) {
  let nextVal;
  while (actualPrime < val) {
    if (val % actualPrime === 0) {
      nextVal = val / actualPrime;
      break;
    }
    actualPrime++;
  }
  prime = actualPrime;
  if (nextVal) {
    getNextPrime(actualPrime, nextVal);
  }
}

getNextPrime(2, 600851475143);

console.log(prime);
