/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [left_bound(nums, target), right_bound(nums, target)];
};

const left_bound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // 不断收缩右边界
    if (target <= nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  //共2种没找到target的case:  1.left一直往右走，越界了;    2.left一直往左走，到了index=0
  if (left >= nums.length || nums[left] !== target) {
    return -1;
  }

  return left; //找到了target, 返回的是left index
};

const right_bound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // 不断收缩左边界
    if (target >= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  //共2种没找到target的case:   1.right一直往左走，越界了   2.right一直往右走，到了数组最后一项
  if (right < 0 || nums[right] !== target) {
    return -1;
  }

  return right; //找到了target, 返回的是right index
};
