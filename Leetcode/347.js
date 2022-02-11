/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  let map = new Map();
  let result = [];

  nums.forEach((item) => {
    map.set(item, map.get(item) + 1 || 1);
  });

  let sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));

  let times = 0;

  sortedMap.forEach((value, key) => {
    if (times < k) {
      result.push(key);
    }
    times++;
  });
  return result;
};
