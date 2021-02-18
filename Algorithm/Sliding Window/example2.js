/*
write a function called minSubArrayLen which accepts two parameters: an array of positive integers and a positive interger
this function should return the minimal lenght of a contiguous subarray of which the sum is greater than or equal to the integer passed tp the function
if there isn't one, return 0 instead

eg:
minSubArrayLen([2,3,1,2,4,3],                    7)         2 --> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4],                      9)         2 --> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],    52)         1 --> because [62] is the smallest subarray
*/

// 1. simple solution: doueble for-loop:  O(n^2)
const minSubArrayLen = (arr, n) => {
  /*
  if (!arr.length) return 0
  window increases from 1 to arr.length - 1
  for each window,
    sum = 0;
    sum initial window
    check that sum >= n, if so return window;
    loop from j = window to arr.length
      add arr[j], subtract arr[j - window] to sum
      check that sum >= n, if so return window;
  return 0
  */

  if (!arr.length) return null;
  let sum = 0;
  for (let window = 1; window < arr.length; window++) {
    for (let i = 0; i < window; i++) sum += arr[i];

    if (sum >= n) return window;

    for (let j = window; j < arr.length; j++) {
      sum = sum + arr[j] - arr[j - window];
      if (sum >= n) return window;
    }
  }
  return 0;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen([3, 1, 7], 100));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));
