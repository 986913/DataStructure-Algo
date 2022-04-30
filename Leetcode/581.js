/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function (nums) {
  // 将排序后的数组与原始数组进行比较，分别找出不一样的最左和最右的索引
  let sorted = [...nums].sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  while (i < sorted.length) {
    if (sorted[i] !== nums[i]) break;
    else i++;
  }
  while (j > 0) {
    if (sorted[j] !== nums[j]) break;
    else j--;
  }

  return j > i ? j - i + 1 : 0;
};
