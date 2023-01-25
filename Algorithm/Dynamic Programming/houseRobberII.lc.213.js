/**
 * @param {number[]} nums
 * @return {number}
 */

// ---------------------- DP Solution --------------------------------

//main function:
var rob = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  const result1 = rob_I(nums.slice(0, n - 1));
  const result2 = rob_I(nums.slice(1));

  return Math.max(result1, result2);
};

//helper function  --> (也就是 lc198-houseRobberI的原题)
const rob_I = (nums) => {
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  // console.log(dp);
  return dp[nums.length - 1];
};
