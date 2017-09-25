/*
 * https://projecteuler.net/problem=1
 */

'use strict';

let i = 0;
let sum = 0;

// test each number from 0 to 1000 (1000 not included)
for (i = 0; i < 1000; i++) {
  // test if multiple of 3 or multiple of 5
  if ((i % 3 === 0) || (i % 5 === 0)) {
    sum += i;
  }
}

console.log(sum);
