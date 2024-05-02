/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*******************************Solution 1: 前缀和数组 + HashTable *********************************************
  核心思路: 
*/
var maxSubArrayLen = function (nums, k) {
  let maxLen = 0;

  let curSum = 0;
  let map = new Map(); // 存储前缀和 及其对应的下标

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];

    if (curSum === k) {
      maxLen = i + 1;
    } else if (map.has(curSum - k)) {
      maxLen = Math.max(maxLen, i - map.get(curSum - k));
    }

    if (!map.has(curSum)) {
      map.set(curSum, i);
    }
  }

  return maxLen;
};
