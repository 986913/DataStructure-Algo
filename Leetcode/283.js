/* force -brute：牵扯到数组里面 “循环”和“删除元素”时候， 最好倒着循环！！！*/
var moveZeroes = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(0);
      nums.splice(i, 1);
    }
  }
};

// 2 pointers
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] != 0) {
      let tmp = nums[fast]; //暂时存下来

      nums[fast] = nums[slow];
      nums[slow] = tmp;

      slow++;
    }
  }
  console.log(nums);
};
