/*
 * https://projecteuler.net/problem=9
 */

'use strict';

let a = 0;
let b = 0;
let c = 0;
let product = 0;

for (c = 0; c < 1000; c++) {
  for (b = 0; b < 1000; b++) {
    for (a = 0; a < 1000; a++) {
      if ((a + b + c === 1000) && (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) && a < b && b < c) {
        product = a * b * c;
      }
    }
  }
}

console.log(product);
