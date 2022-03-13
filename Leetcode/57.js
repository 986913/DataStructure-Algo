/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

/*  Solution 1---------------------------------------------- */
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

/* Solution 2 ------------------------------------------------ */

const insert = function (intervals, newInterval) {
  if (intervals.length == 0) return [newInterval];

  let left = [],
    right = [],
    merged = [];

  let min, max;

  intervals.forEach((item) => {
    if (newInterval[0] > item[1]) {
      left.push(item);
    } else if (newInterval[1] < item[0]) {
      right.push(item);
    } else {
      if (min == undefined) min = Math.min(newInterval[0], item[0]);
      else min = Math.min(min, item[0]);
      max = Math.max(newInterval[1], item[1]);
    }
  });

  if (min !== undefined && max !== undefined) merged = [min, max];
  else right.push(newInterval);

  const result =
    merged.length === 0 ? [...left, ...right] : [...left, merged, ...right];

  return result.sort((a, b) => a[0] - b[0]);
};
