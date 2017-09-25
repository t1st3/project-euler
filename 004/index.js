/*
 * https://projecteuler.net/problem=4
 */

'use strict';

let palindrom = 0;

function isPalindromic (a, b) {
  let n = a * b;
  if (n < 100000) {
    return false;
  }
  var n1, n2, n3, n4, n5, n6;
  n1 = Math.floor(n / 100000);
  n2 = Math.floor((n - n1 * 100000) / 10000);
  n3 = Math.floor((n - n1 * 100000 - n2 * 10000) / 1000);
  n4 = Math.floor((n - n1 * 100000 - n2 * 10000 - n3 * 1000) / 100);
  n5 = Math.floor((n - n1 * 100000 - n2 * 10000 - n3 * 1000 - n4 * 100) / 10);
  n6 = Math.floor(n - n1 * 100000 - n2 * 10000 - n3 * 1000 - n4 * 100 - n5 * 10);
  if (n1 === n6 && n2 === n5 && n3 === n4) {
    if (n > palindrom) {
      palindrom = n;
    }
    return true;
  }
  return false;
}

for (var a = 99; a < 1000; a++) {
  for (var b = 99; b < 1000; b++) {
    isPalindromic(a, b);
  }
}

console.log(palindrom);
