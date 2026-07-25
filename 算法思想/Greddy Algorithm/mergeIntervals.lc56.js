/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * -------------------------- Solution 1: Greedy ----------------------------------
 * 我按照左边界排序，排序之后局部最优：每次合并都取最大的右边界，这样就可以合并更多的区间了，
 * 整体最优：合并所有重叠的区间。
 * Time: O(n log n)
 * Space: O(n)
 */

function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]]; // 初始化 res数组

  for (let i = 1; i < intervals.length; i++) {
    let prev = res[res.length - 1]; // --> 注意prev是从result中取的。。
    let curr = intervals[i];
    if (curr[0] <= prev[1]) {
      // curr的左边界<=prev的右边界，则说明overlap了。那就得合并取最大的右边界
      res[res.length - 1] = [prev[0], Math.max(prev[1], curr[1])];
    } else {
      // curr的左边界 > prev的右边界，说明无overlap，直接更新res
      res.push(curr);
    }
  }

  return res;
}

/**
 * -------------------------- Solution 2 （优化版）: Greedy + Two Pointer ---------------------------
 * Time: O(n log n)
 * Space: O(1)
 * 一个快指针 i（负责在前面探路、读取新数据）。
 * 一个慢指针 writeIndex（负责在后面稳扎稳打、覆盖写入好数据）。
 */
function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  let writeIdx = 0;
  for (let i = 1; i < intervals.length; i++) {
    // 注意：永远拿当前元素 i，去和写指针 writeIndex 指向的元素比！
    let prev = intervals[writeIdx];
    let curr = intervals[i];
    // overlap
    if (curr[0] <= prev[1]) {
      intervals[writeIdx] = [prev[0], Math.max(prev[1], curr[1])];
    } else {
      // 无overlap，直接更新writeIdx 且写入当前区间
      writeIdx++;
      intervals[writeIdx] = curr;
    }
  }

  // 截断原数组尾部不需要的部分
  intervals.length = writeIdx + 1;
  return intervals;
}
