/**
1. 确定dp数组以及下标的含义:  dp[i]： 爬到第i层楼梯所需要的最小花费
2. 确定递推公式: 状态转移方程 dp[i] = Min( dp[i-1]+cost[i-1], dp[i-2]+cost[i-2] )
3. dp数组如何初始化: dp[0]=0, dp[2] = 0;
4. 确定遍历顺序:从前往后
5. 举例推导dp数组: 
    以cost = [1, 100,  1, 1, 1, 100, 1, 1, 100, 1]    为例 
    dp数组为  [0,  0,  1,  2, 2, 3,   3, 4, 4,   5, 6]

    dp数组长度会比cost长度多1个。答案输出dp last element就行
 */
/* ----------------------------------  solution:  DP:  -------------------------------  */
const minCostClimbingStairs = (cost) => {
  let dp = [0, 0];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  // console.log(dp)
  return dp[cost.length];
};
