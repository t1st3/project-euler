/*
 * https://projecteuler.net/problem=5
 */

'use strict';

let number = 0;
let maxDivisor = 20;

function isEvenlyDivisible (num, divisor) {
  return (num % divisor === 0);
}

function isEvenlyDivisibleByAll (num) {
  let i = 1;
  while (i < maxDivisor + 1) {
    if (isEvenlyDivisible(num, i) === false) {
      break;
    }
    i++;
  }
  if (i === maxDivisor + 1) {
    return true;
  }
  return false;
}

let j = 1;
while (j < 10000000000) {
  if (isEvenlyDivisibleByAll(j) === true) {
    number = j;
    break;
  }
  j++;
}

console.log(number);
