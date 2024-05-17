/**
 * @param {number[]} nums
 * @return {number}
 */

/* ------------ Solution 2: 👍 Binary search LC33, 81变形题 ------------------ */
/**
  https://www.jiakaobo.com/leetcode/153.%20Find%20Minimum%20in%20Rotated%20Sorted%20Array.html
  1. 第1步判断mid在哪个区？ -- 使用right作为标记，看mid在哪边 (和left比较也可以的。但是需要先判断一下是否是排序数组, 麻烦)
  2. 得到left, right后，比较得出小的那个
 */

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    // 注意是和nums[right]进行比较。  nums[mid]>nums[right]说明mid在上半段, 那么最小值在下半段
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    }
    //  nums[mid]<nums[right]说明mid在下半段， 那最小值要么是mid，要么在下半段中mid的左半段里
    else if (nums[mid] < nums[right]) {
      right = mid;
    }
  }

  return nums[left];
};
