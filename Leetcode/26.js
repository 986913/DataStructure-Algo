/**
 * @param {number[]} nums
 * @return {number}
 */
//注意：牵扯到数组里面 “循环”和“删除元素”时候， 最好倒着循环！！！
var removeDuplicates = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
    }
  }
};

/**
 * 2 pointer
 */
var removeDuplicates = function (nums) {
  if (nums == null) return 0;

  let slow = 1;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
};
