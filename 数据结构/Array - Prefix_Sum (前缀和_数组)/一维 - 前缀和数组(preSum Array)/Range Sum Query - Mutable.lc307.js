/*******************************Solution 1: 前缀和数组 *********************************************
  核心思路: new一个新的数组preSumArr出来，preSumArr[i]记录nums[0..i-1]的累加和
*/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.preSumArr = new Array(this.nums.length + 1).fill(0);
  for (let i = 1; i < this.preSumArr.length; i++) {
    this.preSumArr[i] = this.preSumArr[i - 1] + this.nums[i - 1];
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
// 这里用时太长 O(N)
NumArray.prototype.update = function (index, val) {
  let diff = val - this.nums[index];
  this.nums[index] = val;

  for (let i = index + 1; i < this.preSumArr.length; i++) {
    this.preSumArr[i] += diff;
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

/*******************************Solution 2: Segment Tree *********************************************
 */
