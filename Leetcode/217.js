/**
 * @param {number[]} nums
 * @return {boolean}
 */
// use array
var containsDuplicate = function (nums) {
  let seen = [];

  for (let i = 0; i < nums.length; i++) {
    if (seen.indexOf(nums[i]) === -1) seen.push(nums[i]);
    else return true;
  }
  return false;
};

// use hashtable:

var containsDuplicate = function (nums) {
  let seen = new Map();
  let result = false;

  for (let i = 0; i < nums.length; i++) {
    seen.set(nums[i], seen.get(nums[i]) + 1 || 1);
  }

  seen.forEach((value, key) => {
    if (value > 1) result = true;
  });

  return result;
};
