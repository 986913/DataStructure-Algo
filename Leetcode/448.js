/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let len = nums.length;
  let map = new Map();

  for (let n of nums) {
    if (!map.has(n)) {
      map.set(n, 1);
    } else {
      map.set(n, map.get(n) + 1);
    }
  }

  let result = [];
  for (let i = 1; i <= len; i++) {
    if (!map.has(i)) {
      result.push(i);
    }
  }

  return result;
};
