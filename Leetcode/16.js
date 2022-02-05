/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let distance = Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      let currSum = nums[i] + nums[low] + nums[high];

      if (Math.abs(currSum - target) < distance) {
        sum = currSum;
        distance = Math.abs(currSum - target);
      }

      currSum < target ? low++ : high--;
    }
  }

  return sum;
};
