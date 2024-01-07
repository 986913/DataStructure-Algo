/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
};

/* 2 pointers 👍 */
var sortedSquares = function (nums) {
  let result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftSquared = Math.pow(nums[left], 2);
    const rightSquared = Math.pow(nums[right], 2);

    if (leftSquared < rightSquared) {
      result.unshift(rightSquared);
      right--;
    } else {
      result.unshift(leftSquared);
      left++;
    }
  }

  return result;
};
