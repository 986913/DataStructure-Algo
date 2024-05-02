/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * coinChange([1,2,5], 11)转换成子问题就是：1 + Min( coinChange([1,2,5], 10), coinChange([1,2,5], 9), coinChange([1,2,5], 6) )
 */
/*************************************  Solution1: 自顶向下 - 暴力递归 *************************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                              O(N) * O(K)    <--- 假设coins长度为K, amount值为N
*/
var coinChange = function (coins, amount) {
  // base case
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let minCounts = Infinity;
  for (let i = 0; i < coins.length; i++) {
    //计算子问题的结果：
    let subProblem = coinChange(coins, amount - coins[i]);
    //子问题无解则跳过：
    if (subProblem === -1) continue;
    minCounts = Math.min(minCounts, 1 + subProblem);
  }

  return minCounts === Infinity ? -1 : minCounts;
};

/*************************************  Solution2: 自顶向下 暴力递归 - 优化版 **************************************/
var coinChange = function (coins, amount) {
  let memo = new Array(amount + 1).fill(-666); // 注意备忘录初始化是amount+1
  return helper(memo, coins, amount);
};

const helper = (memo, coins, amount) => {
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[amount] !== -666) return memo[amount];

  let minCounts = Infinity;
  for (let i = 0; i < coins.length; i++) {
    let subProblem = helper(memo, coins, amount - coins[i]);
    if (subProblem === -1) continue;
    minCounts = Math.min(minCounts, 1 + subProblem);
  }
  // 把递归结果存到备忘录里
  memo[amount] = minCounts === Infinity ? -1 : minCounts;
  return memo[amount];
};

/*************************************  Solution3: 自底向上 DP **************************************
  coinChange([1,2,5], 11)转换成子问题就是：
  1 + Min( coinChange([1,2,5], 10), coinChange([1,2,5], 9), coinChange([1,2,5], 6) )

  1. 确定dp数组以及下标的含义:dp[j]：凑足总额为j所需钱币的最少个数为dp[j]
  2. 确定递推公式: 状态转移方程 dp[j] = min(dp[j - coins[i]] + 1, dp[j]);    
  3. dp数组如何初始化: dp[0]=0
  4. 确定遍历顺序: 
      如果求组合数就是外层for循环遍历物品，内层for遍历背包。
      如果求排列数就是外层for遍历背包，内层for循环遍历物品。
        此题求求钱币最小个数，那么钱币有顺序和没有顺序都可以，都不影响钱币的最小个数，所以本题并不强调集合是组合不是排列
  5. 举例推导dp数组: 
*/
const coinChange = (coins, amount) => {
  if (!amount) return 0;

  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
