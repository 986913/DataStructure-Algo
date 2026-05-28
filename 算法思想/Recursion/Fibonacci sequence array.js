/*
  Fibonacci sequence array
    Write a function getFibonacci(n), which takes an integer n as an input. 
    This function should return the array containing the first n numbers in the Fibonacci sequence.

    The Fibonacci sequence is a series of numbers where each number is the sum of the previous two numbers, 
    starting with 0 and 1. It is a famous mathematical concept that appears in nature, art, and many other fields. 
    The sequence has a unique mathematical property that makes it useful in many applications, including computer algorithms, finance, and cryptography.

Directions
  You can assume that the input n will always be a positive integer
  getFibonacci(1); // Output: [0]
  getFibonacci(2); // Output: [0, 1]
  getFibonacci(5); // Output: [0, 1, 1, 2, 3]
  getFibonacci(10); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/

/****************************** Recursion + memo ****************************************/
const getFibonacci = (n) => {
  let res = [];
  let memo = Array.from({ length: n - 1 }, () => 0);

  const helper = (number, memo) => {
    if (memo[number]) return memo[number];
    if (number === 0 || number === 1) {
      memo[number] = number;
      return number;
    }

    let sum = a + b;
    let a = helper(number - 1, memo);
    let b = helper(number - 2, memo);
    memo[number] = sum;
    return sum;
  };

  for (let i = 0; i < n; i++) {
    res.push(helper(i, memo));
  }

  return res;
};
