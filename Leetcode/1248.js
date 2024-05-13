/************************************** Solution 1: 暴力3层for循环 *****************************************/

/************************************** Solution 2: Sliding window *****************************************

滑动窗口主要思路：

  不断右移fast指针来扩大滑动窗口，使其包含 k 个奇数；

  若当前滑动窗口包含了 k 个奇数，则如下「计算当前窗口的优美子数组个数」:
    统计第 1 个奇数左边的偶数个数leftEvenCnt。   这 leftEvenCnt 个偶数都可以作为「优美子数组」的起点，因此起点的选择有 leftEvenCnt + 1 种（因为可以一个偶数都不取，因此别忘了+1）。
    统计第 k 个奇数右边的偶数个数rightEvenCnt 。 这 rightEvenCnt 个偶数都可以作为「优美子数组」的终点，因此终点的选择有 rightEvenCnt + 1 种（因为可以一个偶数都不取，因此别忘了+1）。
  
  因此「优美子数组」左右起点的选择组合数为 (leftEvenCnt + 1) * (rightEvenCnt + 1)。
*/

var numberOfSubarrays = function (nums, k) {
  let count = 0;
  let currNums = 0;

  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] % 2 != 0) currNums += 1;
    fast++;

    // 当前窗口刚好有K个奇数
    if (currNums === k) {
      // 计算第K个奇数右边的偶数个数
      let tmp = fast;
      while (nums[fast] % 2 === 0 && fast < nums.length) {
        fast++;
      }
      const rightNums = fast - tmp + 1;

      // 计算第一个奇数左边的偶数个数
      let leftNums = 0;
      while (nums[slow] % 2 === 0 && slow < nums.length) {
        slow++;
        leftNums++;
      }
      leftNums = leftNums + 1;
      count += rightNums * leftNums;

      // 此时 slow 指向的是第 1 个奇数，因为该区间已经统计完了，因此 slow 右移一位，currNums--
      slow++;
      currNums--;
    }
  }

  return count;
};
