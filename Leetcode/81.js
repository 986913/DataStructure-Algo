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

    if (nums[mid] === target) return true;

    // 去重：
    if (nums[mid] === nums[right]) {
      right--;
    } else if (nums[mid] === nums[left]) {
      left++;
    }

    // 1.1: mid在上半区
    else if (nums[left] <= nums[mid]) {
      // 2.1: target处于上半区内，且target处于left和mid之间
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        // 2.2: target处于上半区内，且target处于mid和right之间
        left = mid + 1;
      }
    }
    //1.2: mid在下半区
    else if (nums[mid] <= nums[right]) {
      // 2.3: target处于下半区内，且target处于mid和right之间
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        // 2.4: target处于下半区内，且target处于left和mid之间
        right = mid - 1;
      }
    }
  }

  if (nums[left] == target || nums[right] == target) return true;
  else return false;
};
