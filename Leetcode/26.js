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
 * 2 pointer 👍: 前提nums是sorted好的
 */
var removeDuplicates = function (nums) {
  if (nums == null) return 0;

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1; //这个返回的是长度
  // arr.splice(slow + 1) //这个返回的是in place去重后的数组
};
