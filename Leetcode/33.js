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

/* Main function:
  1. find the smallest element's index by using binary search
  2. once you find the pivot idx, then decide search range, neither 0---privotIdx,  OR privotIdx----nums.length-1
  3. after search range confirmed then apply regular binary search again
*/
var search = function (nums, target) {
  if (!nums.length) return -1;

  let start = findPivot(nums); //1;

  let left = 0;
  let right = nums.length - 1;

  if (nums[start] <= target && target <= nums[right]) {
    left = start; //2;  search range: privotIdx----nums.length-1
  } else {
    right = start; //2;  search range:  0---privotIdx
  }

  //3.  regular binary search agian
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

// helper function: use binary search to find smallest element's index
const findPivot = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    //注意是和nums[right]比较
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid; //nums[mid]<= nums[right]
    }
  }

  return left;
};
