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

/* ------------ Solution 2: 👍 Binary search LC153, 81变形题 ------------------ */
/*  
  https://www.jiakaobo.com/leetcode/33.%20Search%20in%20Rotated%20Sorted%20Array
    1. 第1步判断mid在哪个区？ 
    2. 第2步判断target在哪个位置？ 
    3. 第3步返回结果 
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;

    // 1.1: mid在上半区
    if (nums[left] <= nums[mid]) {
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

  if (nums[left] == target) return left;
  else if (nums[right] == target) return right;
  else return -1;
};
