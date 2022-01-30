/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solution1:  brute force
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] + nums[j] === target) result = [i, j];
      j++;
    }
  }
  return result;
};

// solution2: hash map
var twoSum = function (nums, target) {
  let seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (seen.has(diff)) return [i, seen.get(diff)];
    seen.set(nums[i], i);
  }
};
