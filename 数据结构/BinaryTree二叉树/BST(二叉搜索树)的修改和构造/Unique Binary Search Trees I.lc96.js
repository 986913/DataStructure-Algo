/**
 * @param {number} n --> 代表个数！！！
 * @return {number}
 */

/********************************* Solution 1:  Top to Bottom 递归 - O(n^2)  ****************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
  n为树的高度(input n) -> O(2^log(n)) * O(n)
                      =       O(n) * O(n)
*/
var numTrees = function (n) {
  if (n === 0 || n === 1) return 1;

  let counts = 0;
  for (let i = 1; i <= n; i++) {
    // i的值作为跟节点
    const leftCounts = numTrees(i - 1);
    const rightCounts = numTrees(n - i);
    counts += leftCounts * rightCounts; // 左右子树的组合数乘积是BST的总数
  }
  return counts;
};

/********************************* Solution 2:  Top to Bottom 递归 (带备忘录) - O(n^2） ****************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                       O(n) * O(n)
*/
var numTrees = function (n) {
  // 生成n+1长度的备忘录
  let memo = new Array(n + 1).fill(0);
  return counts(n, memo);
};

const counts = (n, memo) => {
  if (n === 0 || n === 1) return 1;

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[n] !== 0) return memo[n];

  let counts = 0;
  for (let i = 1; i <= n; i++) {
    const leftCounts = numTrees(i - 1, memo);
    const rightCounts = numTrees(n - i, memo);
    counts += leftCounts * rightCounts;
  }
  memo[n] = counts; // 把递归结果存到备忘录里
  return memo[n];
};

/********************************** Solution 3: 自底向上 迭代DP  *************************************  

1. 确定dp数组以及下标的含义:    dp[i]代表 1到i为节点组成的BST个数为dp[i]
2. 确定递推公式:              dp[i] += dp[j - 1] * dp[i - j];       j-1为j为头结点左子树节点数量，i-j为以j为头结点右子树节点数量。
3. dp数组如何初始化:          dp[0]=1, dp[1]=1
4. 确定遍历顺序: 
                            首先一定是遍历节点数，从递归公式：dp[i] += dp[j - 1] * dp[i - j]可以看出，节点数为i的状态是依靠 i之前节点数的状态。那么遍历i里面每一个数作为头结点的状态，用j来遍历。
                              for (int i = 2; i <= n; i++) {
                                for (int j = 1; j <= i; j++) {
                                    dp[i] += dp[j - 1] * dp[i - j];
                                }
                              }
5. 举例推导dp数组:            举例当n为5 的时候，dp数组里的数值: [ 1,1,2,5,14,42 ]
 */
var numTrees = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = dp[i] + dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
};
