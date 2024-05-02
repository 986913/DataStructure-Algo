/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
/**************************** Solution 1: Two pointer: 没明白 ***************************************/
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  let count = 0;
  let start = -1;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    //if element is greater then right
    if (num > right) start = end = i;
    //if element is in range
    else if (left <= num) end = i;

    //updating count
    count += end - start;
  }
  return count;
};
