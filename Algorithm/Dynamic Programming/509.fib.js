/* -------------------- solution1: recursion:  O(2^n) bad-performance -------------------- */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};

/* -------------------- solution2:  DP: good performance  ------------------  */

/**
1. 确定dp数组以及下标的含义: dp[i]的定义为：第i个数的斐波那契数值
2. 确定递推公式: 状态转移方程 dp[i] = dp[i - 1] + dp[i - 2];
3. dp数组如何初始化: dp[0]=0, dp[1]=1;
4. 确定遍历顺序: 从递归公式dp[i] = dp[i - 1] + dp[i - 2];中可以看出，dp[i]是依赖 dp[i - 1] 和 dp[i - 2]，那么遍历的顺序一定是从前到后遍历的
5. 举例推导dp数组: 
      按照这个递推公式dp[i] = dp[i - 1] + dp[i - 2]，我们来推导一下，当N为10的时候，dp数组应该是如下的数列：0 1 1 2 3 5 8 13 21 34 55
      如果代码写出来，发现结果不对，就把dp数组打印出来看看和我们推导的数列是不是一致的
 */

const fib = (n) => {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp);
  return dp[n];
};

console.log(fib(3));
