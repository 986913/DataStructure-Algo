/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* -------------------   Solution1: use arry  -------------------------  */
var containsDuplicate = function (nums) {
  let seen = [];
  for (let i = 0; i < nums.length; i++) {
    if (seen.indexOf(nums[i]) === -1) seen.push(nums[i]);
    else return true;
  }
  return false;
};
/* -------------------  👍 Solution2: use hashtable:  --------------------  */
var containsDuplicate = function (nums) {
  let map = new Map();
  nums.forEach((n) => {
    map.set(n, map.get(n) + 1 || 1);
  });

  for (let [key, value] of map) {
    if (value > 1) return true;
  }

  return false;
};
