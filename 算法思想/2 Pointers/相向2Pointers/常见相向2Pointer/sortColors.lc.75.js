/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*********************  Solution: Two pointers 👍 **********************/
var sortColors = function (nums) {
  let left = 0; // left指针左边都是0 -> red
  let right = nums.length - 1; // right指针右边都是2 -> blue
  let curr = 0; //left-right之间的用curr表示，都是1 -> white

  while (curr <= right) {
    if (nums[curr] === 0) {
      //当前位置不正确，白球和红球换, 换回来的一定不是2, 因为之前left已经遍历过了
      [nums[curr], nums[left]] = [nums[left], nums[curr]];

      left++;
      curr++;
    } else if (nums[curr] === 1) {
      // 当前白球位置正确
      curr++;
    } else if (nums[curr] === 2) {
      //当前位置不正确，白球和篮球换， 有可能换回来的是0, 所以不能left++
      [nums[curr], nums[right]] = [nums[right], nums[curr]];
      right--;
    }
  }
};
