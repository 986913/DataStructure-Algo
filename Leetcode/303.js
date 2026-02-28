/*******************************Solution 1: O(N)**********************************************/
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

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
  this.array = [...nums];
  this.preSumArr = this.calPreSum();
  /*创造前缀和数组 以nums = [-2, 0, 3, -5, 2, -1]为例，
          其前缀和数组为  [ 0,-2, -2, 1,-4, -2, -3]
  */
};

NumArray.prototype.calPreSum = function () {
  let preSumArr = Array.from({ length: this.array.length + 1 }); //长度比array多1
  preSumArr[0] = 0; //第0项必须是0
  for (let i = 1; i < preSumArr.length; i++) {
    preSumArr[i] = preSumArr[i - 1] + this.array[i - 1]; //构造公式
  }
  return preSumArr;
};

// 区间和  = preSum右边累计 - preSum左边之前的累计
NumArray.prototype.sumRange = function (left, right) {
  return this.preSumArr[right + 1] - this.preSumArr[left];
};
