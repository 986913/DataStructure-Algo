/*******************************Solution 1: O(N)**********************************************/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += this.nums[i];
  }
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/*******************************Solution 2: 前缀和数组 - O(1) *********************************************
  核心思路: new一个新的数组preSumArr出来，preSumArr[i]记录nums[0..i-1]的累加和
*/
var NumArray = function (nums) {
  /*创造前缀和数组
      以nums = [-2, 0, 3, -5, 2, -1]为例，
其前缀和数组为 [0,-2, -2,1,,-4,-2, -3]
  */
  this.preSumArr = new Array(nums.length + 1).fill(0); //注意长度比nums多1
  for (let i = 1; i < this.preSumArr.length; i++) {
    this.preSumArr[i] = this.preSumArr[i - 1] + nums[i - 1];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preSumArr[right + 1] - this.preSumArr[left]; // 注意是right+1
};
