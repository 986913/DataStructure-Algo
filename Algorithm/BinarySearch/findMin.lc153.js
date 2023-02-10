/**
 * @param {number[]} nums
 * @return {number}
 */

/* -------------------Solution : 👍 Binary search. lc33🟡使用了此题为helper function ------------------ */

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    //注意是和nums[right]比较
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
};
