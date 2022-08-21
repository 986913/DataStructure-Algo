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
/*
const minSubArrayLen = (s, nums) => {
  let result = Infinity; // 最终的结果
  let sum = 0; // 子序列的数值之和
  let subLength = 0; // 子序列的长度

  for (let i = 0; i < nums.length; i++) { // 设置子序列起点为i
      sum = 0;
      for (let j = i; j < nums.length; j++) { // 设置子序列终止位置为j
          sum += nums[j];
          if (sum >= s) { // 一旦发现子序列和超过了s，更新result
              subLength = j - i + 1; // 取子序列的长度
              result = Math.min(result, subLength);
              break; // 因为我们是找符合条件最短的子序列，所以一旦符合条件就break
          }
      }
  }
  // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
  return result == Infinity ? 0 : result;
}
*/

// 双指针/sliding window 解法:
var minSubArrayLen = function (n, arr) {
  let windowSum = 0;
  let windowStartIdx = 0;
  let minLen = Infinity;

  for (let windowEndIdx = 0; windowEndIdx < arr.length; windowEndIdx++) {
    windowSum += arr[windowEndIdx];

    //注意是while
    while (windowSum >= n) {
      minLen = Math.min(minLen, windowEndIdx - windowStartIdx + 1);
      windowSum -= arr[windowStartIdx]; // 别忘了update sum
      windowStartIdx += 1;
    }
  }
  return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLenV2([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLenV2([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLenV2([3, 1, 7], 100));
console.log(minSubArrayLenV2([2, 1, 6, 5, 4], 9));
