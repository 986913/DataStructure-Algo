/**
 * @param {number} n
 * @return {number}
 */

/**************************  Solution1: 自顶向下 recursion - O(2^n) bad performance ******************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
  n为树的高度(cost的长度) --> O(2^n) * O(1)
*/
var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  return minimumCost(cost, n);
};
const minimumCost = (cost, curIdx) => {
  // Base case, we are allowed to start at either step 0 or step 1, and cost 0
  if (curIdx === 0 || curIdx === 1) return 0;

  //递归状态转移: 当前层最小cost = Min(一步跨上来的最小cost, 两步跨上来的最小cost)
  let downOneCost = minimumCost(cost, curIdx - 1) + cost[curIdx - 1];
  let downTwoCost = minimumCost(cost, curIdx - 2) + cost[curIdx - 2];
  return Math.min(downOneCost, downTwoCost);
};

/**************************** Solution2: 自顶向下 带备忘录的recursion - O(n)  ***********************
  因为备忘录用空间换时间，时间复杂度降低了很多
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                          O(n) * O(1)
*/
var minCostClimbingStairs = function (cost) {
  let n = cost.length;
  let memo = new Array(n + 1).fill(0);
  return minimumCost(cost, memo, n);
};
const minimumCost = (cost, memo, curIdx) => {
  // Base case, we are allowed to start at either step 0 or step 1, and cost 0
  if (curIdx === 0 || curIdx === 1) return 0;

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[curIdx] !== 0) return memo[curIdx];

  // 开始递归，且把递归结果存到备忘录里
  let downOneCost = minimumCost(cost, memo, curIdx - 1) + cost[curIdx - 1];
  let downTwoCost = minimumCost(cost, memo, curIdx - 2) + cost[curIdx - 2];
  memo[curIdx] = Math.min(downOneCost, downTwoCost);
  return memo[curIdx];
};

/****************************  Solution3: 自底向上 迭代DP  *******************************************
1. 确定dp数组以及下标的含义:  dp[i]： 爬到第i层楼梯所需要的最小cost (不包括当前楼梯的cost)
2. 确定递推公式: 状态转移方程 dp[i] = Min( dp[i-1]+cost[i-1], dp[i-2]+cost[i-2] )
3. dp数组如何初始化:        dp[0]=0, dp[1] = 0;
4. 确定遍历顺序:            从前往后
5. 举例推导dp数组: 
                          以cost = [1, 100,  1, 1, 1, 100, 1, 1, 100, 1]    为例 
                          dp数组为  [0,  0,  1,  2, 2, 3,   3, 4, 4,   5, 6]
                          dp数组长度会比cost长度多1个。答案输出dp last element就行

  时间复杂度： O(n)
  空间复杂度： O(n)
*/
var minCostClimbingStairs = function (cost) {
  let dp = new Array(cost.length); // dp[i]: 爬到第i层楼梯所需要的最小cost (不包括当前楼梯的cost)

  dp[0] = 0; //选择从0开始，站在原地不跳，cost为0
  dp[1] = 0; //选择从1开始，站在原地不跳，cost为0

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  // console.log(dp)
  return dp[cost.length];
};

/****************************  Solution4: 自底向上 迭代DP - 优化  *******************************************
  时间复杂度： O(n)
  空间复杂度： O(1)
*/
var minCostClimbingStairs = function (cost) {
  let downOne = 0;
  let downTwo = 0;

  for (let i = 2; i <= cost.length; i++) {
    let tmp = downOne;
    downOne = Math.min(downOne + cost[i - 1], downTwo + cost[i - 2]);
    downTwo = tmp;
  }

  return downOne;
};
