/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */

/*********************  Solution: Two pointers 👍 LC88,21, 977变形题 **********************/
var sortTransformedArray = function (nums, a, b, c) {
  let result = [];
  let index = a > 0 ? nums.length - 1 : 0; //for result; 如果开口朝上，越靠近对称轴函数值越小. 如果开口朝下，越靠近对称轴函数值越大

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let transformed_left = quadratic(a, b, c, nums[left]);
    let transformed_right = quadratic(a, b, c, nums[right]);
    if (a > 0) {
      // 如果开口朝上，越靠近对称轴函数值越小
      if (transformed_left > transformed_right) {
        result[index] = transformed_left;
        left++;
      } else {
        result[index] = transformed_right;
        right--;
      }
      index--;
    } else {
      // 如果开口朝下，越靠近对称轴函数值越大
      if (transformed_left > transformed_right) {
        result[index] = transformed_right;
        right--;
      } else {
        result[index] = transformed_left;
        left++;
      }
      index++;
    }
  }

  return result;
};
// helper function:
const quadratic = (a, b, c, x) => a * Math.pow(x, 2) + b * x + c;
