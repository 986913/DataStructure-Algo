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
 * 要记住：
    1. 如何判断mid在上下区的条件: 👉注意是和nums[right]进行比较 
        - mid在上半区：nums[mid] >= nums[right]
        - mid在下半区：nums[mid] <  nums[right]
    2. 第三步记得额外检查
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid; // 找到了

    // 1.1: mid在上半区: 注意nums[mid]是和👉nums[right]进行比较
    if (nums[mid] >= nums[right]) {
      // 2.1:   target在[left, mid]之间
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        // 2.2: target在[mid, right]之间
        left = mid + 1;
      }
    }

    //1.2: mid在下半区: 注意nums[mid]是和👉nums[right]进行比较
    else if (nums[mid] < nums[right]) {
      // 2.3:  target在[mid, right]之间
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        // 2.4: target在[left, mid]之间
        right = mid - 1;
      }
    }
  }

  //有可能在退出循环后, left或right其中一个指向target，需要额外的检查来确定返回哪个索引
  if (nums[left] === target) return left;
  if (nums[right] === target) return right;
  return -1; // can't find target
};
