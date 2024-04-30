/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*********************  Solution1: build-in method **********************/
var sortedSquares = function (nums) {
  return nums.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
};

/*********************  Solution2: Two pointers 👍 LC88,21, 360 变形题 **********************/
var sortedSquares = function (nums) {
  let result = [];
  let index = nums.length - 1; // for result;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index] = nums[left] * nums[left];
      left++;
    } else {
      result[index] = nums[right] * nums[right];
      right--;
    }
    index--; // <--- don't forget this line
  }

  return result;
};
