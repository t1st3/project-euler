/*
 * https://projecteuler.net/problem=10
 */

'use strict';

let primeArray = [2];
const maxNum = 2000000;
let addition = 2;

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

let i = 2;
while (i < maxNum) {
  if (isPrime(i) === true) {
    addition += i;
    primeArray.push(i);
    console.log(i, addition);
  }
  i++;
}

console.log(addition);
