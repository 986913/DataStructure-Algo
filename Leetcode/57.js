/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
  let arrays = [...intervals, newInterval];
  return merge(arrays);
};

const merge = function (intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  intervals.forEach((item) => {
    if (result.length === 0) {
      result.push(item);
    } else {
      let last = result[result.length - 1];

      if (item[0] <= last[1]) {
        //前一个区间的end和后一个区间的start有交集了
        last[1] = Math.max(last[1], item[1]);
      } else {
        //前一个区间的end和后一个区间的start没交集
        result.push(item);
      }
    }
  });

  return result;
};
