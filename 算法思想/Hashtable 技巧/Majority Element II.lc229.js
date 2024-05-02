/**
 * @param {number[]} nums
 * @return {number}
 */

/* ------------ Solution 1: Hash table ---------------- */
var majorityElement = function (nums) {
  let result = [];
  let map = new Map();
  nums.forEach((n) => {
    map.set(n, map.get(n) + 1 || 1);
  });

  for (let [key, val] of map) {
    if (val > nums.length / 3) result.push(key);
  }

  return result;
};
