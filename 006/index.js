/*
 * https://projecteuler.net/problem=6
 */

'use strict';

const max = 100;
let sumOfSquares = 0;
let sum = 0;
let squareOfSum = 0;
let diff = 0;

for (var i = 1; i < max + 1; i++) {
  sumOfSquares += i * i;
  sum += i;
}

squareOfSum = sum * sum;

diff = squareOfSum - sumOfSquares;

console.log(diff);
