/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const findFirstPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  let index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (target <= nums[mid]) {
      //从模板的<变成了<=
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    if (target === nums[mid]) {
      index = mid;
    }
  }

  return index;
};

const findLastPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  let index = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (target >= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    if (target === nums[mid]) {
      index = mid;
    }
  }

  return index;
};

var searchRange = function (nums, target) {
  let result = [];
  result[0] = findFirstPosition(nums, target);
  result[1] = findLastPosition(nums, target);
  return result;
};
