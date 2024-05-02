/**
 * 
 * 
假设加法的总和为x，那么减法对应的总和就是sum - x。
所以我们要求的是 x - (sum - x) = target.    x = (target + sum) / 2

此时问题就转化为，装满容量为x的背包，有几种方法。这里的x，就是bagSize，也就是我们后面要求的背包容量。


  1. 确定dp数组以及下标的含义: dp[j] 表示：填满j（包括j）这么大容积的包，有dp[j]种方法
  2. 确定递推公式: 状态转移方程 dp[j] += dp[j - nums[i]]
  3. dp数组如何初始化:   
      let dp = new Array(halfSum + 1).fill(0);
      dp[0] = 1;
  4. 确定遍历顺序: 此题对应01背包的一维dp遍历模版：
    for (let i = 0; i < stones.length; i++) {
      for (let j = sum / 2; j >= stones[i]; j--) {
        dp[j] += dp[j - nums[i]]
      }
    }
  5. 举例推导dp数组: 
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* ------------------------------------ DP ------------------------------------  */
const findTargetSumWays = (nums, target) => {
  const sum = nums.reduce((a, b) => a + b);

  if (Math.abs(target) > sum) return 0; // 此时没有方案
  if ((target + sum) % 2) return 0; // 此时没有方案

  const halfSum = (target + sum) / 2;

  let dp = new Array(halfSum + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = halfSum; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[halfSum];
};
