/**
 * @param {number} n
 * @return {number}
 */

/*********************************** Solution1:  DP  ********************************************
1. 确定dp数组以及下标的含义: dp[i] ： 1到i为节点组成的二叉搜索树的个数为dp[i]。
2. 确定递推公式: dp[i] += dp[j - 1] * dp[i - j]; ，      j-1 为j为头结点左子树节点数量，i-j 为以j为头结点右子树节点数量。
3. dp数组如何初始化: dp[0]=1, dp[1]=1
4. 确定遍历顺序: 
   首先一定是遍历节点数，从递归公式：dp[i] += dp[j - 1] * dp[i - j]可以看出，节点数为i的状态是依靠 i之前节点数的状态。那么遍历i里面每一个数作为头结点的状态，用j来遍历。
    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= i; j++) {
          dp[i] += dp[j - 1] * dp[i - j];
      }
    }
5. 举例推导dp数组: 举例当n为5 的时候，dp数组里的数值: [ 1,1,2,5,14,42 ]
 */

const numTrees = (n) => {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};

/*************************** Solution2:  穷举  ************************************/
let memo;

var numTrees = function (n) {
  memo = Array(n + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0)); // 备忘录的值初始化为nxn矩阵

  return count(1, n); // 计算闭区间 [1, n] 组成的 BST 个数
};

//helper function: 计算闭区间 [lo, hi] 组成的 BST 个数
const count = (low, high) => {
  if (low > high) return 1;
  // 查备忘录
  if (memo[low][high] !== 0) return memo[low][high];

  let res = 0;
  for (let i = low; i <= high; i++) {
    //i的值作为跟节点
    let left = count(low, i - 1);
    let right = count(i + 1, high);

    // 左右子树的组合数乘积是 BST 的总数
    res += left * right;
  }
  // 将结果存入备忘录
  memo[low][high] = res;

  return res;
};
