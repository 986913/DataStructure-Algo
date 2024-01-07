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

/** 2 pointer 👍 ： 前提nums是sorted好的  ----LC27变形题   */
var removeDuplicates = function (nums) {
  let slow = 1;
  let fast = 1;

  for (fast; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow; //这个返回的是长度
};
