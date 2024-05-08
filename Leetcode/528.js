/*********************************** Solution 1: 前缀和数组 + linear Search *****************************/
/**
 * @param {number[]} w
 * O(n)
 */
var Solution = function (w) {
  /*n 创造前缀和数组. 以nums = [1,3,2]为例 其前缀和数组为 [1,4,6] */
  this.preSumArr = new Array(w.length).fill(0);
  this.preSumArr[0] = w[0];
  for (let i = 1; i < w.length; i++) {
    this.preSumArr[i] = this.preSumArr[i - 1] + w[i];
  }
};

/**
 * @return {number}
 * O(n)
 */
Solution.prototype.pickIndex = function () {
  let target = Math.random() * this.preSumArr[this.preSumArr.length - 1];
  // run a linear search to find the target zone
  for (let i = 0; i < this.preSumArr.length; i++) {
    if (this.preSumArr[i] >= target) {
      return i;
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

/*********************************** Solution 2: 前缀和数组 + Binary Search *****************************/
/**
 * @param {number[]} w
 * O(n)
 */
var Solution = function (w) {
  /* 1. 创造前缀和数组. 以nums = [1,3,2]为例，其前缀和数组为 [1,4,6] */
  this.preSumArr = new Array(w.length).fill(0);
  this.preSumArr[0] = w[0];
  for (let i = 1; i < w.length; i++) {
    this.preSumArr[i] = this.preSumArr[i - 1] + w[i];
  }
};

/**
 * @return {number} - return一个随机index
 * O(log N)
 */
Solution.prototype.pickIndex = function () {
  let left = 0;
  let right = this.preSumArr.length - 1;

  //在[0, preSumArr最后一个元素]之间随机选一个数 （在[0, 6]之间随机选一个数 ）
  let target = Math.random() * this.preSumArr[this.preSumArr.length - 1];

  /* 2. Binary Search: 目标是找到第一个>=target的值在前缀和数组中的index */
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (this.preSumArr[mid] > target) {
      right = mid - 1;
    } else if (this.preSumArr[mid] < target) {
      left = mid + 1;
    } else {
      return mid; // this.preSumArr[mid]===target
    }
  }

  // 找到第一个大于等于target的位置
  if (this.preSumArr[left] >= target) return left;
  else return right;
};
