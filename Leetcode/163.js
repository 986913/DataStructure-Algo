/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
const findMissingRanges = (nums, lower, upper) => {
  let result = [];

  if (nums.length === 0 || !nums) {
    result.push(range(lower, upper));
  }

  if (lower < nums[0]) {
    result.push(range(lower, nums[0] - 1));
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 < nums[i + 1]) {
      result.push(range(nums[i] + 1, nums[i + 1] - 1));
    }
  }

  if (nums[nums.length - 1] < upper) {
    result.push(range(nums[nums.length - 1] + 1, upper));
  }

  return result;
};

const range = (scopeleft, scoperight) => {
  return scopeleft === scoperight
    ? scopeleft.toString()
    : scopeleft + '->' + scoperight;
};
