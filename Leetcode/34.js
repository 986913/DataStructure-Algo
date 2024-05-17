/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/********************************** Solution: Binary Search *************************************/
var searchRange = function (nums, target) {
  let result = [];
  result[0] = binarySearch_leftBound(nums, target);
  result[1] = binarySearch_rightBound(nums, target);
  return result;
};

const binarySearch_leftBound = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      // 不断收缩右边界
      right = mid - 1;
    }
  }

  /* 共2种没找到target的case:
    left向左走到头 || left向右走到头(越界了) 
  */
  if (arr[left] !== target || left >= arr.length) return -1; // can not find

  return left; //找到了target, 返回的是left index
};

const binarySearch_rightBound = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = left + 1;
    }
  }

  /* 共2种没找到target的case:
    right向左走到头(越界了) || right向右走到头
  */
  if (right < 0 || arr[right] !== target) return -1; // can not find

  return right; //找到了target, 返回的是right index
};
