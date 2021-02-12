/* 
  write a function called maxSubarraySum which accpet an array of integers and a number called n.
  the function should calculate the maximum sum of n consecutve elements in the array

  eg:
  maxSubarraySum([1,2,5,2,8,1,5], 2)     10
  maxSubarraySum([1,2,5,2,8,1,5], 4)     17
  maxSubarraySum([4,2,1,6],       1)     6
  maxSubarraySum([4,2,1,6,2],     4)     13
  maxSubarraySum([],              4)     null
*/

/* Native solution:  nested loop

const maxSubarraySum = (array, n) => {
  if (n > array.length) return null;

  let max = -Infinity;

  for (let i = 0; i < array.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += array[i + j];
    }
    if (temp > max) max = temp;
  }
  return max;
};

*/





/* Sliding window solution: time complexity O(N) */
const maxSubarraySum = (array, n) => {
  if (n > array.length) return null;

  let max = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    max += array[i];
  }

  tempSum = max;

  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i]; /* 这里是重点 */
    max = Math.max(tempSum, max);
  }

  return max;
};

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
