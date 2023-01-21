/**
 * @param {number[][]} intervals
 * @return {number}
 */

/**
  我来按照左边界排序，从右向左记录非交叉区间的个数。最后用区间总数减去非交叉区间的个数就是需要移除的区间个数了。
  此时问题就是要求非交叉区间的最大个数。
  左边界排序之后，局部最优：优先选左边界小的区间，所以从右向左遍历，留给前一个区间的空间大一些，从而尽量避免交叉。全局最优：选取最多的非交叉区间。
  局部最优推出全局最优，试试贪心！


  难点一：一看题就有感觉需要排序，但究竟怎么排序，按左边界排还是右边界排。
  难点二：排完序之后如何遍历，如果没有分析好遍历顺序，那么排序就没有意义了。
  难点三：直接求重复的区间是复杂的，转而求最大非重复区间个数。
  难点四：求最大非重复区间个数时，需要一个分割点来做标记。
*/

var eraseOverlapIntervals = function (intervals) {
  let count = 1; //count 记录的是最大非重复区间的个数
  intervals.sort((a, b) => a[0] - b[0]); // 按照左边界升序排列;  [[1,2], [1,3], [2,3],[3,4]]
  let end = intervals[intervals.length - 1][0]; // 3

  for (let i = intervals.length - 2; i >= 0; i--) {
    if (intervals[i][1] <= end) {
      count++;
      end = intervals[i][0];
    }
  }

  return intervals.length - count;
};

// eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])  -->  1 ,  [1,3] can be removed and the rest of the intervals are non-overlapping.
