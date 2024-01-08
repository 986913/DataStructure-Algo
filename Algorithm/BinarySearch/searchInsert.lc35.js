/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 前提：数组有序 且无重复元素
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  /* difference is here: 分别处理如下四种情况
      target在数组所有元素之前  [0, -1]
      target等于数组中某一个元素  return middle;
      target插入数组中的位置 [left, right]，return  right + 1
      target在数组所有元素之后的情况 [left, right]， 因为是右闭区间，所以 return right + 1
  */
  return right + 1;
};
