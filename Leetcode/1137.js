/**
 * @param {number} n
 * @return {number}
 */



let memoization = [0, 1, 1]
  
var tribonacci = function(n) {
  if (memoization[n] != undefined) return memoization[n];
  memoization[n] = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)
  return memoization[n]
};

