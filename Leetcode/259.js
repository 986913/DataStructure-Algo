/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function (nums, target) {
  let count = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];

      if (sum < target) {
        console.log(high, low);
        count += high - low;
        low++;
      } else {
        high--;
      }
    }
  }

  return count;
};
