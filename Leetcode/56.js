/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);

  intervals.forEach((item) => {
    if (result.length === 0) {
      result.push(item);
    } else {
      let last = result[result.length - 1];

      if (item[0] <= last[1]) {
        last[1] = Math.max(last[1], item[1]);
      } else {
        result.push(item);
      }
    }
  });

  return result;
};
