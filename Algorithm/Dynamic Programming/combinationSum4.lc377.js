/**
1. 确定dp数组以及下标的含义: dp[i]: 凑成目标正整数为i的排列个数为dp[i]
2. 确定递推公式: 状态转移方程 dp[i] += dp[i - nums[j]];      
3. dp数组如何初始化: dp[0]=1
4. 确定遍历顺序: 

    如果求组合数就是外层for循环遍历物品，内层for遍历背包。
    如果求排列数就是外层for遍历背包，内层for循环遍历物品。

      此题求排列数：
      for (let i = 0; i <= target; i++) {       //先遍历背包
        for (let j = 0; j < nums.length; j++) { //后遍历物品
          if (i >= nums[j]) {
            dp[i] += dp[i - nums[j]];
          }
        }
      }

5. 举例推导dp数组: */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 也就是coins changeII(lc518) 🟡的变形题，此题求的是排列个数， lc518求的是组合个数
const combinationSum4 = (nums, target) => {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;

  //先遍历背包
  for (let i = 0; i <= target; i++) {
    //后遍历物品
    for (let j = 0; j < nums.length; j++) {
      if (i >= nums[j]) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};
