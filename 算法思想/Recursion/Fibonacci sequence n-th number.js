/*
  Fibonacci sequence n-th number
    Write a function getFibonacciNth(n), which takes an integer n as an input. 
    This function should return the n-th number in the Fibonacci sequence.

Directions
  You can assume that the input n will always be a positive integer.
  getFibonacciNth(1); // Output: 0
  getFibonacciNth(2); // Output: 1
  getFibonacciNth(5); // Output: 3
  getFibonacciNth(10); // Output: 34
*/

/****************************** Recursion + memo ****************************************/
const getFibonacciNth = (n) => {
  if (n <= 0) return 0;
  let memo = Array.from({ length: n }, () => undefined);

  const helper = (num, memo) => {
    if (memo[num] !== undefined) return memo[num];
    if (num === 0 || num === 1) return num;

    let sum = helper(num - 1, memo) + helper(num - 2, memo);
    memo[num] = sum;
    return sum;
  };
  return helper(n - 1, memo); // note: 输入是 1-indexed，但 helper 是 0-indexed 的, 所以要减 1
};
