/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function (nums) {
  const mySet = new Set(nums);

  let min = 1;

  while (mySet.has(min)) {
    min++;
  }

  return min;
};

var firstMissingPositive = function (nums) {
  let missing = 0;

  for (let i = 1; i <= nums.length; i++) {
    let count = 0;

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === i) count++;
    }

    if (count === 0) missing = i;
    if (missing > 0) break;
  }

  if (missing === 0) return nums.length + 1;
  return missing;
};
