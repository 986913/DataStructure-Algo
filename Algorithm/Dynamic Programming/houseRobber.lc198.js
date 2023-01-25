/**
1. 确定dp数组以及下标的含义: dp[i]：考虑下标i（包括i）以内的房屋，最多可以偷窃的金额为dp[i]。
2. 确定递推公式: dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
    决定dp[i]的因素就是第i房间偷还是不偷。
    如果偷第i房间，那么dp[i] = dp[i - 2] + nums[i] ，即：第i-1房一定是不考虑的，找出 下标i-2（包括i-2）以内的房屋，最多可以偷窃的金额为dp[i-2] 加上第i房间偷到的钱。
    如果不偷第i房间，那么dp[i] = dp[i - 1]，即考 虑i-1房，（注意这里是考虑，并不是一定要偷i-1房，这是很多同学容易混淆的点）

3. dp数组如何初始化: dp[0]=nums[0], dp[1] = max(nums[0], nums[1]);
4. 确定遍历顺序:从前往后
    for (int i = 2; i < nums.length; i++) {
      dp[i] = max(dp[i - 2] + nums[i], dp[i - 1]);
    }
5. 举例推导dp数组:
    以输入[2,7,9,3,1]为例
    dp数组为[2,7,11,11,12] dp[nums.size() - 1]为结果
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// ---------------------- DP Solution --------------------------------
const rob = (nums) => {
  const dp = new Array(nums.length);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  // console.log(dp);
  return dp[nums.length - 1];
};
