/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let map = new Map();
  let arr = [];

  nums.forEach((n) => {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  });
  /* iterate through a map in JS, can use forEach */
  map.forEach((value, key) => {
    if (value === 2) arr.push(key);
  });

  return arr;
};
