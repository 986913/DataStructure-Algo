/*
  Write a function called sumZero which accepts a sorted array of integers.
  The function should find the first pair where the sum is 0.
  return an array that includes both values that sum to 0 or undefined if a pair does not exist

  eg:
  sumZero([-3, -2, -1, 0, 1, 2, 3])      [-3, 3]
  sumZero([-2, 0, 1, 3])                 undefined
  sumZero([1, 2, 3])                     undefined
 */

/* 
    Time complexity - O(N)  
    space complexity - O(1)
*/

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum < 0) left++;
    else right--;
  }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([1, -2, 1, 2, -1]));
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));
