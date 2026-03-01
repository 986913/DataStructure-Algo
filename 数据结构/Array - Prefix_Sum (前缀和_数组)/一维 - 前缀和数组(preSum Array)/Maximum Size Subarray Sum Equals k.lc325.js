/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*******************************Solution 1: 前缀和数组 + HashTable *********************************************
  核心思路: 2 sum hastable 解法的变体而已
*/
var maxSubArrayLen = function (nums, k) {
  let maxLen = 0;

  let prefixSum = 0;
  let map = new Map(); // key is prefixSum, value is first index that each key was seen.

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixSum === k) {
      maxLen = i + 1;
    }
    //means there is a subarray with sum k ending at the current i, the length will be i - map[prefixSum - k]
    else if (map.has(prefixSum - k)) {
      maxLen = Math.max(maxLen, i - map.get(prefixSum - k));
    }

    if (!map.has(prefixSum)) {
      map.set(prefixSum, i);
    }
  }

  return maxLen;
};
