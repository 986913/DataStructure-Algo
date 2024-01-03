/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* ------------------ Solution 1: Linear search ------------------*/
var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }

  return -1;
};

/* ------------ Solution 2: 👍 Binary search, lc153🟡变形题（lc153就是此题的helper function..)------------------ */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const findSmallestEleIndex = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      //nums[mid]<= nums[right]
      right = mid;
    }
  }

  return left;
};

var search = function (nums, target) {
  if (!nums.length) return -1;

  /* 1. find the smallest element's index by using binary search */
  let privotIdx = findSmallestEleIndex(nums);
  let left = 0;
  let right = nums.length - 1;

  /* 2. once you find the pivot idx, then decide search range, neither 0---privotIdx or privotIdx----nums.length-1 */
  if (nums[privotIdx] <= target && target <= nums[right]) {
    left = privotIdx; // privotIdx ----> nums.length-1
  } else {
    right = privotIdx; // 0 ---> privotIdx
  }

  /* 3. after search range confirmed then apply regular binary search again */
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
