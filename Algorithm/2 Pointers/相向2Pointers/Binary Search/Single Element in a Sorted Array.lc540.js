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

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    // 如果奇数位置要变化成偶数位置
    if (mid % 2 === 1) mid--;

    // 如果连续两个相等，说明单独的值在右边
    if (nums[mid] === nums[mid + 1]) {
      left = mid + 2; // 注意是+2
    } else {
      // 如果连续两个不相等 说明单独的值在右边
      right = mid - 1;
    }
  }
  return nums[left];
};
