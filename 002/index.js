/*
 * https://projecteuler.net/problem=2
 */

'use strict';

let sum = 0;

function fibo (a, b) {
  if (a < 4000000 && b < 4000000) {
    if (b % 2 === 0) {
      sum += b;
    }
    fibo(b, a + b);
  }
}

fibo(1, 2);

console.log(sum);
