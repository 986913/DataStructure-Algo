/**
 * @param {number} n
 * @return {number}
 */

/**************************  Solution1: 自顶向下 recursion - O(2^n) bad performance ******************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
  n为树的高度(input n)--> O(2^n) * O(1)
*/
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
};

/**************************** Solution2: 自顶向下 带备忘录的recursion - O(n)  ***********************
  因为备忘录用空间换时间，时间复杂度降低了很多
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                          O(n) * O(1)
*/
var climbStairs = function (n) {
  let memo = new Array(n + 1).fill(0);
  return helper(memo, n);
};
const helper = (memo, n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[n] !== 0) return memo[n];
  // 开始递归，且把递归结果存到备忘录里
  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
};
/****************************  Solution3: 自底向上 迭代DP  ***********************************************
  1. 确定dp数组以及下标的含义:  dp[i]： 爬到第i层楼梯，有dp[i]种方法
  2. 确定递推公式: 状态转移方程 dp[i] = dp[i - 1] + dp[i - 2] 
  3. dp数组如何初始化: dp[0]= 0, dp[1]=1, dp[2] = 2;
  4. 确定遍历顺序:从前往后
  5. 举例推导dp数组: [1，2，3，5，8，13，21，...]
  
  时间复杂度： O(n)
  空间复杂度： O(n)
*/
var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0);

  dp[0] = 0; // dp[0]=0 相当于站在原地。。
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

/*************************** Solution4: 自底向上 迭代DP - 优化 ********************************************
  时间复杂度： O(n)
  空间复杂度： O(1)
 */
var climbStairs = function (n) {
  if (n <= 2) return n; // base case

  //递归关系
  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return curr;
};
