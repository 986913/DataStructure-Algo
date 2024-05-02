/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * --------------------------Greedy--------------------------------------
 * 我按照左边界排序，排序之后局部最优：每次合并都取最大的右边界，这样就可以合并更多的区间了，
 * 整体最优：合并所有重叠的区间。
 */

var merge = function (intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  intervals.forEach((curr) => {
    if (result.length === 0) {
      result.push(curr);
    } else {
      let prev = result[result.length - 1]; // --> 注意prev是从result中取的。。

      //curr的左边界<=prev的右边界，则说明overlap了。那就得合并取最大的右边界
      if (curr[0] <= prev[1]) {
        prev[1] = Math.max(prev[1], curr[1]);
      } else {
        // curr的左边界 >prev的右边界，说明无overlap，直接更新result
        result.push(curr);
      }
    }
  });

  return result;
};
