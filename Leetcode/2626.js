/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
/******************* Solution 1: 这道题其实考的是手写Array.prototype.reduce *******************/
var reduce = function (nums, fn, init) {
  let startIdx = 0;
  let acc = init;
  for (let i = startIdx; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  return acc;
};
//没有initialValue时，acc是arr[0]元素， cur是arr[1]元素,  startIndex是1
// 有initialValue时，acc是initialValue，cur是arr[0]元素， startIndex是0

/******************* Solution 2: 直接使用build in reduce - 不推荐！ *******************/
var reduce = function (nums, fn, init) {
  return nums.reduce((acc, cur) => fn(acc, cur), init);
};
