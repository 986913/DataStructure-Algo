/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const left_bound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      right = mid - 1; //别返回，要收缩右边界
    }
  }

  //最后要检查left越界情况
  if (left >= nums.length || nums[left] !== target) return -1;

  return left;
};
const right_bound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1; //别返回，要收缩左边界
    }
  }

  //最后要检查left越界情况
  if (right < 0 || nums[right] !== target) return -1;

  return right;
};

var searchRange = function (nums, target) {
  let result = [];
  result[0] = left_bound(nums, target);
  result[1] = right_bound(nums, target);
  return result;
};
