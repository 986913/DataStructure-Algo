/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let p0 = 0; // p0指针左边都是0
  let p2 = nums.length - 1; // p2指针右边都是2
  let curr = 0; // p0-p2之间的用curr表示，都是1

  while (curr <= p2) {
    if (nums[curr] === 0) {
      [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
      curr++;
      p0++;
    } else if (nums[curr] === 1) {
      curr++;
    } else {
      [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
      p2--;
    }
  }
};
