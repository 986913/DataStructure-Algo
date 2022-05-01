/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. 先Sort 后2pointers
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

//2. 直接2pointers

var findUnsortedSubarray = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  // find the first number out of sorting order from the beginning
  while (start < nums.length - 1 && nums[start] <= nums[start + 1]) {
    start++;
  }
  if (start === nums.length - 1) return 0; // if the array is sorted
  // find the first number out of sorting order from the end
  while (end > 0 && nums[end] >= nums[end - 1]) {
    end--;
  }

  let subarrayMax = -Infinity,
    subarrayMin = Infinity;

  for (k = start; k < end + 1; k++) {
    subarrayMax = Math.max(subarrayMax, nums[k]);
    subarrayMin = Math.min(subarrayMin, nums[k]);
  }

  // extend the subarray to include any number which is bigger than the minimum of the subarray
  while (start > 0 && nums[start - 1] > subarrayMin) {
    start -= 1;
  }
  // extend the subarray to include any number which is smaller than the maximum of the subarray
  while (end < nums.length - 1 && nums[end + 1] < subarrayMax) {
    end += 1;
  }

  return end - start + 1;
};
