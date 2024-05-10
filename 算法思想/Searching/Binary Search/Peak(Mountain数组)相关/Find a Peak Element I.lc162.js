/**
 * @param {number[]} nums
 * @return {number}
 */

/*************************** 解法1： Linear search - O(n) : LC2951 变形题 ***************************/
const findPeaks = (mountain) => {
  let allPeaksIdx = [];

  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
      allPeaksIdx.push(i);
  }

  return allPeaksIdx[0];
};

/*************************** 解法2： Binary search - O(logN) ***************************/
var findPeakElement = function (nums) {
  if (nums.length <= 1) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[mid + 1]) {
      //当前中点的值 < 右侧邻居，说明当前处于上坡 peak在右边
      left = mid + 1;
    } else if (nums[mid] > nums[mid + 1]) {
      // 当前中点的值 > 右侧邻居，说明当前处于下坡，peak在左边
      right = mid - 1;
    } else {
      // 当前中点 === 右侧邻居，说明mid也可能是峰值，因此直接返回 mid。
      return mid;
    }
  }

  //找到了peak index就是left
  return left;
};
