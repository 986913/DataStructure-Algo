/**
 * @param {number[]} nums
 * @return {number}
 */
//解法1：  Brute force
var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i];
  }
  return nums[nums.length - 1];
};

//解法2： 异或
var singleNonDuplicate = function (nums) {
  let result = 0;
  nums.forEach((n) => (result ^= n));
  return result;
};

//解法3： 二分法
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid % 2 === 1) mid--; // 如果奇数位置要变化成偶数位置

    if (nums[mid] === nums[mid + 1]) {
      // 如果连续两个相等，说明单独的值在右边
      left = mid + 2;
    } else {
      // 否则刚刚好或者在左边，所以不敢乱动right，只能直接等于mid
      right = mid;
    }
  }
  return nums[left];
};
