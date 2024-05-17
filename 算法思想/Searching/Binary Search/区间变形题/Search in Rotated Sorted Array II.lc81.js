/* ------------ Solution : 👍 Binary search LC33变形题 ------------------ */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return true; // 找到了

    // 与LC33题不同点在这 ---> 去重：
    if (nums[mid] === nums[right]) right--;
    else if (nums[mid] === nums[left]) left++;
    else if (nums[mid] >= nums[right]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (nums[mid] < nums[right]) {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  //有可能在退出循环后, left或right其中一个指向target，需要额外的检查来确定返回哪个索引
  if (nums[left] === target || nums[right] === target) return true;
  return false; // can't find target
};
